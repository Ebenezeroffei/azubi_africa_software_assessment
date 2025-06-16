import Image from 'next/image'
import React from 'react'
import ShopItemSections from '../misc/ShopItemSections'
import X29Speaker from './X29Speaker'
import ZX7Speaker from './ZX7Speaker'
import YX1Earphones from './YX1Earphones'
import BestGear from './BestGear'
import Intro from './Intro'

const HomePageWrapper = () => {
    return (
        <section >
            <Intro />
            <div className="container mx-auto space-y-8 px-4">
                <ShopItemSections />
                <X29Speaker />
                <ZX7Speaker />
                <YX1Earphones />
                <BestGear />
            </div>
        </section>
    )
}

export default HomePageWrapper