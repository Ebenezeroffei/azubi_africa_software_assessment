type SkeletonProps = {
    className: string,
}

const Skeleton = ({
    className,
}: SkeletonProps) => {
    return (
        <section
            className={`animate-pulse bg-gray-200 ${className}`}
        >

        </section>
    )
}

export default Skeleton