
export type ButtonProps = {
    text: string,
    onPressed?: () => void,
}


const CustomButton = ({
    text,
    onPressed = () => { },
}: ButtonProps) => {

    return (
        <section className="flex justify-center items-center my-6">
            <button
                onClick={onPressed}
                type="button"
                className="outline-none rounded-xs cursor-pointer bg-primary p-4  font-semibold uppercase text-xs tracking-wide text-white transition-all duration-300 ease-in-out hover:bg-secondary flex-none"
            >
                {text}
            </button>
        </section>
    )
}

export default CustomButton