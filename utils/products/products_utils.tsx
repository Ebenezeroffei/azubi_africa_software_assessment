import CartModel from '@/@types/CartModel';
import CartModal from '@/components/misc/CartModal';
import ThankYou from '@/components/products/ThankYou';
import data from '@/data.json';
import { ContextValuesType } from '@/providers/ContextProvider';
import { act, Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

class ProductUtils {
    static addItemToCart = (
        quantity: number,
        product: typeof data[0],
        setCart: Dispatch<SetStateAction<CartModel | undefined>>,
    ) => {
        const productId = product.slug;
        const cart: CartModel = JSON.parse(localStorage.getItem('cart') ?? '{}')
        if (cart[productId]) {
            const product = cart[productId];
            product.quantity = product.quantity + quantity;
            cart[productId] = product;
        }
        else {
            cart[product.slug] = {
                product,
                quantity,
                price: product.price,
            }
        }
        toast.success(`${product.name} added to cart`);
        localStorage.setItem('cart', JSON.stringify(cart))
        setCart(_ => cart);
    }

    static clearCart = (
        setCart: Dispatch<SetStateAction<CartModel | undefined>>,
    ) => {
        localStorage.removeItem('cart');
        setCart(_ => undefined);
        toast.success("Cart cleared.")
    }

    static modifyCartItem = (
        productId: string,
        setCart: Dispatch<SetStateAction<CartModel | undefined>>,
        action: 'increase' | 'decrease',
    ) => {
        const cart: CartModel = JSON.parse(localStorage.getItem('cart') ?? '{}');
        const product = cart[productId];

        if (action === 'decrease' && product.quantity - 1 > 0) {
            product['quantity'] = product.quantity - 1;
        }
        else if (action === 'increase') {
            product['quantity'] = product.quantity + 1;
        }

        cart[productId] = product;
        localStorage.setItem('cart', JSON.stringify(cart));
        setCart(_ => cart);
    }

    static continueToPay = (
        contextValues: ContextValuesType,

    ) => {
        const { setModalContent, setShowSmallModal } = contextValues;
        setModalContent(_ => <ThankYou />)
        setShowSmallModal(_ => true);
    }
}

export default ProductUtils;