'use client';

import CartModel from "@/@types/CartModel";
import { useContext, createContext, PropsWithChildren, useState, Dispatch, SetStateAction, ReactNode, useEffect } from "react"

export type ContextValuesType = {
    cart: CartModel | undefined,
    setCart: Dispatch<SetStateAction<CartModel | undefined>>,
    showSecondarySidebar: boolean,
    setShowSecondarySidebar: Dispatch<SetStateAction<boolean>>,
    showCart: boolean,
    setShowCart: Dispatch<SetStateAction<boolean>>,
    modalContent: ReactNode | undefined,
    setModalContent: Dispatch<SetStateAction<ReactNode | undefined>>,
    showSmallModal: boolean,
    setShowSmallModal: Dispatch<SetStateAction<boolean>>,
}
const AppContext = createContext<ContextValuesType | null>(null);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const [showSecondarySidebar, setShowSecondarySidebar] = useState(false);
    const [modalContent, setModalContent] = useState<ReactNode>()
    const [showSmallModal, setShowSmallModal] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState<CartModel>()

    useEffect(() => {
        const cart: CartModel = JSON.parse(localStorage.getItem('cart') ?? '{}')
        setCart(_ => cart);
    }, [])

    const contextValue: ContextValuesType = {
        cart,
        setCart,
        showSecondarySidebar,
        setShowSecondarySidebar,
        showCart,
        setShowCart,
        modalContent,
        setModalContent,
        showSmallModal,
        setShowSmallModal,
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