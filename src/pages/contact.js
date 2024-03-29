import React, { useContext, useState } from "react"
import styled from "styled-components"
import { Download } from "@mui/icons-material"
import logoGmail from "../assets/logo-gmail.png"
import logoGithub from "../assets/logo-github.png"
import logoLinkedIn from "../assets/logo-linkedin.png"
import logoLocation from "../assets/logo-location.png"
import pattern from "../assets/pattern1.png"
import patternMobile from "../assets/pattern1-mobile.png"
import patternTablet from "../assets/pattern1-tablet.png"
import {
  Button,
  Card,
  Container,
  ContainerAlign,
  Footer,
  Heading,
  HeadingSize,
  HeadingWeight,
  Loading,
  Navbar,
  Text,
  TextSize,
  TextWeight,
} from "../bits"
import theme from "../bits/theme"
import { ColorMode } from "../config"
import { Viewport, ViewportContext } from "../providers"

const ContactColor = {
  [ColorMode.LIGHT]: {
    loading: theme.color.gray.light,
    heading: theme.color.black.xlight,
    card: theme.color.white.norm,
    contactDetail: theme.color.black.light,
    contactMeBg: `linear-gradient(90deg, #4aa2be, #a278d8)`,
    contactMeFg: theme.color.white.norm,
  },
}

const cardSize = {
  [Viewport.MOBILE]: {
    height: "110px",
    width: "110px",
  },
  [Viewport.TABLET]: {
    height: "120px",
    width: "120px",
  },
  [Viewport.LAPTOP]: {
    height: "130px",
    width: "130px",
  },
  [Viewport.DESKTOP]: {
    height: "130px",
    width: "130px",
  },
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  left: 0;
  min-height: calc(
    ${theme.breakpoint[Viewport.MOBILE].minHeight}px + 6 *
      ${theme.spacing.xxxlarge}
  );
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    min-height: ${theme.breakpoint[Viewport.TABLET].minHeight}px;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.LAPTOP].media}px) {
    min-height: calc(
      ${theme.breakpoint[Viewport.LAPTOP].minHeight}px + 3 *
        ${theme.spacing.xxxxlarge}
    );
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.DESKTOP].media}px) {
    min-height: calc(
      ${theme.breakpoint[Viewport.DESKTOP].minHeight}px + 2 *
        ${theme.spacing.xxxxlarge} + ${theme.spacing.large}
    );
  }
`

const PatternContainer = styled.div`
  background: url(${patternMobile}) bottom center repeat-x;
  height: 150px;

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    background: url(${patternTablet}) bottom left repeat-x;
    height: 200px;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.DESKTOP].media}px) {
    background: url(${pattern}) bottom center repeat-x;
    height: 290px;
  }
`

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    line-height: 1.4;
    text-align: center;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    & > span {
      line-height: normal;
    }
  }
`

const ContactGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: ${theme.spacing.xxxlarge};

  & > div:nth-child(odd) {
    margin-right: ${theme.spacing.large};
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    & > div:not(:last-child) {
      margin-right: ${theme.spacing.large};
    }
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    height: calc(
      ${cardSize[Viewport.MOBILE].height} - ${theme.spacing.xxxlarge}
    );
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    height: calc(
      ${cardSize[Viewport.TABLET].height} - ${theme.spacing.xxxlarge}
    );
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.LAPTOP].media}px) {
    height: calc(
      ${cardSize[Viewport.LAPTOP].height} - ${theme.size.small} -
        ${theme.spacing.large}
    );
  }
`

const Image = styled.img`
  height: 80%;

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    height: 75%;
  }
`

const TextContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Contact = ({ location }) => {
  const colorScheme = ContactColor[ColorMode.LIGHT]
  const [pageLoad, setPageLoad] = useState(false)
  const { viewport, initialLoad } = useContext(ViewportContext)

  const contactDetails = [
    {
      id: "gmail",
      logo: logoGmail,
      text: (
        <TextContainer>
          <Text
            color={colorScheme.contactDetail}
            size={TextSize.XLARGE}
            weight={TextWeight.MEDIUM}
          >
            pats.sison19
          </Text>
          <Text
            color={colorScheme.contactDetail}
            size={TextSize.XLARGE}
            weight={TextWeight.MEDIUM}
          >
            @gmail.com
          </Text>
        </TextContainer>
      ),
      handleClick: () => {},
    },
    {
      id: "github",
      logo: logoGithub,
      text: (
        <TextContainer>
          <Text
            color={colorScheme.contactDetail}
            size={TextSize.XLARGE}
            weight={TextWeight.MEDIUM}
          >
            github.com/
          </Text>
          <Text
            color={colorScheme.contactDetail}
            size={TextSize.XLARGE}
            weight={TextWeight.MEDIUM}
          >
            patriciasison
          </Text>
        </TextContainer>
      ),
      handleClick: () => {
        window.open("https://www.github.com/patriciasison", "_blank")
      },
    },
    {
      id: "linkedin",
      logo: logoLinkedIn,
      text: (
        <TextContainer>
          <Text
            color={colorScheme.contactDetail}
            size={TextSize.XLARGE}
            weight={TextWeight.MEDIUM}
          >
            linkedin.com/in/
          </Text>
          <Text
            color={colorScheme.contactDetail}
            size={TextSize.XLARGE}
            weight={TextWeight.MEDIUM}
          >
            patriciasison
          </Text>
        </TextContainer>
      ),
      handleClick: () => {
        window.open("https://www.linkedin.com/in/patriciasison", "_blank")
      },
    },
    {
      id: "location",
      logo: logoLocation,
      text: (
        <TextContainer>
          <Text
            color={colorScheme.contactDetail}
            size={TextSize.XLARGE}
            weight={TextWeight.MEDIUM}
          >
            Metro Manila,
          </Text>
          <Text
            color={colorScheme.contactDetail}
            size={TextSize.XLARGE}
            weight={TextWeight.MEDIUM}
          >
            Philippines
          </Text>
        </TextContainer>
      ),
      handleClick: () => {},
    },
  ]

  if (initialLoad) {
    return <></>
  }

  if (pageLoad) {
    return (
      <>
        <Navbar
          viewport={viewport}
          pathname={location.pathname}
          onClick={onPageLoad => {
            setPageLoad(onPageLoad)
          }}
        />
        <Loading color={colorScheme.loading} />
      </>
    )
  }

  return (
    <>
      <Navbar
        pathname={location.pathname}
        viewport={viewport}
        onClick={onPageLoad => {
          setPageLoad(onPageLoad)
        }}
      />
      <Container
        align={ContainerAlign.CENTER}
        marginTop={
          viewport === Viewport.MOBILE
            ? theme.spacing.xxxlarge
            : viewport === Viewport.TABLET
            ? `calc(${theme.spacing.xxxxlarge} + ${theme.spacing.xxxlarge})`
            : "6rem"
        }
      >
        <HeadingContainer>
          {viewport === Viewport.MOBILE ? (
            <>
              <Heading
                color={colorScheme.heading}
                size={HeadingSize.SMALL}
                marginBottom={theme.spacing.xxlarge}
              >
                Looking for a{" "}
                <Heading
                  color={colorScheme.heading}
                  weight={HeadingWeight.BOLD}
                >
                  software engineer
                </Heading>
                ? Interested in working together in{" "}
                <Heading
                  color={colorScheme.heading}
                  weight={HeadingWeight.BOLD}
                >
                  full-stack web development
                </Heading>
                ? Want a{" "}
                <Heading
                  color={colorScheme.heading}
                  weight={HeadingWeight.BOLD}
                >
                  simple website design
                </Heading>
                ?
              </Heading>
            </>
          ) : (
            <>
              <Heading
                color={colorScheme.heading}
                size={HeadingSize.MID}
                marginBottom={theme.spacing.xxsmall}
              >
                Looking for a{" "}
                <Heading
                  color={colorScheme.heading}
                  weight={HeadingWeight.BOLD}
                >
                  software engineer
                </Heading>
                ? Interested in
              </Heading>
              <Heading
                color={colorScheme.heading}
                size={HeadingSize.MID}
                marginBottom={theme.spacing.xxsmall}
              >
                working together in{" "}
                <Heading
                  color={colorScheme.heading}
                  weight={HeadingWeight.BOLD}
                >
                  full-stack web development
                </Heading>
                ?
              </Heading>
              <Heading
                color={colorScheme.heading}
                size={HeadingSize.MID}
                marginBottom={theme.spacing.xxxlarge}
              >
                Want a{" "}
                <Heading
                  color={colorScheme.heading}
                  weight={HeadingWeight.BOLD}
                >
                  design
                </Heading>{" "}
                for your simple website?
              </Heading>
            </>
          )}
        </HeadingContainer>

        <ContactGroup>
          {contactDetails.map(contactDetail => (
            <Card
              key={`card-${contactDetail.id}`}
              background={colorScheme.card}
              isClickable={
                contactDetail.id !== "location" && contactDetail.id !== "gmail"
              }
              padding={
                viewport === Viewport.MOBILE || viewport === Viewport.TABLET
                  ? theme.spacing.xlarge
                  : theme.spacing.xxlarge
              }
              height={cardSize[viewport].height}
              width={cardSize[viewport].width}
              marginBottom={
                viewport === Viewport.MOBILE ? theme.spacing.large : "0"
              }
              onClick={contactDetail.handleClick}
            >
              <ImageContainer key={`imgContainer-${contactDetail.id}`}>
                <Image
                  key={`img-${contactDetail.id}`}
                  src={contactDetail.logo}
                />
              </ImageContainer>
              <TextContainer>{contactDetail.text}</TextContainer>
            </Card>
          ))}
        </ContactGroup>
        <a href="/files/Resume_Patricia_Sison.pdf" download>
          <Button
            background={colorScheme.contactMeBg}
            foreground={colorScheme.contactMeFg}
            borderRadius="3px"
          >
            <Download />
            Download Resume
          </Button>
        </a>
      </Container>

      <Wrapper>
        <PatternContainer />
        <Footer />
      </Wrapper>
    </>
  )
}

export default Contact
