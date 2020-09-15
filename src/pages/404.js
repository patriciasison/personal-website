import React, { useContext } from "react"
import styled from "styled-components"
import vector404 from "../assets/vector-404.png"
import { Footer, Link, Navbar, Text, TextSize } from "../bits"
import theme from "../bits/theme"
import { ColorMode, SiteRoute } from "../config"
import { Viewport, ViewportContext } from "../providers"

const NotFoundColor = {
  [ColorMode.LIGHT]: {
    text: theme.color.black.light,
    link: theme.color.blue.norm,
  },
}

const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    max-height: ${theme.breakpoint[Viewport.TABLET].maxHeight}px;
    min-height: ${theme.breakpoint[Viewport.TABLET].minHeight}px;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.LAPTOP].media}px) {
    max-height: ${theme.breakpoint[Viewport.LAPTOP].maxHeight}px;
    min-height: ${theme.breakpoint[Viewport.LAPTOP].minHeight}px;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.DESKTOP].media}px) {
    max-height: ${theme.breakpoint[Viewport.DESKTOP].maxHeight}px;
    min-height: ${theme.breakpoint[Viewport.DESKTOP].minHeight}px;
  }
`

const Image = styled.img`
  height: 150px;
  margin-bottom: ${theme.spacing.xxlarge};

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    height: auto;
  }
`

const NotFound = ({ location }) => {
  const colorScheme = NotFoundColor[ColorMode.LIGHT]
  const { viewport, initialLoad } = useContext(ViewportContext)

  if (initialLoad) {
    return <></>
  }

  return (
    <>
      <Navbar viewport={viewport} pathname={location.pathname} />

      <MainContainer>
        <Image src={vector404} />
        <Text color={colorScheme.text} size={TextSize.XLARGE}>
          Page not found. Go to{" "}
          <Link href={SiteRoute.HOME} color={colorScheme.link}>
            home page →
          </Link>
        </Text>
      </MainContainer>

      <Footer />
    </>
  )
}

export default NotFound
