import { PropsWithChildren } from "@node_modules/@types/react"

const PageSection = ({ children }: PropsWithChildren) => {
    return (
        <section className="p-4 rounded bg-white">
            {children}
        </section>
    )
}

export default PageSection