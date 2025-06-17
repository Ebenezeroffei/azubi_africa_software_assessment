import ProductDetailPageWrapper from "@/components/products/ProductDetailPageWrapper";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Product Detail"
}

type PageProps = {
    params: Promise<{
        productId: string,
    }>
}

const ProductDetailPage = async ({ params }: PageProps) => {
    const { productId } = await params

    return (
        <ProductDetailPageWrapper productId={productId} />
    )
}

export default ProductDetailPage