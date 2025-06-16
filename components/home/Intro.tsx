'use client';

import CustomButton from "../buttons/CustomButton"

const Intro = () => {
    return (
        <section className='bg-dark-1 px-4 py-24' id="home-intro">
            <div className='container py-8 mx-auto relative border-t border-gray-800 flex'>
                <section className="flex flex-col items-center lg:items-start lg:max-w-1/3 gap-6">
                    <p className="custom-overline text-gray-500 text-center lg:text-left" >New product</p>
                    <h1 className="h1 text-white text-center lg:text-left">
                        XX99 Mark II HeadphoneS
                    </h1>
                    <p className="body text-gray-400 text-center lg:text-left">
                        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                    </p>
                    <CustomButton text="See Product" />
                </section>
            </div>
        </section>
    )
}

export default Intro