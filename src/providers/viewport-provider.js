import React, { createContext, useEffect, useState } from "react"
import theme from "../bits/theme"

export const ViewportContext = createContext()

const ViewportProvider = ({ children }) => {
  const [viewport, setViewport] = useState(undefined)
  const [initialLoad, setInitialLoad] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window === undefined) {
        return
      }

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

    const timer = setTimeout(() => {
      setInitialLoad(false)
    }, 100)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timer)
    }
  }, [])

  return (
    <ViewportContext.Provider value={{ viewport, initialLoad }}>
      {children}
    </ViewportContext.Provider>
  )
}

export const Viewport = {
  MOBILE: "mobile",
  TABLET: "tablet",
  LAPTOP: "laptop",
  DESKTOP: "desktop",
}

export default ViewportProvider
