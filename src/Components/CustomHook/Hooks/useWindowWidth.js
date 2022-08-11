import { useCallback, useEffect, useState } from "react";

  const useWindowWidth = (screenSize) => {
    const [onSmallScreen,setSmallScreen] = useState(false)

    //solution : 1
    // const onScreenChange = useCallback(() => {
    //     setSmallScreen(window.innerWidth < screenSize )
    //  })

    useEffect(() => {
        const onScreenChange = () => {
            setSmallScreen(window.innerWidth < screenSize )
         }
         onScreenChange()
       window.addEventListener('resize', onScreenChange)

       return () => window.removeEventListener('resize', onScreenChange)
    },[screenSize])
    return onSmallScreen;
}
export default useWindowWidth;