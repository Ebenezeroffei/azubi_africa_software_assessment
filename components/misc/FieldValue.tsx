
type FieldValueProps = {
    name: string,
    value?: string | number
}

const FieldValue = ({
    name,
    value
}: FieldValueProps) => {
    return (
        <section>
            <p className="text-xs text-gray-500 font-bold">
                {name}
            </p>
            <p className="text-gray-800">
                {value || 'N/A'}
            </p>
        </section>
    )
}

export default FieldValue