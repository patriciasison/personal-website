import { useState, useEffect } from "react"
import theme from "../bits/theme"

const useViewport = () => {
  const [viewport, setViewport] = useState(Viewport.MOBILE)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= theme.breakpoint.desktop.media) {
        setViewport(Viewport.DESKTOP)
      } else if (window.innerWidth >= theme.breakpoint.laptop.media) {
        setViewport(Viewport.LAPTOP)
      } else if (window.innerWidth >= theme.breakpoint.tablet.media) {
        setViewport(Viewport.TABLET)
      } else {
        setViewport(Viewport.MOBILE)
      }
    }
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return viewport
}

export const Viewport = {
  MOBILE: "mobile",
  TABLET: "tablet",
  LAPTOP: "laptop",
  DESKTOP: "desktop",
}

export default useViewport
