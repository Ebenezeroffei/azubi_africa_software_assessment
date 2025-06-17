'use client';

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoCartOutline, IoMenu } from "react-icons/io5";
import CartModal from './CartModal';
import { useAppContext } from '@/providers/ContextProvider';
import SecondaryNavBar from './SecondaryNavbar';
import { useObserveScreenSize } from '@/hooks/useObserveScreenSize';


type NavItemProps = {
    href: string,
    name: string,
}

const NavItem = ({
    href,
    name
}: NavItemProps) => {
    return (
        <Link href={href} className='text-white text-xs tracking-widest uppercase hover:text-secondary'>
            {name}
        </Link>
    );
}

const AppName = () => {
    return (
        <Link href={'/'} className='text-white font-black tracking-wide text-lg'>
            audiophile
        </Link>

    )
}

const Header = () => {
    const { showCart, setShowCart, showSecondarySidebar, setShowSecondarySidebar } = useAppContext();

    useEffect(() => {
        (showCart || showSecondarySidebar)
            ? document.body.style.overflow = 'hidden'
            : document.body.style.overflow = 'auto';

    }, [showCart, showSecondarySidebar])

    return (
        <>
            <header className='bg-dark-1 p-4 relative'>
                {
                    showCart && (
                        <CartModal />
                    )
                }
                {
                    showSecondarySidebar && (
                        <SecondaryNavBar />
                    )
                }
                <section className='container py-2 mx-auto flex justify-between items-center'>
                    <section
                        className='cursor-pointer sm:hidden'
                        onClick={() => setShowSecondarySidebar(_ => true)}
                    >
                        <IoMenu
                            className='text-white'
                            size={20}
                        />
                    </section>
                    <div className='flex items-center gap-6'>
                        <section
                            className='cursor-pointer hidden sm:block md:hidden'
                            onClick={() => setShowSecondarySidebar(_ => true)}
                        >
                            <IoMenu
                                className='text-white'
                                size={20}
                            />
                        </section>
                        <AppName />
                    </div>
                    <nav className='items-center gap-8 hidden md:flex'>
                        <NavItem
                            href='/'
                            name='Home'
                        />
                        <NavItem
                            href='/headphones'
                            name='Headphones'
                        />
                        <NavItem
                            href='/speakers'
                            name='Speakers'
                        />
                        <NavItem
                            href='/earphones'
                            name='Earphones'
                        />
                    </nav>
                    <div
                        className='cursor-pointer'
                        onClick={() => setShowCart(_ => true)}
                    >
                        <IoCartOutline
                            className='text-white'
                            size={20}
                        />
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
export { AppName, NavItem }