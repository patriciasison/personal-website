import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "./src/bits/theme"

const GlobalStyle = createGlobalStyle`
  html {
    @media screen and (max-width: ${theme.breakpoint.tablet.media}px) {
      font-size: 8px;
    }

    @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
      font-size: 8px;
    }

    @media screen and (min-width: ${theme.breakpoint.desktop.media}px) {
      font-size: 10px;
    }
  }

  @font-face {
    font-display: block;
  }

  body {
    background-color: ${theme.color.white.dark};
    font-family: "Roboto";
    margin: 0;
  }
`
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
