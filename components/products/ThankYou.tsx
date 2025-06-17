import { useAppContext } from "@/providers/ContextProvider"
import CustomButton from "../buttons/CustomButton";
import { useRouter } from "next/navigation";
import MiscUtils from "@/utils/misc/misc_utils";
import { useId, useState } from "react";
import { CartItemModel } from "@/@types/CartModel";
import Image from "next/image";
import ProductUtils from "@/utils/products/products_utils";

const ThankYou = () => {
    const { cart, setCart, setShowSmallModal } = useAppContext();
    const router = useRouter();
    const [showMore, setShowMore] = useState(false);
    const cartItems: CartItemModel[] = cart ? Object.values(cart as Object) : [];
    let subTotal = 0
    cartItems.forEach(ele => subTotal += (ele.price * ele.quantity))
    const VAT = subTotal * 0.2;
    const total = subTotal + 50 + VAT;
    const randomId = useId();

    const backToHome = () => {
        router.replace('/');
        setShowSmallModal(_ => false);
        ProductUtils.clearCart(
            setCart,
        );
    }

    return (
        <section className="space-y-4">
            <Image
                width={50}
                height={50}
                src={'/assets/checkout/icon-order-confirmation.svg'}
                alt='Cash on delivery'
            />
            <h3 className="h5">
                Thank you <br />
                For your order
            </h3>
            <p className="text-sm text-gray-500">
                You will receive an email confirmation shortly.
            </p>
            <div className="rounded-lg overflow-hidden grid grid-cols-7">
                <section className="p-4 bg-light-1 col-span-4">
                    <div>
                        {
                            cartItems.length > 0 ? (
                                cartItems.map((item, index) => (
                                    <section
                                        className='flex gap-4 justify-between items-start bg-light-1'
                                        key={`${index}_${randomId}_checkout_item`}
                                    >
                                        <div className='flex gap-4 items-center'>
                                            <Image
                                                alt={item.product.name}
                                                src={item.product.image.desktop}
                                                width={40}
                                                height={40}
                                            />
                                            <section>
                                                <p className='text-xs uppercase font-semibold'>
                                                    {item.product.name}
                                                </p>
                                                <p className='text-xs font-semibold text-gray-500 mt-1'>
                                                    {MiscUtils.formatToCurrencyUSD(item.price)}
                                                </p>
                                            </section>
                                        </div>
                                        <p className="text-xs font-semibold text-gray-500">
                                            x{item.quantity}
                                        </p>
                                    </section>
                                ))
                            ) : (
                                <p className='h6 text-center text-gray-500 my-4'>
                                    No Items
                                </p>
                            )
                        }
                    </div>
                    <div
                        onClick={() => setShowMore(prevShowMore => !prevShowMore)}
                        className="border-t cursor-pointer border-gray-300 mt-4 pt-4 text-xs font-semibold text-gray-500 text-center"
                    >
                        {
                            showMore
                                ? "View less"
                                : "and two other items"
                        }

                    </div>
                </section>
                <section className="p-4 bg-dark-1 col-span-3 flex items-end">
                    <div>
                        <p className="text-xs uppercase text-zinc-500 mb-1 tracking-wide">
                            Grand Total
                        </p>
                        <p className="text-sm font-semibold text-white">
                            {MiscUtils.formatToCurrencyUSD(total)}
                        </p>
                    </div>
                </section>
            </div>
            <CustomButton
                text="Back To Home"
                fill={true}
                onPressed={backToHome}
            />
        </section>
    )
}

export default ThankYou