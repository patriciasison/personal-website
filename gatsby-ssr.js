import React from "react"
import { ThemeProvider } from "styled-components"
import "./global-styles.css"
import theme from "./src/bits/theme"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
