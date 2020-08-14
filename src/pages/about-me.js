import React from "react"
import styled from "styled-components"
import vectorCodeQuality from "../assets/vector-code-quality.png"
import vectorFrontend from "../assets/vector-frontend.png"
import vectorImmersed from "../assets/vector-immersed.png"
import vectorMeetup from "../assets/vector-meetup.png"
import vectorSoftwareEngineer from "../assets/vector-software-engineer.png"
import vectorWebDevelopment from "../assets/vector-web-development.png"
import { ColorMode } from "../config"
import {
  Container,
  ContainerDirection,
  Heading,
  HeadingSize,
  HeadingWeight,
  Navbar,
} from "../bits"
import theme from "../bits/theme"

const AboutMeColor = {
  [ColorMode.LIGHT]: {
    textColor: theme.color.black.light,
    highlightTextColor: theme.color.blue.xdark,
    subTextColor: theme.color.black.xlight,
  },
}

const cssSubContainer = theme => `
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 2 * (${theme.spacing.xxlarge} + ${theme.size.large}));
  justify-content: center;
  margin-bottom: calc(${theme.spacing.xxlarge} + ${theme.size.large});

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    flex-direction: row;
    height: calc(100vh - 2 * (${theme.spacing.xxlarge} + ${theme.size.xxsmall}));
    margin-bottom: calc(${theme.spacing.xxlarge} + ${theme.size.xxsmall});
    min-height: calc(
      ${theme.breakpoint.tablet.height}px - 2 *
        (2 * ${theme.spacing.large} + ${theme.size.xxxsmall})
    );
  }

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    height: calc(100vh - 2 * (${theme.spacing.xxlarge} + ${theme.size.xxxsmall}));
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

const StyledSubContainer = styled.div`
  ${({ theme }) => cssSubContainer(theme)}
`

const cssVectorContainer = theme => `
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

const StyledVectorContainer = styled.div`
  ${({ theme }) => cssVectorContainer(theme)}
`

const StyledPhotoContainer = styled.img`
  width: 75%;

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    width: 100%;
  }

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    width: 85%;
  }
`

const cssTextContainer = () => `
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

const StyledTextContainer = styled.div`
  ${props => cssTextContainer(props)}
`

const AboutMe = ({ location }) => {
  const colorScheme = AboutMeColor[ColorMode.LIGHT]

  return (
    <>
      <Navbar pathname={location.pathname} />
      <Container direction={ContainerDirection.VERTICAL}>
        <StyledSubContainer>
          <StyledVectorContainer>
            <StyledPhotoContainer src={vectorSoftwareEngineer} />
          </StyledVectorContainer>
          <StyledTextContainer>
            <Heading
              color={colorScheme.textColor}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              Passionate, adaptive,
            </Heading>
            <Heading
              color={colorScheme.textColor}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              and organized
            </Heading>
            <Heading
              color={colorScheme.highlightTextColor}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
              marginBottom={theme.spacing.mid}
            >
              software engineer
            </Heading>
            <Heading
              color={colorScheme.subTextColor}
              size={HeadingSize.SMALL}
              weight={HeadingWeight.MEDIUM}
            >
              who has been in the
            </Heading>
            <Heading
              color={colorScheme.subTextColor}
              size={HeadingSize.SMALL}
              weight={HeadingWeight.MEDIUM}
            >
              tech industry for{" "}
              <Heading color={colorScheme.highlightTextColor}>4 years</Heading>.
            </Heading>
          </StyledTextContainer>
        </StyledSubContainer>

        <StyledSubContainer>
          <StyledTextContainer>
            <Heading
              color={colorScheme.textColor}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              Experienced in
            </Heading>
            <Heading
              color={colorScheme.highlightTextColor}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              full-stack
            </Heading>
            <Heading
              color={colorScheme.highlightTextColor}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              web development<Heading color={colorScheme.textColor}>.</Heading>
            </Heading>
          </StyledTextContainer>
          <StyledVectorContainer>
            <StyledPhotoContainer src={vectorWebDevelopment} />
          </StyledVectorContainer>
        </StyledSubContainer>

        <StyledSubContainer>
          <StyledVectorContainer>
            <StyledPhotoContainer src={vectorFrontend} />
          </StyledVectorContainer>
          <StyledTextContainer>
            <Heading
              color={colorScheme.textColor}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              Knowledgeable in
            </Heading>
            <Heading
              color={colorScheme.highlightTextColor}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
              marginBottom={theme.spacing.mid}
            >
              front-end development
            </Heading>
            <Heading
              color={colorScheme.subTextColor}
              size={HeadingSize.SMALL}
              weight={HeadingWeight.MEDIUM}
            >
              that helps ensure and promote
            </Heading>
            <Heading
              color={colorScheme.highlightTextColor}
              size={HeadingSize.SMALL}
              weight={HeadingWeight.MEDIUM}
            >
              good UI/UX<Heading color={colorScheme.textColor}>.</Heading>
            </Heading>
          </StyledTextContainer>
        </StyledSubContainer>

        <StyledSubContainer>
          <StyledTextContainer>
            <Heading
              color={colorScheme.textColor}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              Puts great emphasis
            </Heading>
            <Heading
              color={colorScheme.textColor}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              on the{" "}
              <Heading color={colorScheme.highlightTextColor}>
                quality of code
              </Heading>
              .
            </Heading>
          </StyledTextContainer>
          <StyledVectorContainer>
            <StyledPhotoContainer src={vectorCodeQuality} />
          </StyledVectorContainer>
        </StyledSubContainer>

        <StyledSubContainer>
          <StyledVectorContainer>
            <StyledPhotoContainer src={vectorImmersed} />
          </StyledVectorContainer>
          <StyledTextContainer>
            <Heading
              color={colorScheme.textColor}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              Has been immersed
            </Heading>
            <Heading
              color={colorScheme.highlightTextColor}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              <Heading color={colorScheme.textColor}>in </Heading>
              business analysis
              <Heading color={colorScheme.textColor}>, </Heading>
            </Heading>
            <Heading
              color={colorScheme.highlightTextColor}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              product planning
              <Heading color={colorScheme.textColor}>, </Heading>
            </Heading>
            <Heading
              color={colorScheme.highlightTextColor}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              QA testing<Heading color={colorScheme.textColor}>.</Heading>
            </Heading>
          </StyledTextContainer>
        </StyledSubContainer>

        <StyledSubContainer>
          <StyledTextContainer>
            <Heading
              color={colorScheme.highlightTextColor}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              Attends tech meetups
            </Heading>
            <Heading
              color={colorScheme.highlightTextColor}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              and events{" "}
              <Heading color={colorScheme.textColor}>for new</Heading>
            </Heading>
            <Heading
              color={colorScheme.textColor}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              learnings and insights.
            </Heading>
          </StyledTextContainer>
          <StyledVectorContainer>
            <StyledPhotoContainer src={vectorMeetup} />
          </StyledVectorContainer>
        </StyledSubContainer>
      </Container>
    </>
  )
}

export default AboutMe
