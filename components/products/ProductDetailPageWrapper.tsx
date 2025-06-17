'use client';
import data from '@/data.json';
import Image from 'next/image';
import CustomButton from '../buttons/CustomButton';
import { useEffect, useState } from 'react';
import ProductFeatures from './ProductFeatures';
import OtherProducts from './OtherProducts';
import ShopItemSections from '../misc/ShopItemSections';
import BestGear from '../home/BestGear';
import ProductGallery from './ProductGallery';
import ProductUtils from '@/utils/products/products_utils';
import { useAppContext } from '@/providers/ContextProvider';
import GoBack from '../misc/GoBack';

type ProductDetailPageWrapperProps = {
    productId: string,
}

const ProductDetailPageWrapper = ({
    productId
}: ProductDetailPageWrapperProps) => {
    const { setCart } = useAppContext();
    const [isPageReady, setIsPageReady] = useState(false)
    const [product, setProduct] = useState<typeof data[0]>()
    const [quantity, setQuantity] = useState(1)
    const decreaseQuantity = () => setQuantity(prevQuantity => prevQuantity - 1 === 0
        ? prevQuantity : prevQuantity - 1
    );

    useEffect(() => {
        if (productId) {

            for (let index = 0; index < data.length; index++) {
                const product = data[index];
                if (product.slug == productId) {
                    setProduct(_ => product);
                    setIsPageReady(_ => true);
                    break;
                }

            }
        }
    }, [])


    if (isPageReady && product) return (
        <section className='container mx-auto px-4'>
            <GoBack />
            {/* Product Info */}
            <section className="grid grid-cols-1 md:grid-cols-2 items-center mb-8 justify-center gap-8">
                <div className={`bg-light-1 `}>
                    <Image
                        alt="Image"
                        src={product.image.desktop}
                        width={100}
                        height={100}
                        className={`w-[400px] h-[400px] rounded mx-auto object-contain object-center`}
                        unoptimized={true}
                    />
                </div>
                <div className="gap-4 flex flex-col items-center md:items-start">
                    {
                        product.new && (
                            <p className="custom-overline text-secondary text-center md:text-left">
                                New Product
                            </p>
                        )
                    }
                    <h3 className="h3 text-center md:text-left">
                        {product.name}
                    </h3>
                    <p className="body text-gray-500 text-center md:text-left ">
                        {product.description}
                    </p>
                    <p>
                        $ {product.price}
                    </p>
                    <section className='flex gap-2 items-center'>
                        <div className='flex items-center bg-light-1 rounded-xs h-[48px] overflow-hidden'>
                            <section
                                onClick={decreaseQuantity}
                                className='text-gray-500 p-4 cursor-pointer transition-colors duration-150 hover:bg-secondary hover:text-gray-800'
                            >
                                -
                            </section>
                            <p className='p-4'>
                                {quantity}
                            </p>
                            <section
                                onClick={() => setQuantity(prevQuantity => prevQuantity + 1)}
                                className='text-gray-500 p-4 cursor-pointer transition-colors duration-150 hover:bg-secondary hover:text-gray-800'
                            >
                                +
                            </section>
                        </div>
                        <CustomButton
                            onPressed={() => ProductUtils.addItemToCart(
                                quantity,
                                product,
                                setCart
                            )}
                            text="Add To Cart"
                        />
                    </section>
                </div>
            </section>
            <ProductFeatures
                features={product.features}
                itemsInBox={product.includes}
            />
            <ProductGallery
                gallery={product.gallery}
            />
            <OtherProducts products={product.others} />
            <ShopItemSections />
            <BestGear />
        </section>
    )

    return (
        <section className='flex justify-center items-center py-24 px-4'>
            <h4 className='h3 text-center'>
                Loading
            </h4>
        </section>
    )
}

export default ProductDetailPageWrapper