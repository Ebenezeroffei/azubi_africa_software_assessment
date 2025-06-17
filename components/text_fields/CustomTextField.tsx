import { Dispatch, SetStateAction, useRef, useState } from "react";
import { MdClose } from "react-icons/md"
import TextFieldUtils from "@/utils/components/text_field_utils";
import MiscUtils from "@/utils/misc/misc_utils"
import Validators from "@/constants/misc/validators";

export type TextFieldProps = {
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    label?: string,
    pattern?: RegExp,
    isRequired?: boolean,
    textType?: string,
    placeholder?: string,
}

const CustomTextField = ({
    value,
    setValue,
    label = '',
    pattern = Validators.General,
    placeholder,
    isRequired = true,
    textType = "text",
}: TextFieldProps) => {
    const inputNameAndId = MiscUtils.generateInputNameAndId(label);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isError, setIsError] = useState(false);

    return (
        <section className="pb-2">
            {/* Label */}
            <div className={`flex justify-between ${isError && 'text-red-600'}`}>
                <label
                    htmlFor={inputNameAndId}
                    className="text-xs font-semibold capitalize tracking-wide flex"
                >
                    {label}
                </label>
                {
                    isError && (
                        <p className="text-xs">
                            Wrong Format
                        </p>
                    )
                }
            </div>
            {/* Input */}
            <div className={`p-3 my-2 flex transition-all duration-100 items-center gap-x-2 rounded-lg ${isError ? 'border-2 border-red-600' : 'border border-gray-200 focus-within:border-primary'} `}>
                <input
                    type={textType}
                    id={inputNameAndId}
                    name={inputNameAndId}
                    ref={inputRef}
                    value={value}
                    placeholder={placeholder}
                    onBlur={() => TextFieldUtils.onTextInputOnBlurHandler(
                        inputRef,
                        isRequired,
                        pattern,
                        setIsError,
                    )}
                    onChange={(ele) => TextFieldUtils.onTextValueChangeHandler(
                        ele,
                        setValue,
                    )}
                    className="flex-auto font-semibold text-sm tracking-wide outline-none"
                />

            </div>
        </section>
    )
}

export default CustomTextField