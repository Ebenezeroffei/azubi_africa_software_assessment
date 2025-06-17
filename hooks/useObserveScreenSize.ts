import { useEffect, useState } from "react";
import { useAppContext } from "@/providers/ContextProvider"

const useObserveScreenSize = () => {
    const { setShowSecondarySidebar } = useAppContext();
    const [isSmallScreen, setIsSmallScreen] = useState(false);


    const onResizeHandler = () => {
        if (window.innerWidth < 768) {
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

    return isSmallScreen;

}

export { useObserveScreenSize };