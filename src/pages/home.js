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
import { useMobileView } from "../hooks"

const HomeColor = {
  [ColorMode.LIGHT]: {
    firstName: theme.color.white.norm,
    lastName: theme.color.white.norm,
    title: theme.color.black.xlight,
    tagline: theme.color.black.xxlight,
    contactMeBg: `linear-gradient(90deg, ${theme.color.blue.dark}, ${theme.color.purple.norm})`,
    contactMeFg: theme.color.white.norm,
  },
}

const Section = styled.div`
  background: url(${patternMobile}) bottom center no-repeat,
    linear-gradient(${theme.color.blue.norm}, ${theme.color.blue.light});
  height: 380px;
  top: 0;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    background: url(${patternTablet}) bottom center no-repeat,
      linear-gradient(${theme.color.blue.norm}, ${theme.color.blue.light});
    height: calc(51vh + 10px);
    min-height: 350px;
  }

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    background: url(${patternLaptop}) bottom center repeat,
      linear-gradient(${theme.color.blue.norm}, ${theme.color.blue.light});
    min-height: 300px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop.media}px) {
    background: url(${patternDesktop}) bottom center repeat,
      linear-gradient(${theme.color.blue.norm}, ${theme.color.blue.light});
    min-height: 405px;
  }
`

const MainContainer = styled.div`
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

const TextContainer = styled.div`
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

const Image = styled.img`
  border-radius: 50%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  margin-bottom: ${theme.spacing.xxlarge};

  @media screen and (max-width: ${theme.breakpoint.tablet.media}px) {
    height: 130px;
    width: 130px;
  }

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    height: 220px;
    margin-bottom: 0;
    width: 220px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop.media}px) {
    height: 280px;
    width: 280px;
  }
`

const CtaContainer = styled.div`
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
  const colorScheme = HomeColor[ColorMode.LIGHT]

  const [navBgEnabled, setNavBgEnabled] = useState(false)
  const isMobileView = useMobileView()

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > NAVBAR_Y_OFFSET) {
        setNavBgEnabled(true)
      } else {
        setNavBgEnabled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <Section />
      <Navbar pathname={location.pathname} backgroundEnabled={navBgEnabled} />

      <MainContainer>
        {isMobileView && (
          <CtaContainer>
            <Text
              color={colorScheme.tagline}
              fontStyle={TextStyle.ITALIC}
              letterSpacing=".1rem"
              size={TextSize.MID}
              marginBottom={theme.spacing.mid}
            >
              Passionate. Adaptive. Organized.
            </Text>
            <Button
              bgColor={colorScheme.contactMeBg}
              fgColor={colorScheme.contactMeFg}
            >
              Contact Me
            </Button>
          </CtaContainer>
        )}
        <TextContainer>
          <Heading
            color={colorScheme.firstName}
            size={HeadingSize.XXLARGE}
            transform={HeadingTransform.UPPERCASE}
            weight={HeadingWeight.BLACK}
          >
            Patricia
          </Heading>
          <Heading
            color={colorScheme.lastName}
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
            color={colorScheme.title}
            letterSpacing=".3rem"
            size={HeadingSize.SMALL}
            transform={HeadingTransform.CAPITALIZE}
          >
            Software Engineer
          </Heading>
        </TextContainer>
        <Image src={photo} />
      </MainContainer>

      {!isMobileView && (
        <CtaContainer>
          <Text
            color={colorScheme.tagline}
            fontStyle={TextStyle.ITALIC}
            letterSpacing=".1rem"
            size={TextSize.MID}
            marginBottom={theme.spacing.mid}
          >
            Passionate. Adaptive. Organized.
          </Text>
          <Button
            bgColor={colorScheme.contactMeBg}
            fgColor={colorScheme.contactMeFg}
          >
            Contact Me
          </Button>
        </CtaContainer>
      )}
    </>
  )
}

export default Home
