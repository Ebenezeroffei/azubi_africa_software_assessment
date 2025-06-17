'use client';

import BestGear from "../home/BestGear";
import PageHeader from "../misc/PageHeader";
import ProductDisplay from "../misc/ProductDisplay";
import ShopItemSections from "../misc/ShopItemSections";

const EarphonesPageWrapper = () => {

    return (
        <section>
            <PageHeader title="Earphones" />
            <div className="container mx-auto px-4 ">
                <ProductDisplay
                    name="YX1 WIRELESS EARPHONES"
                    description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
                    isNewProduct={true}
                    productImage="/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
                    productUrl='/products/yx1-earphones'
                />
                <ShopItemSections />
                <BestGear />
            </div>
        </section>
    )
}

export default EarphonesPageWrapper;