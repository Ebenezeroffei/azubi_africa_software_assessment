
import data from '@/data.json';
import Image from 'next/image';
import { useId } from 'react';
import CustomButton from '../buttons/CustomButton';
import { useRouter } from 'next/navigation';

type OtherProductProps = {
    product: typeof data[0]['others'][0]
}

const OtherProduct = ({ product }: OtherProductProps) => {
    const router = useRouter();

    return (
        <section className='space-y-4'>
            <div className='bg-light-1 rounded p-4'>
                <Image
                    src={product.image.desktop}
                    alt={product.name}
                    width={200}
                    height={200}
                    className='object-center object-contain mx-auto'
                />
            </div>
            <h5 className='text-center h6'>
                {product.name}
            </h5>
            <CustomButton
                text='See Product'
                onPressed={() => router.push(`/products/${product.slug}`)}
            />
        </section>
    )
}

type OtherProductsProps = {
    products: typeof data[0]['others']
}

const OtherProducts = ({ products }: OtherProductsProps) => {
    const randomId = useId();

    return (
        <section className="mb-12">
            <h3 className="h5 text-center">You May Also Like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 mt-8 gap-8">
                {
                    products.map((ele, index) => (

                        <OtherProduct
                            key={`${index}_${randomId}_other_product`}
                            product={ele}
                        />
                    ))
                }
            </div>

        </section>
    )
}

export default OtherProducts