'use client';

import GoBack from "../misc/GoBack";
import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";

const CheckoutPageWrapper = () => {
    return (
        <section className="bg-light-1 p-4">
            <div className="container">
                <GoBack />
                <section className="mx-auto flex flex-col md:flex-row gap-8 md:items-start">
                    <CheckoutForm />
                    <CheckoutSummary />
                </section>
            </div>
        </section>
    )
}

export default CheckoutPageWrapper