import ShopItemSections from '../misc/ShopItemSections'
import ZX7Speaker from './ZX7Speaker'
import YX1Earphones from './YX1Earphones'
import BestGear from './BestGear'
import Intro from './Intro'
import ZX9Speaker from './ZX9Speaker'

const HomePageWrapper = () => {
    return (
        <section >
            <Intro />
            <div className="container mx-auto space-y-8 px-4">
                <ShopItemSections />
                <ZX9Speaker />
                <ZX7Speaker />
                <YX1Earphones />
                <BestGear />
            </div>
        </section>
    )
}

export default HomePageWrapper