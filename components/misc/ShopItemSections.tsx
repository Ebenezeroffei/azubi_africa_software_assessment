import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdChevronRight } from 'react-icons/md'

type ShopItemSectionProps = {
    src: string,
    name: string
}

const ShopItemSection = ({
    src,
    name
}: ShopItemSectionProps) => {
    return (
        <section className='relative pt-12'>
            <div className='flex justify-center absolute top-1 w-full'>
                <Image
                    width={100}
                    height={100}
                    src={src}
                    alt='Section item'
                />
            </div>
            <div className='px-4 pt-12 pb-4 bg-gray-100 rounded-sm'>
                <p className='h6 text-center'>
                    {name}
                </p>
                <Link href={'/'} className='uppercase font-semibold items-center tracking-widest text-gray-600 text-xs flex justify-center mt-2'>
                    Shop
                    <MdChevronRight
                        size={15}
                        className='text-secondary'
                    />
                </Link>
            </div>
        </section>
    )
}

const ShopItemSections = () => {
    return (
        <section className='grid grid-cols-1 gap-y-8 gap-x-2 md:gap-x-12 sm:grid-cols-3 md:grid-cols-3 my-24'>
            <ShopItemSection
                src='/assets/shared/desktop/image-category-thumbnail-headphones.png'
                name='Headphones'
            />
            <ShopItemSection
                src='/assets/shared/desktop/image-category-thumbnail-speakers.png'
                name='Speakers'
            />
            <ShopItemSection
                src='/assets/shared/desktop/image-category-thumbnail-earphones.png'
                name='Earphones'
            />
        </section>
    )
}

export default ShopItemSections