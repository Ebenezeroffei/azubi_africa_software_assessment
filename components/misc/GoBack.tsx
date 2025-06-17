import { useRouter } from "next/navigation"

const GoBack = () => {
    const router = useRouter();

    return (
        <section className="py-12 flex">
            <p
                className="text-sm text-gray-500 cursor-pointer hover:text-primary"
                onClick={() => router.back()}
            >
                Go Back
            </p>
        </section>
    )
}

export default GoBack