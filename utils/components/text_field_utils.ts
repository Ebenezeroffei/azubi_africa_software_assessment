import React, { ChangeEvent, Dispatch, RefObject, SetStateAction } from "react";

class TextFieldUtils {
    static onTextValueChangeHandler = (
        ele: ChangeEvent<HTMLInputElement>,
        setValue: Dispatch<SetStateAction<string>>,
    ) => {
        const value = ele.target.value;
        setValue(_ => value);
    }


    static onTextInputOnBlurHandler = (
        inputRef: RefObject<HTMLInputElement | null | HTMLTextAreaElement>,
        isRequired: boolean,
        pattern: RegExp,
        setIsError: Dispatch<SetStateAction<boolean>>,
    ) => {
        if (isRequired) {
            const value = String(inputRef.current?.value);
            setIsError(_ => !pattern.test(value))
        }
    }
}


export default TextFieldUtils;