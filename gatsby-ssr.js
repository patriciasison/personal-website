import React from "react"
import Helmet from "react-helmet"
import { ThemeProvider } from "styled-components"
import "./global-styles.css"
import favicon from "./src/assets/favicon.png"
import theme from "./src/bits/theme"
import { SITE_NAME } from "./src/config"
import { ViewportProvider } from "./src/providers"

export const wrapRootElement = ({ element }) => (
  <>
    <Helmet>
      <title>{SITE_NAME}</title>
      <link rel="icon" href={favicon} />
      <meta name="title" content="Patricia Sison - Software Engineer" />
      <meta
        name="description"
        content="This personal website is made by Patricia herself, an experienced full-stack web developer."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://patriciasison.me/" />
      <meta property="og:title" content="Patricia Sison - Software Engineer" />
      <meta
        property="og:description"
        content="This personal website is made by Patricia herself, an experienced full-stack web developer."
      />
      <meta
        property="og:image"
        content="/src/assets/vector-web-development.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://patriciasison.me/" />
      <meta
        property="twitter:title"
        content="Patricia Sison - Software Engineer"
      />
      <meta
        property="twitter:description"
        content="This personal website is made by Patricia herself, an experienced full-stack web developer."
      />
      <meta
        property="twitter:image"
        content="/src/assets/vector-web-development.png"
      />
    </Helmet>
    <ThemeProvider theme={theme}>
      <ViewportProvider>{element}</ViewportProvider>
    </ThemeProvider>
  </>
)
