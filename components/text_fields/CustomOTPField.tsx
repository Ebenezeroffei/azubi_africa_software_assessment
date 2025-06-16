import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import MiscUtils from "@utils/misc/misc_utils"
import OTPFieldUtils from "@utils/components/otp_fiels_utils";

export type OTPFieldProps = {
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    numberOfInputs: number,
    label?: string,
    pattern?: RegExp,
    errorText?: string,
    helpText?: string,
    textType?: "password" | "text",
}

const CustomOTPField = ({
    value,
    setValue,
    numberOfInputs,
    label = 'One Time Password',
    textType = "text",
    helpText = "",
}: OTPFieldProps) => {
    const inputNameAndId = MiscUtils.generateInputNameAndId(label);

    return (
        <section className="mb-2">
            {/* Label */}
            <div>
                <label
                    htmlFor={inputNameAndId}
                    className="text-sm capitalize tracking-wide font-semibold text-gray-600 flex justify-center"
                >
                    {label}:

                    <span
                        className="text-red-500 ml-0.5"
                    >
                        *
                    </span>

                </label>
            </div>
            {/* Inputs */}
            <div className="my-4 flex justify-center gap-2">
                {
                    new Array(numberOfInputs).fill(0).map((_, index) =>
                        <input
                            key={`otp_input_${index}`}
                            type={textType}
                            onKeyUp={(ele) => OTPFieldUtils.onKeyUpHandler(
                                ele,
                                value,
                                numberOfInputs,
                                setValue
                            )}
                            min={"0"}
                            onFocus={(ele) => OTPFieldUtils.onFocusHandler(
                                ele
                            )}
                            max={"9"}
                            maxLength={1}
                            autoFocus={true}
                            className="text-gray-600 text-center w-10 tracking-wide outline-none p-2 border border-gray-200 bg-gray-100focus:text-gray-800 focus:bg-gray-200"
                        />
                    )
                }
            </div>
            {/* Help Texts */}
            <p className="text-xs text-gray-500 pl-1 text-center">
                {helpText}
            </p>
        </section>
    )
}

export default CustomOTPField;