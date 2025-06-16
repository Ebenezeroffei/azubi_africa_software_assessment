import { Dispatch, SetStateAction, useId, useRef, useState } from "react";
import TextFieldUtils from "@utils/components/text_field_utils";
import MiscUtils from "@utils/misc/misc_utils"

export type SelectFieldDictValue = { name: string, value: string }

export type SelectFieldValue = (string | SelectFieldDictValue)[]

type SelectFieldProps = {
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    items: SelectFieldValue,
    label?: string,
    isRequired?: boolean,
    errorText?: string,
}

const CustomSelectField = ({
    value,
    setValue,
    label = '',
    items,
    isRequired = true,
    errorText = "Please provide a value for this field.",
}: SelectFieldProps) => {
    const inputNameAndId = MiscUtils.generateInputNameAndId(label);
    const inputRef = useRef<HTMLSelectElement>(null);
    const [isError, setIsError] = useState(false);
    const randomId = useId();

    return (
        <section className="pb-2">
            {/* Label */}
            <div>
                <label
                    htmlFor={inputNameAndId}
                    className="text-xs font-semibold capitalize tracking-wide text-gray-600 flex"
                >
                    {label}:
                    {
                        isRequired && (
                            <span
                                className="text-red-500 ml-0.5"
                            >
                                *
                            </span>
                        )
                    }
                </label>
            </div>
            {/* Textarea */}
            <select
                name={inputNameAndId}
                id={inputNameAndId}
                value={value}
                ref={inputRef}
                onChange={(ele) => TextFieldUtils.onSelectFieldValueChangeHandler(
                    ele,
                    setValue,
                )}
                onBlur={() => TextFieldUtils.onSelectFieldBlurHandler(
                    inputRef,
                    isRequired,
                    setIsError,
                )}
                className="p-2 w-full my-2 border border-gray-200 rounded text-gray-500 font-semibold text-sm tracking-wide outline-none focus:border-gray-400 focus:border-b-2 focus:border-b-primary"
            >
                {
                    items.map((ele, index) => {
                        if (typeof ele == 'string') {
                            return (
                                <option
                                    key={`${index}_select_option_${randomId}`}
                                    value={ele}
                                >
                                    {ele}
                                </option>
                            )
                        }
                        return (
                            <option
                                key={`${index}_select_option_${randomId}`}
                                value={ele.value}
                            >
                                {ele.name}
                            </option>
                        )
                    })
                }
            </select>

            {/* Error or Help Texts */}
            {
                isError && (
                    <p className="text-xs text-red-500 pl-1">
                        {errorText}
                    </p>
                )
            }
        </section>
    )
}

export default CustomSelectField