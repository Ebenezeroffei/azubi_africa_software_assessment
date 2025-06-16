import { PropsWithChildren } from "@node_modules/@types/react"

const FormWrapper = ({ children }: PropsWithChildren) => {
    return (
        <section className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {children}
        </section>
    )
}

export default FormWrapper