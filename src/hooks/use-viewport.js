import { useState, useEffect } from "react"
import theme from "../bits/theme"

const useViewport = () => {
  const initialViewport =
    window.innerWidth >= theme.breakpoint.desktop.media
      ? Viewport.DESKTOP
      : window.innerWidth >= theme.breakpoint.laptop.media
      ? Viewport.LAPTOP
      : window.innerWidth >= theme.breakpoint.tablet.media
      ? Viewport.TABLET
      : Viewport.MOBILE
  const [viewport, setViewport] = useState(initialViewport)

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
