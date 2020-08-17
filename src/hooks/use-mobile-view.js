import { useState, useEffect } from "react"
import theme from "../bits/theme"

const useMobileView = () => {
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < theme.breakpoint.tablet.media)
    }
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return isMobileView
}

export default useMobileView
