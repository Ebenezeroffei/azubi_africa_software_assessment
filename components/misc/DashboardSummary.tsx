
type DashboardSummaryProps = {
    name: string,
    value: string,
    bg?: string,
    additionalInfo?: string
}


const DashboardSummary = ({
    name,
    value,
    bg = 'bg-white'
}: DashboardSummaryProps) => {
    return (
        <section className={`p-4 rounded ${bg}`}>
            <p className="font-semibold sm:text-sm text-xs text-gray-700">
                {name}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold">
                {value}
            </p>
        </section>
    )
}

export default DashboardSummary