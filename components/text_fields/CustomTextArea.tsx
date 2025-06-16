import { Dispatch, SetStateAction, useRef, useState } from "react";
import TextFieldUtils from "@utils/components/text_field_utils";
import MiscUtils from "@utils/misc/misc_utils"
import Validators from "@constants/misc/validators";

type TextAreaProps = {
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    label?: string,
    isRequired?: boolean,
    errorText?: string,
    helpText?: string,
}

const CustomTextArea = ({
    value,
    setValue,
    label = '',
    isRequired = true,
    helpText = "",
    errorText = "Please provide a value for this field.",
}: TextAreaProps) => {
    const inputNameAndId = MiscUtils.generateInputNameAndId(label);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [isError, setIsError] = useState(false);

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
            <textarea
                ref={inputRef}
                name={inputNameAndId}
                rows={10}
                id={inputNameAndId}
                onBlur={() => TextFieldUtils.onTextInputOnBlurHandler(inputRef, isRequired, Validators.General, setIsError,)}
                onChange={(ele) => TextFieldUtils.onTextAreaValueChangeHandler(
                    ele,
                    setValue,
                )}

                value={value}
                className="p-2 my-2 border w-full border-gray-200 transition-all duration-100 rounded text-gray-500 font-semibold text-sm tracking-wide outline-none focus:border-gray-400 focus:border-b-2 focus:border-b-primary"
            >
            </textarea>

            {/* Error or Help Texts */}
            {
                isError ? (
                    <p className="text-xs text-red-500 pl-1">
                        {errorText}
                    </p>
                ) : (

                    <p className="text-xs text-gray-500 pl-1">
                        {helpText}
                    </p>
                )
            }
        </section>
    )
}

export default CustomTextArea