import { useId } from 'react'

type ProductFeaturesProps = {
    features: string,
    itemsInBox: {
        item: string,
        quantity: number,
    }[]
}

const ProductFeatures = ({
    features,
    itemsInBox
}: ProductFeaturesProps) => {
    const randomId = useId();

    return (
        <section className='my-12 grid grid-cols-1 md:grid-cols-5 gap-10 justify-between'>
            <div className='col-span-3'>
                <h3 className="h5">Features</h3>
                <section className='mt-8 body text-gray-500'>
                    {features}
                </section>
            </div>
            <div className='col-span-2'>
                <h3 className="h5">In The Box</h3>
                <section className="mt-8">
                    {
                        itemsInBox.map((ele, index) => (
                            <div
                                key={`${index}_${randomId}_product_feature`}
                                className='flex gap-2 body'
                            >
                                <p className='text-secondary font-semibold'>
                                    {ele.quantity}x
                                </p>
                                <p className='text-gray-500'>
                                    {ele.item}
                                </p>
                            </div>
                        ))
                    }
                </section>
            </div>
        </section>
    )
}

export default ProductFeatures