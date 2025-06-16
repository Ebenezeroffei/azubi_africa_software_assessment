import { PropsWithChildren, useEffect, useRef, useState } from "react"

type OptionProps = {
    text: string,
    onClickHandler?: () => void,
}

const Option = ({
    text,
    onClickHandler
}: OptionProps) => {
    return (
        <section
            onClick={onClickHandler}
            className="text-xs font-semibold bg-gray-100 text-gray-600 p-2 transition-colors duration-150 hover:bg-primary/10 hover:text-gray-800">
            {text}
        </section>
    )
}

const Options = ({ children }: PropsWithChildren) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (ele: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(ele.target as Node)) {
                setOpen(_ => false);
            }
        }

        document.addEventListener('mousedown', handleOutsideClick);

        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [])

    return (
        <section
            ref={menuRef}
            className="relative"
        >
            <div
                onClick={() => setOpen(prevOpen => !prevOpen)}
                className="py-1 px-4 rounded text-xs font-semibold cursor-pointer bg-gray-100 text-gray-600 transition-colors duration-150 hover:bg-gray-200 hover:text-gray-800">
                Options
            </div>
            {
                open && (
                    <div
                        className="cursor-pointer z-10 bg-white w-[180px] absolute right-0 rounded rounded-tr-none overflow-hidden">
                        {children}
                    </div>
                )
            }
        </section>
    )
}

export { Option, Options }