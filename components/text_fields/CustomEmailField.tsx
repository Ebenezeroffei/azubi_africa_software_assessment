import Validators from "@/constants/misc/validators"
import CustomTextField, { TextFieldProps } from "./CustomTextField"


const CustomEmailField = ({
    value,
    setValue,
    isRequired = true,
    placeholder,
}: TextFieldProps) => {
    return (
        <CustomTextField
            label="Email"
            value={value}
            setValue={setValue}
            pattern={Validators.Email}
            isRequired={isRequired}
            textType="email"
            placeholder={placeholder}
        />
    )
}

export default CustomEmailField