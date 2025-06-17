'use client';

import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";

const CheckoutPageWrapper = () => {
    return (
        <section className="bg-light-1">
            <div className="container mx-auto p-4 flex flex-col md:flex-row gap-8 md:items-start">
                <CheckoutForm />
                <CheckoutSummary />
            </div>
        </section>
    )
}

export default CheckoutPageWrapper