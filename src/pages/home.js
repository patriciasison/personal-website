import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import logoAngular from "../assets/logo-angular.png"
import logoApollo from "../assets/logo-apollo.png"
import logoGraphQL from "../assets/logo-graphql.png"
import logoJava from "../assets/logo-java.png"
import logoMongoDB from "../assets/logo-mongodb.png"
import logoMySQL from "../assets/logo-mysql.png"
import logoPython from "../assets/logo-python.png"
import logoReact from "../assets/logo-react.png"
import patternDesktop from "../assets/pattern.png"
import patternLaptop from "../assets/pattern-laptop.png"
import patternMobile from "../assets/pattern-mobile.png"
import patternTablet from "../assets/pattern-tablet.png"
import patternSub from "../assets/pattern2.png"
import photo from "../assets/photo.png"
import {
  Button,
  Card,
  Container,
  Footer,
  Heading,
  HeadingSize,
  HeadingTransform,
  HeadingWeight,
  Link,
  Loading,
  Navbar,
  Text,
  TextSize,
  TextStyle,
  TextWeight,
} from "../bits"
import theme from "../bits/theme"
import { ColorMode, SiteRoute } from "../config"
import { Viewport, ViewportContext } from "../providers"
import SvgSelf from "../svg/vector-self.svg"

const HomeColor = {
  [ColorMode.LIGHT]: {
    loading: theme.color.gray.light,
    patternBg: `linear-gradient(${theme.color.blue.norm}, ${theme.color.blue.light})`,
    firstName: theme.color.white.norm,
    lastName: theme.color.white.norm,
    position: theme.color.black.xlight,
    tagline: theme.color.gray.dark,
    contactMeBg: `linear-gradient(90deg, ${theme.color.blue.dark}, ${theme.color.purple.norm})`,
    contactMeFg: theme.color.white.norm,
    introText: theme.color.black.light,
    highlightText: theme.color.blue.xdark,
    sectionHeading: theme.color.black.light,
    sectionSeeMore: theme.color.gray.dark,
    sectionSeeLink: theme.color.blue.norm,
    cardBg: theme.color.white.norm,
    cardText: theme.color.black.light,
    cardHighlightText: theme.color.blue.xdark,
    card1Bg: `linear-gradient(${theme.color.green.light}, ${theme.color.white.norm})`,
    card2Bg: `linear-gradient(${theme.color.purple.light}, ${theme.color.white.norm})`,
    card3Bg: `linear-gradient(${theme.color.yellow.light}, ${theme.color.white.norm})`,
    card1BgMobile: `linear-gradient(-90deg, ${theme.color.green.light}, ${theme.color.white.norm})`,
    card2BgMobile: `linear-gradient(-90deg, ${theme.color.purple.light}, ${theme.color.white.norm})`,
    card3BgMobile: `linear-gradient(-90deg, ${theme.color.yellow.light}, ${theme.color.white.norm})`,
  },
}

const profileImageSize = {
  [Viewport.MOBILE]: {
    height: "130px",
    width: "130px",
  },
  [Viewport.TABLET]: {
    height: "220px",
    width: "220px",
  },
  [Viewport.LAPTOP]: {
    height: "220px",
    width: "220px",
  },
  [Viewport.DESKTOP]: {
    height: "280px",
    width: "280px",
  },
}

const skillCardSize = {
  [Viewport.MOBILE]: {
    height: "95px",
    width: "95px",
  },
  [Viewport.TABLET]: {
    height: "90px",
    width: "90px",
  },
  [Viewport.LAPTOP]: {
    height: "120px",
    width: "120px",
  },
  [Viewport.DESKTOP]: {
    height: "120px",
    width: "120px",
  },
}

const PatternContainer = styled.div`
  background: url(${patternMobile}) bottom center no-repeat,
    ${({ background }) => background};
  height: 380px;
  top: 0;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    background: url(${patternTablet}) bottom center repeat-x,
      ${({ background }) => background};
    height: calc(51vh + 10px);
    max-height: 705px;
    min-height: 350px;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.LAPTOP].media}px) {
    background: url(${patternLaptop}) bottom center repeat-x,
      ${({ background }) => background};
    max-height: 415px;
    min-height: 300px;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.DESKTOP].media}px) {
    background: url(${patternDesktop}) bottom center repeat-x,
      ${({ background }) => background};
    max-height: 785px;
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

  @media screen and (max-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    top: calc(4 * (${theme.spacing.large} + ${theme.size.large}));
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    flex-direction: row;
    height: calc(
      100vh - 2 * (2 * ${theme.spacing.large} + ${theme.size.xxxsmall})
    );
    justify-content: center;
    margin: 0 calc((100vw - ${theme.breakpoint[Viewport.TABLET].width}px) / 2);
    max-height: ${theme.breakpoint[Viewport.TABLET].maxHeight}px;
    min-height: calc(
      ${theme.breakpoint[Viewport.TABLET].minHeight}px - 2 *
        (2 * ${theme.spacing.large} + ${theme.size.xxxsmall})
    );
    top: calc(${theme.spacing.large} + ${theme.size.xxsmall});
    width: ${theme.breakpoint[Viewport.TABLET].width}px;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.LAPTOP].media}px) {
    margin: 0 calc((100vw - ${theme.breakpoint[Viewport.LAPTOP].width}px) / 2);
    max-height: ${theme.breakpoint[Viewport.LAPTOP].maxHeight}px;
    min-height: calc(
      ${theme.breakpoint[Viewport.LAPTOP].minHeight}px - 2 *
        (2 * ${theme.spacing.large} + ${theme.size.xxxsmall})
    );
    top: calc(${theme.spacing.large} + ${theme.size.xxxsmall});
    width: ${theme.breakpoint[Viewport.LAPTOP].width}px;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.DESKTOP].media}px) {
    margin: 0 calc((100vw - ${theme.breakpoint[Viewport.DESKTOP].width}px) / 2);
    max-height: ${theme.breakpoint[Viewport.DESKTOP].maxHeight}px;
    min-height: calc(
      ${theme.breakpoint[Viewport.DESKTOP].minHeight}px - 2 *
        (2 * ${theme.spacing.large} + ${theme.size.xxxsmall})
    );
    width: ${theme.breakpoint[Viewport.DESKTOP].width}px;
  }
`

const MainTextContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacing.xxxxlarge};

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    align-items: flex-end;
    margin-bottom: 0;
    padding-right: ${theme.spacing.xxxlarge};
  }
`

const ProfileImage = styled.img`
  border-radius: 50%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  margin-bottom: ${theme.spacing.xxlarge};

  @media screen and (max-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    height: ${profileImageSize[Viewport.MOBILE].height};
    width: ${profileImageSize[Viewport.MOBILE].width};
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    height: ${profileImageSize[Viewport.TABLET].height};
    margin-bottom: 0;
    width: ${profileImageSize[Viewport.TABLET].width};
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.DESKTOP].media}px) {
    height: ${profileImageSize[Viewport.DESKTOP].height};
    width: ${profileImageSize[Viewport.DESKTOP].width};
  }
`

const CtaContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 999;

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    margin-top: calc(
      (${profileImageSize[Viewport.TABLET].height} / 2) +
        ${theme.spacing.xxxlarge}
    );
    width: 100%;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.DESKTOP].media}px) {
    margin-top: calc(
      (${profileImageSize[Viewport.DESKTOP].height} / 2) +
        ${theme.spacing.xxxlarge}
    );
  }
`

const FillerContainer = styled.div`
  height: calc(100vh - 402px);

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    height: calc(
      49vh - 10px - (${profileImageSize[Viewport.TABLET].height} / 2) -
        (2 * ${theme.spacing.xxxlarge})
    );
    max-height: calc(
      (49 * ${theme.breakpoint[Viewport.TABLET].maxHeight}px) - 10px- (
          ${profileImageSize[Viewport.TABLET].height} / 2
        ) - (2 * ${theme.spacing.xxxlarge})
    );
    min-height: calc(
      (49 * ${theme.breakpoint[Viewport.TABLET].minHeight}px) - 10px- (
          ${profileImageSize[Viewport.TABLET].height} / 2
        ) - (2 * ${theme.spacing.xxxlarge})
    );
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.LAPTOP].media}px) {
    height: calc(
      49vh - 10px - (${profileImageSize[Viewport.LAPTOP].height} / 2) -
        (2 * ${theme.spacing.xxxlarge})
    );
    max-height: calc(
      (49 * ${theme.breakpoint[Viewport.LAPTOP].maxHeight}px) - 10px- (
          ${profileImageSize[Viewport.LAPTOP].height} / 2
        ) - (2 * ${theme.spacing.xxxlarge})
    );
    min-height: calc(
      (49 * ${theme.breakpoint[Viewport.LAPTOP].minHeight}px) - 10px- (
          ${profileImageSize[Viewport.LAPTOP].height} / 2
        ) - (2 * ${theme.spacing.xxxlarge})
    );
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.DESKTOP].media}px) {
    height: calc(
      49vh - 10px - (${profileImageSize[Viewport.DESKTOP].height} / 2) -
        (2 * ${theme.spacing.xxxlarge})
    );
    max-height: calc(
      (49 * ${theme.breakpoint[Viewport.DESKTOP].maxHeight}px) - 10px- (
          ${profileImageSize[Viewport.DESKTOP].height} / 2
        ) - (2 * ${theme.spacing.xxxlarge})
    );
    min-height: calc(
      (49 * ${theme.breakpoint[Viewport.DESKTOP].minHeight}px) - 10px- (
          ${profileImageSize[Viewport.DESKTOP].height} / 2
        ) - (2 * ${theme.spacing.xxxlarge})
    );
  }
`

const SubContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 2 * (${theme.spacing.xxlarge} + ${theme.size.large}));
  justify-content: center;
  margin-bottom: calc(${theme.spacing.xxlarge} + ${theme.size.large});

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
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
    flex-direction: row;
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

const SvgContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: ${theme.spacing.xxlarge};

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    margin-bottom: ${theme.spacing.xxxlarge};
    width: 50%;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.LAPTOP].media}px) {
    margin-bottom: 0;
  }
`

const Svg = styled(SvgSelf)`
  width: 75%;
  height: auto;

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    width: 100%;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.LAPTOP].media}px) {
    width: 85%;
  }
`

const SubTextContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  order: 1;

  & > span {
    text-align: center;
  }

  & > span:last-child {
    line-height: 1.35;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    width: 50%;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.LAPTOP].media}px) {
    align-items: flex-start;
    order: -1;
    margin-right: 8rem;
    padding-left: 10rem;

    & > span {
      text-align: left;
    }
  }
`

const SubPatternContainer = styled.div`
  height: 100vh;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    background: url(${patternSub}) bottom center repeat-x;
    max-height: ${theme.breakpoint[Viewport.TABLET].maxHeight}px;
    min-height: ${theme.breakpoint[Viewport.TABLET].minHeight}px;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.LAPTOP].media}px) {
    background: url(${patternSub}) center center repeat-x;
    max-height: ${theme.breakpoint[Viewport.LAPTOP].maxHeight}px;
    min-height: ${theme.breakpoint[Viewport.LAPTOP].minHeight}px;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.DESKTOP].media}px) {
    max-height: ${theme.breakpoint[Viewport.DESKTOP].maxHeight}px;
    min-height: ${theme.breakpoint[Viewport.DESKTOP].minHeight}px;
  }
`

const SectionContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  width: ${theme.breakpoint[Viewport.MOBILE].width}px;

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    width: ${theme.breakpoint[Viewport.TABLET].width}px;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.LAPTOP].media}px) {
    width: ${theme.breakpoint[Viewport.LAPTOP].width}px;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.DESKTOP].media}px) {
    width: ${theme.breakpoint[Viewport.DESKTOP].width}px;
  }
`

const SectionGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ marginBottom }) => marginBottom};

  @media screen and (max-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    flex-wrap: wrap;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    height: calc(
      ${skillCardSize[Viewport.TABLET].height} - ${theme.size.xsmall} -
        ${theme.spacing.small}
    );
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    height: calc(
      ${skillCardSize[Viewport.TABLET].height} - ${theme.size.xsmall} -
        ${theme.spacing.small}
    );
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.LAPTOP].media}px) {
    height: calc(
      ${skillCardSize[Viewport.LAPTOP].height} - ${theme.size.xsmall} -
        ${theme.spacing.small}
    );
  }
`

const Image = styled.img`
  max-height: 90%;
  max-width: 100%;
`

const Home = ({ location }) => {
  const NAVBAR_Y_OFFSET = 50
  const colorScheme = HomeColor[ColorMode.LIGHT]

  const [navBgEnabled, setNavBgEnabled] = useState(false)
  const [pageLoad, setPageLoad] = useState(false)

  const { viewport, initialLoad } = useContext(ViewportContext)
  const isMobileView = viewport === Viewport.MOBILE

  const skillGroups = [
    [
      { name: "React", logo: logoReact },
      { name: "Angular", logo: logoAngular },
      { name: "Apollo", logo: logoApollo },
      { name: "GraphQL", logo: logoGraphQL },
    ],
    [
      { name: "Python", logo: logoPython },
      { name: "Java", logo: logoJava },
      { name: "MySQL", logo: logoMySQL },
      { name: "MongoDB", logo: logoMongoDB },
    ],
  ]

  const skills = [
    { name: "React", logo: logoReact },
    { name: "Angular", logo: logoAngular },
    { name: "Apollo", logo: logoApollo },
    { name: "Python", logo: logoPython },
    { name: "Java", logo: logoJava },
    { name: "MySQL", logo: logoMySQL },
  ]

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
        backgroundEnabled={navBgEnabled}
        onClick={onPageLoad => {
          setPageLoad(onPageLoad)
        }}
      />
      <PatternContainer background={colorScheme.patternBg} />

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
              background={colorScheme.contactMeBg}
              foreground={colorScheme.contactMeFg}
              onClick={() => {
                window.open(SiteRoute.CONTACT, "_self")
              }}
            >
              Contact Me
            </Button>
          </CtaContainer>
        )}
        <MainTextContainer>
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
            color={colorScheme.position}
            letterSpacing=".3rem"
            size={HeadingSize.SMALL}
            transform={HeadingTransform.CAPITALIZE}
          >
            Software Engineer
          </Heading>
        </MainTextContainer>
        <ProfileImage src={photo} />
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
            background={colorScheme.contactMeBg}
            foreground={colorScheme.contactMeFg}
            onClick={() => {
              window.open(SiteRoute.CONTACT, "_self")
            }}
          >
            Contact Me
          </Button>
        </CtaContainer>
      )}

      <FillerContainer />

      <Container>
        <SubContainer>
          <SubTextContainer>
            <Heading
              color={colorScheme.introText}
              size={HeadingSize.XLARGE}
              weight={HeadingWeight.MEDIUM}
              marginBottom={theme.spacing.mid}
            >
              Hi, I'm Patricia!
            </Heading>
            <Heading
              color={colorScheme.introText}
              size={HeadingSize.MID}
              weight={HeadingWeight.MEDIUM}
            >
              Welcome to my personal website — designed, developed, and deployed
              by me. I have five years of full-stack web development under my
              belt. Feel free to know more{" "}
              <Link
                href={SiteRoute.ABOUT_ME}
                color={colorScheme.sectionSeeLink}
                weight={HeadingWeight.MEDIUM}
              >
                about me
              </Link>{" "}
              or check out my{" "}
              <Link
                href={SiteRoute.WORK}
                color={colorScheme.sectionSeeLink}
                weight={HeadingWeight.MEDIUM}
              >
                work experience!
              </Link>
            </Heading>
          </SubTextContainer>
          <SvgContainer>
            <Svg />
          </SvgContainer>
        </SubContainer>
      </Container>

      <SubPatternContainer>
        <SectionContainer>
          <Heading
            color={colorScheme.sectionHeading}
            size={isMobileView ? HeadingSize.SMALL : HeadingSize.MID}
            marginBottom={
              isMobileView ? theme.spacing.xlarge : theme.spacing.xxlarge
            }
          >
            Skill set includes
          </Heading>
          {!isMobileView &&
            skillGroups.map((skillGroup, index1) => (
              <SectionGroup
                key={`skillGroup-${index1}`}
                marginBottom={
                  index1 + 1 < skillGroups.length
                    ? theme.spacing.large
                    : theme.spacing.xxxlarge
                }
              >
                {skillGroup.map((skill, index2) => (
                  <Card
                    key={`card-${skill.name}`}
                    background={colorScheme.cardBg}
                    padding={theme.spacing.xlarge}
                    height={skillCardSize[viewport].height}
                    width={skillCardSize[viewport].width}
                    marginRight={
                      index2 + 1 < skillGroup.length ? theme.spacing.large : "0"
                    }
                  >
                    <ImageContainer key={`imgContainer-${skill.name}`}>
                      <Image key={`img-${skill.name}`} src={skill.logo} />
                    </ImageContainer>
                    <Text
                      key={skill.name}
                      color={colorScheme.cardText}
                      size={TextSize.XLARGE}
                      weight={TextWeight.MEDIUM}
                    >
                      {skill.name}
                    </Text>
                  </Card>
                ))}
              </SectionGroup>
            ))}
          {isMobileView && (
            <SectionGroup marginBottom={theme.spacing.xxlarge}>
              {skills.map((skill, index) => (
                <Card
                  key={`card-${skill.name}`}
                  background={colorScheme.cardBg}
                  padding={theme.spacing.xlarge}
                  height={skillCardSize[viewport].height}
                  width={skillCardSize[viewport].width}
                  marginBottom={
                    index + 1 < skills.length - 1 ? theme.spacing.mid : "0"
                  }
                  marginRight={index % 2 === 0 ? theme.spacing.large : "0"}
                >
                  <ImageContainer key={`imgContainer-${skill.name}`}>
                    <Image key={`img-${skill.name}`} src={skill.logo} />
                  </ImageContainer>
                  <Text
                    key={skill.name}
                    color={colorScheme.cardText}
                    size={TextSize.XLARGE}
                    weight={TextWeight.MEDIUM}
                  >
                    {skill.name}
                  </Text>
                </Card>
              ))}
            </SectionGroup>
          )}
          <Text color={colorScheme.sectionSeeMore} size={TextSize.LARGE}>
            See more on{" "}
            <Link href={SiteRoute.SKILLS} color={colorScheme.sectionSeeLink}>
              Skills →
            </Link>
          </Text>
        </SectionContainer>
      </SubPatternContainer>

      <Footer />
    </>
  )
}

export default Home
