'use client';

import React from 'react'
import { AppName, NavItem } from './Header'
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter, FaInstagram } from "react-icons/fa";


const SocialMediaHandles = () => {
    return (
        <section className='flex gap-4 items-center'>
            <ImFacebook2
                className='text-white hover:text-secondary cursor-pointer'
                size={20}
            />
            <FaTwitter
                className='text-white hover:text-secondary cursor-pointer'
                size={20}
            />
            <FaInstagram
                className='text-white hover:text-secondary cursor-pointer'
                size={20}
            />
        </section>
    );
}

const Footer = () => {
    const todaysDate = new Date().getFullYear();

    return (
        <footer className='bg-dark-1 p-8'>
            <section className='container space-y-6'>
                <div className='flex items-center sm:items-start md:items-center flex-col md:flex-row md:justify-between gap-4'>
                    <AppName />
                    <nav className='flex items-center gap-4 sm:gap-8 flex-col sm:flex-row'>
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
                </div>
                <div className='flex justify-between items-end gap-8'>
                    <p className="body md:max-w-1/2 text-center sm:text-left text-gray-400">
                        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                    </p>
                    <section className='hidden md:block'>
                        <SocialMediaHandles />
                    </section>
                </div>
                <div className='flex  sm:justify-between items-center gap-4 mt-4 sm:flex-row flex-col'>
                    <p className="body text-gray-400">
                        Copyright {todaysDate}. All Rights Reserved
                    </p>
                    <section className='md:hidden block'>
                        <SocialMediaHandles />
                    </section>
                </div>
            </section>
        </footer>
    )
}

export default Footer