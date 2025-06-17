'use client'

import Image from "next/image"
import CustomOutlineButton from "../buttons/CustomOutlineButton"
import { useRouter } from "next/navigation"

const ZX9Speaker = () => {
  const router = useRouter();

  return (
    <section className='p-24 bg-primary overflow-hidden rounded grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-24'>
      <div className="h-full relative">
        <Image
          src='/assets/home/desktop/image-speaker-zx9.png'
          alt="X29 Speaker"
          width={100}
          height={100}
          unoptimized={true}
          className="w-[300px] md:absolute top-0"
        />
      </div>
      <div>
        <h1 className='h1 text-white text-center md:text-left'>
          ZX9 Speaker
        </h1>
        <p className='mt-4 body text-white text-center md:text-left'>
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <CustomOutlineButton
          text="See Product"
          onPressed={() => router.push('/products/zx9-speaker')}
        />
      </div>
    </section>
  )
}

export default ZX9Speaker