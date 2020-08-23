import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "./src/bits/theme"

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 8px;

    @media screen and (min-width: ${theme.breakpoint.desktop.media}px) {
      font-size: 10px;
    }
  }

  body {
    background-color: ${theme.color.white.dark};
    font-family: "Roboto, sans-serif";
    margin: 0;
  }
`
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
