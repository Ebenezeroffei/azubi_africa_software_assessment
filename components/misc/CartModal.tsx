'use client';

import Image from 'next/image';
import CustomButton from '../buttons/CustomButton'
import { useEffect, useRef } from 'react';
import { useAppContext } from '@/providers/ContextProvider';
import ProductUtils from '@/utils/products/products_utils';
import { CartItemModel } from '@/@types/CartModel';
import MiscUtils from '@/utils/misc/misc_utils';
import { useRouter } from 'next/navigation';

type CartItemProps = {
    item: CartItemModel,
}

const CartItem = ({
    item
}: CartItemProps) => {
    const { setCart } = useAppContext();

    return (
        <section className='flex gap-4 justify-between items-center'>
            <div className='flex gap-4 items-center'>
                <section className='rounded bg-light-1 p-2 flex justify-center items-center'>
                    <Image
                        alt={item.product.name}
                        src={item.product.image.desktop}
                        width={50}
                        height={50}
                    />
                </section>
                <section>
                    <p className='h6'>
                        {item.product.name}
                    </p>
                    <p className='subtitle text-gray-500'>
                        {MiscUtils.formatToCurrencyUSD(item.price)}
                    </p>
                </section>
            </div>
            <div className='flex items-center flex-none bg-light-1 rounded-xs h-[48px] overflow-hidden'>
                <section
                    onClick={() => ProductUtils.modifyCartItem(
                        item.product.slug,
                        setCart,
                        'decrease'
                    )}
                    className='text-gray-500 p-3 cursor-pointer transition-colors duration-150 hover:bg-secondary hover:text-gray-800'
                >
                    -
                </section>
                <p className='p-3'>
                    {item.quantity}
                </p>
                <section
                    onClick={() => ProductUtils.modifyCartItem(
                        item.product.slug,
                        setCart,
                        'increase'
                    )}
                    className='text-gray-500 p-3 cursor-pointer transition-colors duration-150 hover:bg-secondary hover:text-gray-800'
                >
                    +
                </section>
            </div>
        </section>
    );
}


const CartModal = () => {
    const { cart, setCart, setShowCart } = useAppContext();
    const cartItems: CartItemModel[] = cart ? Object.values(cart as Object) : [];
    const cartEleRef = useRef<HTMLDivElement>(null)
    let total = 0
    cartItems.forEach(ele => total += (ele.price * ele.quantity))
    const router = useRouter();

    useEffect(() => {
        const handleOutsideClick = (ele: MouseEvent) => {
            if (cartEleRef.current && !cartEleRef.current.contains(ele.target as Node)) {
                setShowCart(_ => false);
            }
        }

        document.addEventListener('mousedown', handleOutsideClick);

        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [])

    const goToCheckout = () => {
        setShowCart(_ => false);
        router.push('/checkout')
    }

    return (
        <section className='fixed w-full h-[calc(100vh_-_72px)] z-10 items-start bg-black/40 top-[72px] left-0 flex p-4 justify-end'>
            <div
                ref={cartEleRef}
                className='max-w-[500px] max-h-[calc(100%_-_16px)] overflow-auto flex-1 p-6 bg-white rounded h-auto space-y-4'
            >
                <section className='flex justify-between'>
                    <p className='h6'>Cart ({cartItems.length})</p>
                    <p
                        className='text-sm text-gray-400 underline'
                        onClick={() => ProductUtils.clearCart(
                            setCart
                        )}
                    >
                        Remove all
                    </p>
                </section>
                <section className='space-y-4'>
                    {
                        cartItems.length > 0 ? (
                            cartItems.map((ele, index) => (
                                <CartItem
                                    item={ele}
                                    key={`${index}_cart_item`}
                                />
                            ))
                        ) : (
                            <p className='h6 text-center text-gray-500 my-8'>
                                No Items
                            </p>
                        )
                    }
                </section>
                <section className='flex justify-between'>
                    <p className='h6 text-gray-500'>Total</p>
                    <p className='h6'>{MiscUtils.formatToCurrencyUSD(total)}</p>
                </section>
                <CustomButton
                    fill={true}
                    text='Checkout'
                    onPressed={goToCheckout}
                />
            </div>
        </section>
    )
}

export default CartModal