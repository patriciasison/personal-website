import React from "react"
import logoGmail from "../assets/logo-gmail.png"
import logoGithub from "../assets/logo-github.png"
import logoLinkedIn from "../assets/logo-linkedin.png"
import logoLocation from "../assets/logo-location.png"
import pattern from "../assets/pattern1.png"
import patternMobile from "../assets/pattern1-mobile.png"
import patternTablet from "../assets/pattern1-tablet.png"
import {
  Container,
  ContainerAlign,
  Heading,
  HeadingSize,
  Navbar,
  HeadingWeight,
  Text,
  TextSize,
  TextWeight,
  Card,
} from "../bits"
import theme from "../bits/theme"
import { ColorMode } from "../config"
import styled from "styled-components"
import { useViewport, Viewport } from "../hooks"

const ContactColor = {
  [ColorMode.LIGHT]: {
    heading: theme.color.black.xlight,
    subheading: theme.color.black.xlight,
    card: theme.color.white.norm,
    contactDetail: theme.color.black.light,
  },
}

const cardSize = {
  mobile: 110,
  tablet: 120,
  laptop: 130,
}

const PatternContainer = styled.div`
  background: url(${patternMobile}) bottom center no-repeat;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    background: url(${patternTablet}) bottom center no-repeat;
  }

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    min-height: ${theme.breakpoint.laptop.height}px;
    background: url(${pattern}) bottom center no-repeat;
  }
`

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    line-height: 1.4;
    text-align: center;
  }

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    & > span {
      line-height: normal;
    }
  }
`

const ContactGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > div:nth-child(odd) {
    margin-right: ${theme.spacing.large};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    & > div:not(:last-child) {
      margin-right: ${theme.spacing.large};
    }
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: ${theme.breakpoint.tablet.media}px) {
    height: calc(
      ${cardSize.mobile}px - ${theme.size.xsmall} - ${theme.spacing.small}
    );
  }

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    height: calc(
      ${cardSize.tablet}px - ${theme.size.xsmall} - ${theme.spacing.small}
    );
  }

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    height: calc(
      ${cardSize.laptop}px - ${theme.size.small} - ${theme.spacing.large}
    );
  }
`

const Image = styled.img`
  height: 72%;

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
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

  const viewport = useViewport()

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

  return (
    <>
      <PatternContainer />
      <Navbar pathname={location.pathname} />
      <Container
        align={ContainerAlign.CENTER}
        marginTop={
          viewport === Viewport.MOBILE
            ? theme.spacing.xxxlarge
            : viewport === Viewport.TABLET
            ? `calc(${theme.spacing.xxxxlarge} + ${theme.spacing.xxxlarge})`
            : theme.spacing.xxxxlarge
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
                ?
              </Heading>
            </>
          ) : (
            <>
              <Heading color={colorScheme.heading} size={HeadingSize.MID}>
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
                marginBottom={theme.spacing.xxlarge}
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
            </>
          )}
          <Text
            color={colorScheme.subheading}
            size={TextSize.XLARGE}
            weight={TextWeight.MEDIUM}
            marginBottom={theme.spacing.xxlarge}
          >
            I'd like to hear from you!
          </Text>
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
                viewport === Viewport.MOBILE
                  ? theme.spacing.large
                  : viewport === Viewport.TABLET
                  ? theme.spacing.xlarge
                  : theme.spacing.xxxlarge
              }
              size={
                viewport === Viewport.MOBILE
                  ? cardSize.mobile
                  : viewport === Viewport.TABLET
                  ? cardSize.tablet
                  : cardSize.laptop
              }
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
      </Container>
    </>
  )
}

export default Contact
