import React, { useState } from 'react'
import CustomTextField from '../text_fields/CustomTextField'
import CustomRadioButton from '../text_fields/CustomRadioButton'
import CustomEmailField from '../text_fields/CustomEmailField'
import FormWrapper from '../misc/FormWrapper'
import PaymentMethods from '@/constants/misc/payment_methods'
import { MdHome } from 'react-icons/md'
import Image from 'next/image'

const CheckoutForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(PaymentMethods.EMoney)

    return (
        <section className='flex-1 p-6 bg-white'>
            <h4 className="h4">Checkout</h4>
            <div className='mt-8'>
                <p className='subtitle uppercase tracking-widest text-primary'>
                    Billing Details
                </p>
                <FormWrapper>
                    <CustomTextField
                        label='Name'
                        value={name}
                        setValue={setName}
                        placeholder='Tony Stark'
                    />
                    <CustomEmailField
                        label='Email'
                        value={email}
                        setValue={setEmail}
                        placeholder='stark@azubiafrica.com'
                    />
                    <CustomTextField
                        label='Phone Number'
                        value={phoneNumber}
                        setValue={setPhoneNumber}
                        placeholder='+233 (0) 271-815-776'
                    />
                </FormWrapper>
            </div>
            <div className='mt-8'>
                <p className='subtitle uppercase tracking-widest text-primary'>
                    Shipping Info
                </p>
                <CustomTextField
                    label='Address'
                    value={address}
                    setValue={setAddress}
                    placeholder='P.0 Box 2111 Mamprobi - Accra'
                />
                <FormWrapper>
                    <CustomTextField
                        label='Zip Code'
                        value={zipCode}
                        setValue={setZipCode}
                        placeholder='00233'
                    />
                    <CustomTextField
                        label='City'
                        value={city}
                        setValue={setCity}
                        placeholder='Accra'
                    />
                    <CustomTextField
                        label='Country'
                        value={country}
                        setValue={setCountry}
                        placeholder='Ghana'
                    />

                </FormWrapper>
            </div>
            <div className='my-8'>
                <p className='subtitle uppercase tracking-widest text-primary'>
                    Payment Details
                </p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-start mt-4'>
                    <p className='text-sm font-semibold'>
                        Payment Method
                    </p>
                    <section className='space-y-4'>
                        <CustomRadioButton
                            label='e-Money'
                            selectedValue={selectedPaymentMethod}
                            value={PaymentMethods.EMoney}
                            group='payment-method'
                            setValue={setSelectedPaymentMethod}
                        />
                        <CustomRadioButton
                            label='Cash on Delivery'
                            selectedValue={selectedPaymentMethod}
                            value={PaymentMethods.CashOnDelivery}
                            group='payment-method'
                            setValue={setSelectedPaymentMethod}
                        />
                    </section>
                </div>
            </div>
            <div className='flex gap-8 items-center'>
                <Image
                    width={50}
                    height={50}
                    src={'/assets/checkout/icon-cash-on-delivery.svg'}
                    alt='Cash on delivery'
                />
                <p className='text-gray-400'>
                    The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                </p>
            </div>
        </section>
    )
}

export default CheckoutForm