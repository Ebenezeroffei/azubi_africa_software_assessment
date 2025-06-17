'use client';
import { useRouter } from "next/navigation";
import CustomOutlineButton from "../buttons/CustomOutlineButton"

const ZX7Speaker = () => {
  const router = useRouter();

  return (
    <section className="mb-24 rounded flex flex-col items-start py-24 px-12 " id="home-zx7-speaker">
      <p className="h4 text-shadow-xs text-shadow-gray-800">
        ZX7 Speaker
      </p>
      <CustomOutlineButton
        text="See Product"
        onPressed={() => router.push('/products/zx7-speaker')}
      />
    </section>
  )
}

export default ZX7Speaker