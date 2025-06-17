type PageHeaderProps = {
    title: string,
}

const PageHeader = ({ title }: PageHeaderProps) => {
    return (
        <section className="py-12 bg-dark-1">
            <h1 className="h3 text-center text-white">{title}</h1>
        </section>
    )
}

export default PageHeader