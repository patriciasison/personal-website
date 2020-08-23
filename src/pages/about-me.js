import React from "react"
import styled from "styled-components"
import vectorCodeQuality from "../assets/vector-code-quality.png"
import vectorFrontend from "../assets/vector-frontend.png"
import vectorImmersed from "../assets/vector-immersed.png"
import vectorMeetup from "../assets/vector-meetup.png"
import vectorSoftwareEngineer from "../assets/vector-software-engineer.png"
import vectorWebDevelopment from "../assets/vector-web-development.png"
import {
  Container,
  Footer,
  Heading,
  HeadingSize,
  HeadingWeight,
  Navbar,
} from "../bits"
import theme from "../bits/theme"
import { ColorMode } from "../config"
import { useViewport } from "../hooks"

const AboutMeColor = {
  [ColorMode.LIGHT]: {
    text: theme.color.black.light,
    highlightText: theme.color.blue.xdark,
    subText: theme.color.black.xlight,
  },
}

const SubContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 2 * (${theme.spacing.xxlarge} + ${theme.size.large}));
  justify-content: center;
  margin-bottom: calc(${theme.spacing.xxlarge} + ${theme.size.large});

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    flex-direction: row;
    height: calc(
      100vh - 2 * (${theme.spacing.xxlarge} + ${theme.size.xxsmall})
    );
    margin-bottom: calc(${theme.spacing.xxlarge} + ${theme.size.xxsmall});
    min-height: calc(
      ${theme.breakpoint.tablet.height}px - 2 *
        (2 * ${theme.spacing.large} + ${theme.size.xxxsmall})
    );
  }

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    height: calc(
      100vh - 2 * (${theme.spacing.xxlarge} + ${theme.size.xxxsmall})
    );
    margin-bottom: calc(${theme.spacing.xxlarge} + ${theme.size.xxxsmall});
    min-height: calc(
      ${theme.breakpoint.laptop.height}px - 2 *
        (2 * ${theme.spacing.large} + ${theme.size.xxxsmall})
    );
  }

  @media screen and (min-width: ${theme.breakpoint.desktop.media}px) {
    min-height: calc(
      ${theme.breakpoint.desktop.height}px - 2 *
        (2 * ${theme.spacing.large} + ${theme.size.xxxsmall})
    );
  }
`

const ImageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  &:first-child {
    margin-bottom: ${theme.spacing.xxlarge};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    width: 50%;

    &:first-child {
      justify-content: flex-end;
      margin-bottom: 0;
    }

    &:last-child {
      justify-content: flex-start;
    }
  }
`

const Image = styled.img`
  width: 75%;

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    width: 100%;
  }

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    width: 85%;
  }
`

const TextContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-bottom: ${theme.spacing.xxlarge};
  }

  & > span {
    text-align: center;
  }

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    align-items: flex-start;
    width: 50%;

    &:first-child {
      margin-bottom: 0;
    }

    &:last-child {
      padding-left: ${theme.spacing.xxxlarge};
    }

    & > span {
      text-align: left;
    }
  }

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    padding-left: 10rem;

    &:last-child {
      padding-left: 10rem;
    }
  }
`

const AboutMe = ({ location }) => {
  const colorScheme = AboutMeColor[ColorMode.LIGHT]
  const [, initialLoad] = useViewport()

  if (initialLoad) {
    return (
      <>
        <Navbar pathname={location.pathname} />
      </>
    )
  }

  return (
    <>
      <Navbar pathname={location.pathname} />
      <Container>
        <SubContainer>
          <ImageContainer>
            <Image src={vectorSoftwareEngineer} />
          </ImageContainer>
          <TextContainer>
            <Heading
              color={colorScheme.text}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              Passionate, adaptive,
            </Heading>
            <Heading
              color={colorScheme.text}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              and organized
            </Heading>
            <Heading
              color={colorScheme.highlightText}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
              marginBottom={theme.spacing.mid}
            >
              software engineer
            </Heading>
            <Heading
              color={colorScheme.subText}
              size={HeadingSize.SMALL}
              weight={HeadingWeight.MEDIUM}
            >
              who has been in the
            </Heading>
            <Heading
              color={colorScheme.subText}
              size={HeadingSize.SMALL}
              weight={HeadingWeight.MEDIUM}
            >
              tech industry for{" "}
              <Heading color={colorScheme.highlightText}>4 years</Heading>.
            </Heading>
          </TextContainer>
        </SubContainer>

        <SubContainer>
          <TextContainer>
            <Heading
              color={colorScheme.text}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              Experienced in
            </Heading>
            <Heading
              color={colorScheme.highlightText}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              full-stack
            </Heading>
            <Heading
              color={colorScheme.highlightText}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              web development<Heading color={colorScheme.text}>.</Heading>
            </Heading>
          </TextContainer>
          <ImageContainer>
            <Image src={vectorWebDevelopment} />
          </ImageContainer>
        </SubContainer>

        <SubContainer>
          <ImageContainer>
            <Image src={vectorFrontend} />
          </ImageContainer>
          <TextContainer>
            <Heading
              color={colorScheme.text}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              Knowledgeable in
            </Heading>
            <Heading
              color={colorScheme.highlightText}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
              marginBottom={theme.spacing.mid}
            >
              front-end development
            </Heading>
            <Heading
              color={colorScheme.subText}
              size={HeadingSize.SMALL}
              weight={HeadingWeight.MEDIUM}
            >
              that helps ensure and promote
            </Heading>
            <Heading
              color={colorScheme.highlightText}
              size={HeadingSize.SMALL}
              weight={HeadingWeight.MEDIUM}
            >
              good UI/UX<Heading color={colorScheme.text}>.</Heading>
            </Heading>
          </TextContainer>
        </SubContainer>

        <SubContainer>
          <TextContainer>
            <Heading
              color={colorScheme.text}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              Puts great emphasis
            </Heading>
            <Heading
              color={colorScheme.text}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              on the{" "}
              <Heading color={colorScheme.highlightText}>
                quality of code
              </Heading>
              .
            </Heading>
          </TextContainer>
          <ImageContainer>
            <Image src={vectorCodeQuality} />
          </ImageContainer>
        </SubContainer>

        <SubContainer>
          <ImageContainer>
            <Image src={vectorImmersed} />
          </ImageContainer>
          <TextContainer>
            <Heading
              color={colorScheme.text}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              Has been immersed
            </Heading>
            <Heading
              color={colorScheme.highlightText}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              <Heading color={colorScheme.text}>in </Heading>
              business analysis
              <Heading color={colorScheme.text}>, </Heading>
            </Heading>
            <Heading
              color={colorScheme.highlightText}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              product planning
              <Heading color={colorScheme.text}>, </Heading>
            </Heading>
            <Heading
              color={colorScheme.highlightText}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              QA testing<Heading color={colorScheme.text}>.</Heading>
            </Heading>
          </TextContainer>
        </SubContainer>

        <SubContainer>
          <TextContainer>
            <Heading
              color={colorScheme.highlightText}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              Attends tech meetups
            </Heading>
            <Heading
              color={colorScheme.highlightText}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              and events <Heading color={colorScheme.text}>for new</Heading>
            </Heading>
            <Heading
              color={colorScheme.text}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              learnings and insights.
            </Heading>
          </TextContainer>
          <ImageContainer>
            <Image src={vectorMeetup} />
          </ImageContainer>
        </SubContainer>
      </Container>

      <Footer />
    </>
  )
}

export default AboutMe
