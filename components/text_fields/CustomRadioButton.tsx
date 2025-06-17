import { Dispatch, SetStateAction } from "@/node_modules/@types/react"
import MiscUtils from "@/utils/misc/misc_utils"

type CustomRadioButtonProps = {
    label: string,
    group: string,
    value: string,
    selectedValue: string,
    setValue: Dispatch<SetStateAction<string>>,
}

const CustomRadioButton = ({
    label,
    selectedValue,
    group,
    value,
    setValue,
}: CustomRadioButtonProps) => {
    const inputNameAndId = MiscUtils.generateInputNameAndId(label)
    const isSelected = selectedValue === value;

    return (
        <section className={`p-4 border rounded-lg flex items-center gap-3 border-gray-300 hover:border-primary ${isSelected && 'border-primary'}`}>
            <input
                type="radio"
                value={value}
                onChange={() => setValue(_ => value)}
                name={group}
                checked={value === selectedValue}
                id={inputNameAndId}
                className="accent-primary"
            />
            <label
                htmlFor={inputNameAndId}
                className="text-sm font-semibold flex-1"
            >
                {label}
            </label>
        </section>
    )
}

export default CustomRadioButton