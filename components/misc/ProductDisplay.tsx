import Image from "next/image"
import CustomButton from "../buttons/CustomButton"
import { useRouter } from "next/navigation"

type ProductDisplayProps = {
    name: string,
    description: string,
    productUrl: string,
    productImage: string,
    reverseOrder?: boolean,
    isNewProduct?: boolean,
}

const ProductDisplay = ({
    name,
    description,
    productUrl,
    productImage,
    reverseOrder = false,
    isNewProduct = false,
}: ProductDisplayProps) => {
    const router = useRouter();

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 items-center my-16 justify-center gap-8">
            <div className={`bg-light-1  ${reverseOrder && 'md:order-2'}`}>
                <Image
                    alt="Image"
                    src={productImage}
                    width={100}
                    height={100}
                    unoptimized={true}
                    className={`w-[400px] h-[400px] rounded mx-auto object-contain object-center`}
                />
            </div>
            <div className="gap-4 flex flex-col items-center md:items-start">
                {
                    isNewProduct && (
                        <p className="custom-overline text-secondary text-center md:text-left">
                            New Product
                        </p>
                    )
                }
                <h3 className="h3 text-center md:text-left">
                    {name}
                </h3>
                <p className="body text-gray-500 text-center md:text-left ">
                    {description}
                </p>
                <CustomButton
                    onPressed={() => router.push(productUrl)}
                    text="See Product"
                />
            </div>
        </section>
    )
}

export default ProductDisplay