import React from "react"
import Helmet from "react-helmet"
import { ThemeProvider } from "styled-components"
import "./global-styles.css"
import favicon from "./src/assets/favicon.png"
import theme from "./src/bits/theme"
import { SITE_NAME } from "./src/config"

export const wrapRootElement = ({ element }) => (
  <>
    <Helmet>
      <title>{SITE_NAME}</title>
      <link rel="icon" href={favicon} />
    </Helmet>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </>
)
