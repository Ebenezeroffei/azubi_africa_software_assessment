'use client'

import Image from "next/image"
import CustomOutlineButton from "../buttons/CustomOutlineButton"
import { useRouter } from "next/navigation"

const YX1Earphones = () => {
    const router = useRouter();

    return (
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-24">
            <Image
                width={100}
                height={100}
                src='/assets/home/desktop/image-earphones-yx1.jpg'
                alt="Earphones"
                unoptimized={true}
                className="w-full h-full object-cover object-center rounded"
            />
            <div className="py-24 px-12 bg-light-1 rounded flex flex-col justify-center items-start">
                <p className="h4">YX1 Earphones</p>
                <CustomOutlineButton
                    text="See Product"
                    onPressed={() => router.push('/products/yx1-earphones')}
                />
            </div>
        </section>
    )
}

export default YX1Earphones