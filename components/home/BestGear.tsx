import Image from "next/image"

const BestGear = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 mb-24 gap-12 md:items-center">
            <div className="md:order-2 overflow-hidden rounded">
                <Image
                    unoptimized={true}
                    alt="Best audio gear"
                    src='/assets/shared/desktop/image-best-gear.jpg'
                    width={100}
                    height={100}
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <div className="text-center md:text-left">
                <h3 className="h3">
                    Bringing you the
                    <span className="text-primary mx-1">
                        best
                    </span>audio gear
                </h3>
                <p className="body text-gray-600 mt-4">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
        </section>
    )
}

export default BestGear