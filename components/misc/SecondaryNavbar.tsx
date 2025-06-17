'use client';

import { useEffect, useRef } from "react";
import ShopItemSections, { ShopItemSection } from "./ShopItemSections";
import { useAppContext } from "@/providers/ContextProvider";
import { useObserveScreenSize } from "@/hooks/useObserveScreenSize";

const SecondaryNavBar = () => {
    const isSmallScreen = useObserveScreenSize();

    const { setShowSecondarySidebar } = useAppContext();
    const secondaryNavbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (ele: MouseEvent) => {
            if (secondaryNavbarRef.current && !secondaryNavbarRef.current.contains(ele.target as Node)) {
                setShowSecondarySidebar(_ => false);
            }
        }

        document.addEventListener('mousedown', handleOutsideClick);

        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [])

    return (
        <section className={`fixed w-full h-[calc(100vh_-_72px)] z-20 bg-black/40 top-[72px] left-0 ${!isSmallScreen && 'hidden'}`}>
            <div
                className='grid grid-cols-1 gap-y-8 gap-x-2 md:gap-x-12 sm:grid-cols-3 md:grid-cols-3 py-12 bg-white max-h-full overflow-auto px-4'
                ref={secondaryNavbarRef}
            >
                <ShopItemSection
                    src='/assets/shared/desktop/image-category-thumbnail-headphones.png'
                    name='Headphones'
                    href='/headphones'
                />
                <ShopItemSection
                    src='/assets/shared/desktop/image-category-thumbnail-speakers.png'
                    name='Speakers'
                    href='/speakers'
                />
                <ShopItemSection
                    src='/assets/shared/desktop/image-category-thumbnail-earphones.png'
                    name='Earphones'
                    href='/earphones'
                />
            </div>
        </section>
    )
}

export default SecondaryNavBar