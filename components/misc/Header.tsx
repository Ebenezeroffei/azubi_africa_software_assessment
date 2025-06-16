import Link from 'next/link'
import React from 'react'
import { IoCartOutline, IoMenu } from "react-icons/io5";


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
    return (
        <header className='bg-dark-1 p-4'>
            <section className='container py-2 mx-auto flex justify-between items-center'>
                <section className='cursor-pointer sm:hidden'>
                    <IoMenu
                        className='text-white'
                        size={20}
                    />
                </section>
                <div className='flex items-center gap-6'>
                    <section className='cursor-pointer hidden sm:block md:hidden '>
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
                        href='/'
                        name='Headphones'
                    />
                    <NavItem
                        href='/'
                        name='Speakers'
                    />
                    <NavItem
                        href='/'
                        name='Earphones'
                    />
                </nav>
                <Link href={'/cart'}>
                    <IoCartOutline
                        className='text-white'
                        size={20}
                    />
                </Link>
            </section>
        </header>
    )
}

export default Header
export { AppName, NavItem }