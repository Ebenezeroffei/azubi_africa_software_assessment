import { ButtonProps } from "./CustomButton"



const CustomOutlineButton = ({
    text,
    onPressed = () => { },
}: ButtonProps) => {

    return (
        <section className="flex justify-center items-center my-6">
            <button
                onClick={onPressed}
                type="button"
                className="outline-none rounded-xs cursor-pointer p-4  font-semibold uppercase text-xs tracking-wide text-dark-1 transition-all duration-300 ease-in-out  flex-none border-2 border-dark-1 hover:bg-dark-1 hover:text-light-1"
            >
                {text}
            </button>
        </section>
    )
}

export default CustomOutlineButton