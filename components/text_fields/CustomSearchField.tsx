import { Dispatch, SetStateAction, useRef, useState } from "react"
import { MdClose } from "@node_modules/react-icons/md"
import TextFieldUtils from "@utils/components/text_field_utils"

type CustomSearchFieldProps = {
    query: string,
    setQuery: Dispatch<SetStateAction<string>>,
    placeholder?: string,
    inputId?: string,
    onSubmitHandler?: () => void,
}

const CustomSearchField = ({
    query,
    setQuery,
    inputId,
    placeholder = "Search...",
    onSubmitHandler = () => { },
}: CustomSearchFieldProps) => {
    const [hasValue, setHasValue] = useState(Boolean(query));
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div className="p-2 my-2 border border-gray-300 flex transition-all duration-100 items-center gap-x-2 rounded focus-within:border-primary">
            <input
                type='text'
                ref={inputRef}
                value={query}
                id={inputId}
                placeholder={placeholder}
                onKeyUp={(ele) => TextFieldUtils.onKeyUpHandler(
                    ele,
                    onSubmitHandler,
                )}
                onChange={(ele) => TextFieldUtils.onTextValueChangeHandler(
                    ele,
                    setQuery,
                    setHasValue,
                )}
                className="flex-auto text-gray-500 text-sm tracking-wide outline-none"
            />
            {/* Clear Button */}
            {
                hasValue && (
                    <section
                        className="bg-red-100 p-0.5 cursor-pointer transition-colors duration-150 hover:bg-red-200"
                        onClick={() => {
                            setQuery(_ => '');
                            setHasValue(_ => false);
                        }}
                    >
                        <MdClose
                            className="text-red-600"
                            size={15}
                        />
                    </section>
                )
            }
        </div>
    )
}

export default CustomSearchField