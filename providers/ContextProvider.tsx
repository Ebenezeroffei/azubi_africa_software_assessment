'use client';

import { useContext, createContext, PropsWithChildren, useState, Dispatch, SetStateAction, ReactNode } from "react"

export type ContextValuesType = {
    isSmallScreen: boolean,
    setIsSmallScreen: Dispatch<SetStateAction<boolean>>,
    showSecondarySidebar: boolean,
    setShowSecondarySidebar: Dispatch<SetStateAction<boolean>>,
    modalTitle: string | undefined,
    setModalTitle: Dispatch<SetStateAction<string | undefined>>,
    modalContent: ReactNode | undefined,
    setModalContent: Dispatch<SetStateAction<ReactNode | undefined>>,
    showSmallModal: boolean,
    setShowSmallModal: Dispatch<SetStateAction<boolean>>,
    showBigModal: boolean,
    setShowBigModal: Dispatch<SetStateAction<boolean>>,
}
const AppContext = createContext<ContextValuesType | null>(null);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const [isSmallScreen, setIsSmallScreen] = useState(true);
    const [showSecondarySidebar, setShowSecondarySidebar] = useState(false);
    const [modalTitle, setModalTitle] = useState<string>();
    const [modalContent, setModalContent] = useState<ReactNode>();
    const [showSmallModal, setShowSmallModal] = useState(false);
    const [showBigModal, setShowBigModal] = useState(false);

    const contextValue: ContextValuesType = {
        isSmallScreen,
        setIsSmallScreen,
        showSecondarySidebar,
        setShowSecondarySidebar,
        modalTitle,
        setModalTitle,
        modalContent,
        setModalContent,
        showSmallModal,
        setShowSmallModal,
        showBigModal,
        setShowBigModal,
    };

    return (
        <AppContext.Provider
            value={contextValue}
        >
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    const appContext = useContext(AppContext) as ContextValuesType;
    return appContext;
};

export default ContextProvider;
export { useAppContext }