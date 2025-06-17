'use client';

import BestGear from "../home/BestGear";
import PageHeader from "../misc/PageHeader";
import ProductDisplay from "../misc/ProductDisplay";
import ShopItemSections from "../misc/ShopItemSections";

const HeadphonesPageWrapper = () => {
  // TODO: Update data

  return (
    <section>
      <PageHeader title="Headphones" />
      <div className="container mx-auto px-4 ">
        <ProductDisplay
          name="XX99 Mark II Headphones"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          isNewProduct={true}
          productImage="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
          productUrl='/products/xx99-mark-two-headphones'
        />
        <ProductDisplay
          name="XX99 Mark I Headphones"
          description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          productImage="/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
          productUrl="/products/xx99-mark-one-headphones"
          reverseOrder={true}
        />
        <ProductDisplay
          name="XX59 Headphones"
          description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          productImage="/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
          productUrl='/products/xx59-headphones'
        />
        <ShopItemSections />
        <BestGear />
      </div>
    </section>
  )
}

export default HeadphonesPageWrapper;