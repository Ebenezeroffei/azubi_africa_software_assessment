import { useEffect } from "react";
import { useAppContext } from "@providers/ContextProvider"

const useObserveScreenSize = () => {
    const { setIsSmallScreen, setShowSecondarySidebar } = useAppContext();


    const onResizeHandler = () => {
        if (window.innerWidth < 600) {
            setIsSmallScreen(_ => true);
        }
        else {
            setIsSmallScreen(_ => false)
            setShowSecondarySidebar(_ => false);
        }
    }

    useEffect(() => {
        onResizeHandler();
        window.addEventListener('resize', onResizeHandler)
        return () => window.removeEventListener('resize', onResizeHandler)
    }, [])

}

export { useObserveScreenSize };