import React, { useState, useEffect } from "react"
import styled from "styled-components"
import patternDesktop from "../assets/pattern.png"
import patternLaptop from "../assets/pattern-laptop.png"
import patternMobile from "../assets/pattern-mobile.png"
import patternTablet from "../assets/pattern-tablet.png"
import photo from "../assets/photo.png"
import {
  Button,
  Heading,
  HeadingSize,
  HeadingTransform,
  HeadingWeight,
  Navbar,
  Text,
  TextSize,
  TextStyle,
} from "../bits"
import theme from "../bits/theme"
import { ColorMode } from "../config"

const HomeColor = {
  [ColorMode.LIGHT]: {
    firstNameColor: theme.color.white.norm,
    lastNameColor: theme.color.white.norm,
    lastNameOpacity: 85,
    titleColor: theme.color.black.xlight,
    taglineColor: theme.color.black.xxlight,
    contactMeBgColor: `linear-gradient(90deg, ${theme.color.blue.dark}, ${theme.color.purple.norm})`,
    contactMeFgColor: theme.color.white.norm,
  },
}

const cssSection = theme => `
  background: url(${patternMobile}) bottom center no-repeat, linear-gradient(${theme.color.blue.norm}, ${theme.color.blue.light});
  height: 380px;
  top: 0;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    background: url(${patternTablet}) bottom center no-repeat, linear-gradient(${theme.color.blue.norm}, ${theme.color.blue.light});
    height: calc(51vh + 10px);
    min-height: 350px;
  }

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    background: url(${patternLaptop}) bottom center repeat, linear-gradient(${theme.color.blue.norm}, ${theme.color.blue.light});
    min-height: 300px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop.media}px) {
    background: url(${patternDesktop}) bottom center repeat, linear-gradient(${theme.color.blue.norm}, ${theme.color.blue.light});
    min-height: 405px;
  }
`

const StyledSection = styled.div`
  ${({ theme }) => cssSection(theme)}
`

const StyledMainContainer = styled.div`
  align-items: center;
  background: none;
  display: flex;
  flex-direction: column-reverse;
  height: auto;
  justify-content: flex-start;
  position: absolute;
  width: 100%;

  @media screen and (max-width: ${theme.breakpoint.tablet.media}px) {
    top: calc(4 * (${theme.spacing.large} + ${theme.size.large}));
  }

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    flex-direction: row;
    height: calc(
      100vh - 2 * (2 * ${theme.spacing.large} + ${theme.size.xxxsmall})
    );
    justify-content: center;
    margin: 0 calc((100vw - ${theme.breakpoint.tablet.width}px) / 2);
    min-height: calc(
      ${theme.breakpoint.tablet.height}px - 2 *
        (2 * ${theme.spacing.large} + ${theme.size.xxxsmall})
    );
    top: calc(${theme.spacing.large} + ${theme.size.xxsmall});
    width: ${theme.breakpoint.tablet.width}px;
  }

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    margin: 0 calc((100vw - ${theme.breakpoint.laptop.width}px) / 2);
    min-height: calc(
      ${theme.breakpoint.laptop.height}px - 2 *
        (2 * ${theme.spacing.large} + ${theme.size.xxxsmall})
    );
    top: calc(${theme.spacing.large} + ${theme.size.xxxsmall});
    width: ${theme.breakpoint.laptop.width}px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop.media}px) {
    margin: 0 calc((100vw - ${theme.breakpoint.desktop.width}px) / 2);
    min-height: calc(
      ${theme.breakpoint.desktop.height}px - 2 *
        (2 * ${theme.spacing.large} + ${theme.size.xxxsmall})
    );
    width: ${theme.breakpoint.desktop.width}px;
  }
`

const cssStyledTextContainer = theme => `
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacing.xxxxlarge};

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    align-items: flex-end;
    margin-bottom: 0;
    padding-right: ${theme.spacing.xxxlarge};
  }
`

const StyledTextContainer = styled.div`
  ${({ theme }) => cssStyledTextContainer(theme)}
`

const cssPhotoContainer = theme => `
  border-radius: 50%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  margin-bottom: ${theme.spacing.xxlarge};

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    margin-bottom: 0;
  }
`

const StyledPhotoContainer = styled.img`
  ${({ theme }) => cssPhotoContainer(theme)}
`

const StyledCtaContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    height: 75vh;
    justify-content: flex-end;
    min-height: 600px;
    padding-bottom: ${theme.spacing.xxxlarge};
    position: absolute;
    top: 0;
    width: 100%;
  }

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    height: 80vh;
    min-height: 500px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop.media}px) {
    height: 65vh;
    min-height: 650px;
  }
`

const Home = ({ location }) => {
  const NAVBAR_Y_OFFSET = 50
  const PhotoSize = {
    DESKTOP: "280",
    LAPTOP: "220",
    TABLET: "220",
    MOBILE: "130",
  }

  const colorScheme = HomeColor[ColorMode.LIGHT]

  const [isMobileView, setIsMobileView] = useState(false)
  const [navBgEnabled, setNavBgEnabled] = useState(false)
  const [photoSize, setPhotoSize] = useState(PhotoSize.DESKTOP)

  const handleScroll = () => {
    if (window.pageYOffset > NAVBAR_Y_OFFSET) {
      setNavBgEnabled(true)
    } else {
      setNavBgEnabled(false)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= theme.breakpoint.desktop.media) {
        setPhotoSize(PhotoSize.DESKTOP)
        setIsMobileView(false)
      } else if (window.innerWidth >= theme.breakpoint.laptop.media) {
        setPhotoSize(PhotoSize.LAPTOP)
        setIsMobileView(false)
      } else if (window.innerWidth >= theme.breakpoint.tablet.media) {
        setPhotoSize(PhotoSize.TABLET)
        setIsMobileView(false)
      } else {
        setPhotoSize(PhotoSize.MOBILE)
        setIsMobileView(true)
      }
    }

    handleResize()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [PhotoSize.DESKTOP, PhotoSize.LAPTOP, PhotoSize.TABLET, PhotoSize.MOBILE])

  return (
    <>
      <StyledSection />
      <Navbar pathname={location.pathname} backgroundEnabled={navBgEnabled} />

      <StyledMainContainer>
        {isMobileView && (
          <StyledCtaContainer>
            <Text
              color={colorScheme.taglineColor}
              fontStyle={TextStyle.ITALIC}
              letterSpacing=".1rem"
              size={TextSize.MID}
              marginBottom={theme.spacing.mid}
            >
              Passionate. Adaptive. Organized.
            </Text>
            <Button
              bgColor={colorScheme.contactMeBgColor}
              fgColor={colorScheme.contactMeFgColor}
            >
              Contact Me
            </Button>
          </StyledCtaContainer>
        )}
        <StyledTextContainer>
          <Heading
            color={colorScheme.firstNameColor}
            size={HeadingSize.XXLARGE}
            transform={HeadingTransform.UPPERCASE}
            weight={HeadingWeight.BLACK}
          >
            Patricia
          </Heading>
          <Heading
            color={colorScheme.lastNameColor}
            opacity={85}
            size={HeadingSize.XXLARGE}
            transform={HeadingTransform.UPPERCASE}
            weight={HeadingWeight.BLACK}
            style={{ marginTop: `-${theme.spacing.xxlarge}` }}
            marginBottom={
              isMobileView ? theme.spacing.xlarge : theme.spacing.large
            }
          >
            Sison
          </Heading>
          <Heading
            color={colorScheme.titleColor}
            letterSpacing=".3rem"
            size={HeadingSize.SMALL}
            transform={HeadingTransform.CAPITALIZE}
          >
            Software Engineer
          </Heading>
        </StyledTextContainer>
        <StyledPhotoContainer
          src={photo}
          width={photoSize}
          height={photoSize}
        />
      </StyledMainContainer>

      {!isMobileView && (
        <StyledCtaContainer>
          <Text
            color={colorScheme.taglineColor}
            fontStyle={TextStyle.ITALIC}
            letterSpacing=".1rem"
            size={TextSize.MID}
            marginBottom={theme.spacing.mid}
          >
            Passionate. Adaptive. Organized.
          </Text>
          <Button
            bgColor={colorScheme.contactMeBgColor}
            fgColor={colorScheme.contactMeFgColor}
          >
            Contact Me
          </Button>
        </StyledCtaContainer>
      )}
    </>
  )
}

export default Home
