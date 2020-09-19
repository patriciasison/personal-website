import React, { useContext, useState } from "react"
import styled from "styled-components"
import logoAngular from "../assets/logo-angular.png"
import logoApollo from "../assets/logo-apollo.png"
import logoC from "../assets/logo-c.png"
import logoCSS from "../assets/logo-css.png"
import logoGraphQL from "../assets/logo-graphql.png"
import logoGithub from "../assets/logo-github.png"
import logoHTML from "../assets/logo-html.png"
import logoJava from "../assets/logo-java.png"
import logoJavascript from "../assets/logo-javascript.png"
import logoLinux from "../assets/logo-linux.png"
import logoMongoDB from "../assets/logo-mongodb.png"
import logoMySQL from "../assets/logo-mysql.png"
import logoPostgreSQL from "../assets/logo-postgresql.png"
import logoPHP from "../assets/logo-php.png"
import logoPython from "../assets/logo-python.png"
import logoReact from "../assets/logo-react.png"
import logoSass from "../assets/logo-sass.png"
import logoTypescript from "../assets/logo-typescript.png"
import {
  Card,
  Container,
  ContainerAlign,
  Footer,
  Loading,
  Navbar,
  Text,
  TextSize,
  TextTransform,
  TextWeight,
} from "../bits"
import theme from "../bits/theme"
import { ColorMode } from "../config"
import { Viewport, ViewportContext } from "../providers"

const SkillsColor = {
  [ColorMode.LIGHT]: {
    loading: theme.color.gray.light,
    category: theme.color.gray.dark,
    card: theme.color.white.norm,
    skill: theme.color.black.light,
  },
}

const cardSize = {
  [Viewport.MOBILE]: {
    height: "100px",
    width: "100px",
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

const SkillGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &:not(:last-child) {
    margin-bottom: ${theme.spacing.xxlarge};
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    justify-content: flex-start;
  }
`

const ImageContainer = styled.div`
  align-items: ${({ alignLogo }) => (alignLogo ? alignLogo : "flex-start")};
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    height: calc(
      ${cardSize[Viewport.MOBILE].height} - ${theme.size.xsmall} -
        ${theme.spacing.small}
    );
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    height: calc(
      ${cardSize[Viewport.TABLET].height} - ${theme.size.xsmall} -
        ${theme.spacing.small}
    );
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.LAPTOP].media}px) {
    height: calc(
      ${cardSize[Viewport.LAPTOP].height} - ${theme.size.xsmall} -
        ${theme.spacing.small}
    );
  }
`

const Image = styled.img`
  max-height: 90%;
  max-width: 100%;
`

const Skills = ({ location }) => {
  const colorScheme = SkillsColor[ColorMode.LIGHT]
  const { viewport, initialLoad } = useContext(ViewportContext)
  const [pageLoad, setPageLoad] = useState(false)

  const categories = [
    {
      name: "Web Technologies",
      skills: [
        { name: "React", logo: logoReact },
        { name: "Angular", logo: logoAngular },
        { name: "Apollo", logo: logoApollo },
        { name: "GraphQL", logo: logoGraphQL },
      ],
    },
    {
      name: "Web Languages",
      skills: [
        { name: "HTML", logo: logoHTML },
        { name: "CSS", logo: logoCSS },
        { name: "Javascript", logo: logoJavascript },
        { name: "Typescript", logo: logoTypescript },
        { name: "Sass", logo: logoSass },
      ],
    },
    {
      name: "Programming Languages",
      skills: [
        { name: "PHP", logo: logoPHP, alignLogo: "center" },
        { name: "Python", logo: logoPython },
        { name: "Java", logo: logoJava },
        { name: "C", logo: logoC },
      ],
    },
    {
      name: "Database Management System",
      skills: [
        { name: "MySQL", logo: logoMySQL },
        { name: "PostgreSQL", logo: logoPostgreSQL },
        { name: "MongoDB", logo: logoMongoDB },
      ],
    },
    {
      name: "Other Technologies",
      skills: [
        { name: "Github", logo: logoGithub },
        { name: "Linux/Unix", logo: logoLinux },
      ],
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
        viewport={viewport}
        pathname={location.pathname}
        onClick={onPageLoad => {
          setPageLoad(onPageLoad)
        }}
      />
      <Container
        align={
          viewport === Viewport.MOBILE
            ? ContainerAlign.CENTER
            : ContainerAlign.START
        }
        marginTop={theme.spacing.xxlarge}
        marginBottom={theme.spacing.xxxxlarge}
      >
        {categories.map(category => (
          <React.Fragment key={`category-${category.name}`}>
            <Text
              key={category}
              color={colorScheme.category}
              letterSpacing=".15rem"
              size={
                viewport === Viewport.MOBILE ? TextSize.LARGE : TextSize.MID
              }
              transform={TextTransform.UPPERCASE}
              weight={TextWeight.MEDIUM}
              marginBottom={theme.spacing.small}
            >
              {category.name}
            </Text>

            <SkillGroup>
              {category.skills.map((skill, index) => (
                <Card
                  key={`card-${skill.name}`}
                  background={colorScheme.card}
                  padding={theme.spacing.xlarge}
                  height={cardSize[viewport].height}
                  width={cardSize[viewport].width}
                  marginBottom={
                    viewport === Viewport.MOBILE ? theme.spacing.large : "0"
                  }
                  marginRight={
                    viewport === Viewport.MOBILE && index % 2 === 1
                      ? theme.spacing.large
                      : index + 1 < category.skills.length
                      ? theme.spacing.xlarge
                      : "0"
                  }
                >
                  <ImageContainer
                    key={`imgContainer-${skill.name}`}
                    alignLogo={skill.alignLogo}
                  >
                    <Image key={`img-${skill.name}`} src={skill.logo} />
                  </ImageContainer>
                  <Text
                    key={skill.name}
                    color={colorScheme.skill}
                    size={TextSize.XLARGE}
                    weight={TextWeight.MEDIUM}
                  >
                    {skill.name}
                  </Text>
                </Card>
              ))}
            </SkillGroup>
          </React.Fragment>
        ))}
      </Container>
      <Footer />
    </>
  )
}

export default Skills
