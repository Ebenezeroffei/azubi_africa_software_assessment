'use client';
import { ReactNode } from "@node_modules/@types/react"
import PageHeader from "./PageHeader"
import { useAppContext } from "@providers/ContextProvider";

type MainPageContent = {
    children: ReactNode,
    title: string,
}

const MainPageContent = ({
    children,
    title
}: MainPageContent) => {
    const { isSmallScreen } = useAppContext()

    return (
        <div className={` p-4 ${isSmallScreen ? 'w-full' : 'w-[calc(100%_-_224px)]'} `}>
            <PageHeader
                title={title}
            />
            <main className="py-4">
                {children}
            </main>
        </div>
    )
}

export default MainPageContent