'use client';

import BestGear from "../home/BestGear";
import PageHeader from "../misc/PageHeader";
import ProductDisplay from "../misc/ProductDisplay";
import ShopItemSections from "../misc/ShopItemSections";

const SpeakersPageWrapper = () => {

  return (
    <section>
      <PageHeader title="Speakers" />
      <div className="container mx-auto px-4 ">
        <ProductDisplay
          name="ZX9 SPEAKER"
          description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          isNewProduct={true}
          productImage="/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
          productUrl='/products/zx9-speaker'
        />
        <ProductDisplay
          name="ZX7 SPEAKER"
          description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          productImage="/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"
          productUrl="/products/zx7-speaker"
          reverseOrder={true}
        />
        <ShopItemSections />
        <BestGear />
      </div>
    </section>
  )
}

export default SpeakersPageWrapper;