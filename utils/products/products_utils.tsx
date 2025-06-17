import CartModel from '@/@types/CartModel';
import CartModal from '@/components/misc/CartModal';
import ThankYou from '@/components/products/ThankYou';
import Validators from '@/constants/misc/validators';
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
        const name = document.querySelector<HTMLInputElement>('#name')?.value;
        const email = document.querySelector<HTMLInputElement>('#email')?.value!;
        const phoneNumber = document.querySelector<HTMLInputElement>('#phone-number')?.value;
        const country = document.querySelector<HTMLInputElement>('#country')?.value;
        const city = document.querySelector<HTMLInputElement>('#city')?.value;
        const address = document.querySelector<HTMLInputElement>('#address')?.value;
        const zipCode = document.querySelector<HTMLInputElement>('#zip-code')?.value;
        if (name && Validators.Email.test(email) && phoneNumber && country && city && address && zipCode) {
            const { setModalContent, setShowSmallModal } = contextValues;
            setModalContent(_ => <ThankYou />)
            setShowSmallModal(_ => true);
        }
        else {
            toast.warning("Please ensure you have filled the details in the checkout section.")
        }
    }


}

export default ProductUtils;