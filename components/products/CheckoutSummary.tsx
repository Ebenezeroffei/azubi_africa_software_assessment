'use client';

import { CartItemModel } from "@/@types/CartModel";
import { useAppContext } from "@/providers/ContextProvider";
import CustomButton from "../buttons/CustomButton";
import MiscUtils from "@/utils/misc/misc_utils";
import Image from "next/image";
import ProductUtils from "@/utils/products/products_utils";
import { useId } from "react";

const CheckoutSummary = () => {
    const contextValues = useAppContext();
    const { cart, setCart } = contextValues;
    const cartItems: CartItemModel[] = cart ? Object.values(cart as Object) : [];
    let subTotal = 0
    cartItems.forEach(ele => subTotal += (ele.price * ele.quantity))
    const VAT = subTotal * 0.2;
    const total = subTotal + 50 + VAT;
    const randomId = useId();

    return (
        <section className="bg-white md:max-w-[350px] flex-1 p-6">
            <h5 className="h6">Summary</h5>
            <div className="my-4 space-y-4">
                {
                    cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <section
                                className='flex gap-4 justify-between items-start'
                                key={`${index}_${randomId}_checkout_item`}
                            >
                                <div className='flex gap-4 items-center'>
                                    <section className='rounded bg-light-1 p-2 flex justify-center items-center'>
                                        <Image
                                            alt={item.product.name}
                                            src={item.product.image.desktop}
                                            width={40}
                                            height={40}
                                        />
                                    </section>
                                    <section>
                                        <p className='subtitle'>
                                            {item.product.name}
                                        </p>
                                        <p className='subtitle text-gray-500'>
                                            {MiscUtils.formatToCurrencyUSD(item.price)}
                                        </p>
                                    </section>
                                </div>
                                <p className="subtitle text-gray-500">
                                    x{item.quantity}
                                </p>
                            </section>
                        ))
                    ) : (
                        <p className='h6 text-center text-gray-500 my-8'>
                            No Items
                        </p>
                    )
                }
            </div>
            <div className="space-y-4">
                <section className='flex justify-between'>
                    <p className='h6 text-gray-500'>Total</p>
                    <p className='h6'>{MiscUtils.formatToCurrencyUSD(subTotal)}</p>
                </section>
                <section className='flex justify-between'>
                    <p className='h6 text-gray-500'>Shipping</p>
                    <p className='h6'>{MiscUtils.formatToCurrencyUSD(cartItems.length > 0 ? 50 : 0)}</p>
                </section>
                <section className='flex justify-between'>
                    <p className='h6 text-gray-500'>VAT (Included)</p>
                    <p className='h6'>{MiscUtils.formatToCurrencyUSD(VAT)}</p>
                </section>
                <section className='flex justify-between'>
                    <p className='h6 text-gray-500'>Grand Total</p>
                    <p className='h6 text-primary'>{MiscUtils.formatToCurrencyUSD(total)}</p>
                </section>
            </div>
            <CustomButton
                text="Continue To Pay"
                fill={true}
                onPressed={() => ProductUtils.continueToPay(
                    contextValues,
                )}
            />
        </section>
    )
}

export default CheckoutSummary