import data from '@/data.json';
import Image from 'next/image';


type ProductGalleryProps = {
    gallery: typeof data[0]['gallery']
}

const ProductGallery = ({
    gallery
}: ProductGalleryProps) => {
    return (
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            <div className='flex flex-col gap-4'>
                <Image
                    unoptimized={true}
                    src={gallery.first.desktop}
                    alt='Gallery'
                    width={50}
                    height={100}
                    className='w-full object-cover object-center rounded'
                />
                <Image
                    unoptimized={true}
                    src={gallery.second.desktop}
                    alt='Gallery'
                    width={50}
                    height={100}
                    className='w-full object-cover object-center rounded'
                />
            </div>
            <Image
                unoptimized={true}
                src={gallery.third.desktop}
                alt='Gallery'
                width={100}
                height={200}
                className='w-full object-cover object-center  rounded'
            />
        </section>
    )
}

export default ProductGallery