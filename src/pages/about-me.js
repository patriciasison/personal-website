import React, { useContext, useState } from "react"
import styled from "styled-components"
import vectorCodeQuality from "../assets/vector-code-quality.png"
import vectorFrontend from "../assets/vector-frontend.png"
import vectorImmersed from "../assets/vector-immersed.png"
import vectorSoftwareEngineer from "../assets/vector-software-engineer.png"
import vectorWebDevelopment from "../assets/vector-web-development.png"
import vectorWireframe from "../assets/vector-wireframe.png"
import {
  Container,
  Footer,
  Heading,
  HeadingSize,
  HeadingWeight,
  Loading,
  Navbar,
} from "../bits"
import theme from "../bits/theme"
import { ColorMode } from "../config"
import { Viewport, ViewportContext } from "../providers"

const AboutMeColor = {
  [ColorMode.LIGHT]: {
    loading: theme.color.gray.light,
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

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    flex-direction: row;
    height: calc(
      100vh - 2 * (${theme.spacing.xxlarge} + ${theme.size.xxsmall})
    );
    margin-bottom: calc(${theme.spacing.xxlarge} + ${theme.size.xxsmall});
    min-height: calc(
      ${theme.breakpoint[Viewport.TABLET].minHeight}px - 2 *
        (2 * ${theme.spacing.large} + ${theme.size.xxxsmall})
    );
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.LAPTOP].media}px) {
    height: calc(
      100vh - 2 * (${theme.spacing.xxlarge} + ${theme.size.xxxsmall})
    );
    margin-bottom: calc(${theme.spacing.xxlarge} + ${theme.size.xxxsmall});
    min-height: calc(
      ${theme.breakpoint[Viewport.LAPTOP].minHeight}px - 2 *
        (2 * ${theme.spacing.large} + ${theme.size.xxxsmall})
    );
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.DESKTOP].media}px) {
    min-height: calc(
      ${theme.breakpoint[Viewport.DESKTOP].minHeight}px - 2 *
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

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
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

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    width: 100%;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.LAPTOP].media}px) {
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

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
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

  @media screen and (min-width: ${theme.breakpoint[Viewport.LAPTOP].media}px) {
    padding-left: 10rem;

    &:last-child {
      padding-left: 10rem;
    }
  }
`

const AboutMe = ({ location }) => {
  const colorScheme = AboutMeColor[ColorMode.LIGHT]
  const [pageLoad, setPageLoad] = useState(false)
  const { viewport, initialLoad } = useContext(ViewportContext)

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
        viewport={viewport}
        pathname={location.pathname}
        onClick={onPageLoad => {
          setPageLoad(onPageLoad)
        }}
      />
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
              <Heading color={colorScheme.highlightText}>6 years</Heading>.
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
              that ensures{" "}
              <Heading
                color={colorScheme.highlightText}
                size={HeadingSize.SMALL}
                weight={HeadingWeight.MEDIUM}
              >
                modularity and
              </Heading>
            </Heading>
            <Heading
              color={colorScheme.highlightText}
              size={HeadingSize.SMALL}
              weight={HeadingWeight.MEDIUM}
            >
              extensibility{" "}
              <Heading color={colorScheme.subText}> of components.</Heading>
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
              Maintains, enforces, and
            </Heading>
            <Heading
              color={colorScheme.text}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              advocates for{" "}
              <Heading color={colorScheme.highlightText}>clean code</Heading>.
            </Heading>
          </TextContainer>
          <ImageContainer>
            <Image src={vectorCodeQuality} />
          </ImageContainer>
        </SubContainer>

        <SubContainer>
          <ImageContainer>
            <Image src={vectorWireframe} />
          </ImageContainer>
          <TextContainer>
            <Heading
              color={colorScheme.text}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              Skilled in replicating{" "}
              <Heading color={colorScheme.highlightText}>wire-</Heading>
            </Heading>
            <Heading
              color={colorScheme.text}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
              marginBottom={theme.spacing.mid}
            >
              <Heading color={colorScheme.highlightText}>frames</Heading> into
              web pages;
            </Heading>
            <Heading
              color={colorScheme.subText}
              size={HeadingSize.SMALL}
              weight={HeadingWeight.MEDIUM}
            >
              ensures and promotes{" "}
              <Heading
                color={colorScheme.highlightText}
                size={HeadingSize.SMALL}
                weight={HeadingWeight.MEDIUM}
              >
                good UI/UX
              </Heading>
              .
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
              Has been immersed in
            </Heading>
            <Heading
              color={colorScheme.highlightText}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              Agile methodologies
              <Heading color={colorScheme.text}>, </Heading>
            </Heading>
            <Heading
              color={colorScheme.highlightText}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              business analysis
              <Heading color={colorScheme.text}>, </Heading>
            </Heading>
            <Heading
              color={colorScheme.highlightText}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
            >
              unit testing<Heading color={colorScheme.text}>.</Heading>
            </Heading>
          </TextContainer>
          <ImageContainer>
            <Image src={vectorImmersed} />
          </ImageContainer>
        </SubContainer>
      </Container>

      <Footer />
    </>
  )
}

export default AboutMe
