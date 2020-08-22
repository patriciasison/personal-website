import React, { useState } from "react"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import MinimizeIcon from "@material-ui/icons/Minimize"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import styled from "styled-components"
import {
  Container,
  ContainerDirection,
  Navbar,
  Text,
  TextSize,
  TextTransform,
  TextWeight,
} from "../bits"
import theme from "../bits/theme"
import { ColorMode } from "../config"
import { useViewport, Viewport } from "../hooks"

const WorkColor = {
  [ColorMode.LIGHT]: {
    company: theme.color.gray.norm,
    selectedCompany: theme.color.blue.xdark,
    position: theme.color.black.xlight,
    duration: theme.color.gray.norm,
    navigate: theme.color.blue.norm,
    timeline: theme.color.blue.xdark,
    titleBar: theme.color.white.xdark,
    circle1: theme.color.red.norm,
    circle2: theme.color.yellow.norm,
    circle3: theme.color.green.norm,
    content: theme.color.white.norm,
    icon: theme.color.gray.light,
    experience: theme.color.black.light,
  },
}

const CompanySection = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-top: ${theme.spacing.xxxlarge};
  width: 30%;

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    width: 35%;
  }
`

const Companies = styled.div`
  box-sizing: border-box;
  padding-right: 1rem;
`

const Company = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: ${({ marginBottom }) => marginBottom};
  }
`

const CompanySectionMobile = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacing.mid};
  width: 100%;
`

const CompanyMainSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacing.mid};
  width: 100%;
`

const CompanySubSection = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
`

const NavigationSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Navigation = styled.div`
  cursor: pointer;
  color: ${({ color }) => color};
  font-size: ${theme.size.mid};

  &:not(:last-child) {
    margin-right: ${theme.spacing.small};
  }
`

const Timeline = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-right: ${theme.spacing.xxxlarge};
`

const TimelineCircle = styled.div`
  background-color: ${({ background, selected }) =>
    selected ? background : "transparent"};
  border: 3px ${({ background }) => background} solid;
  border-radius: 50%;
  cursor: pointer;
  height: 10px;
  width: 10px;

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    border: 4px ${({ background }) => background} solid;
    height: 12px;
    width: 12px;
  }
`

const TimelineLine = styled.div`
  background-color: ${({ background }) => background};
  height: 96px;
  width: 4px;

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    height: 94px;
  }
`

const Window = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    width: 70%;
  }

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    width: 65%;
  }
`

const TitleBar = styled.div`
  background-color: ${({ background }) => background};
  box-sizing: border-box;
  display: flex;
  padding: ${theme.spacing.mid} ${theme.spacing.large};
  width: 100%;
`

const TitleBarButton = styled.div`
  background-color: ${({ background }) => background};
  border-radius: 50%;
  height: 10px;
  width: 10px;

  &:not(:last-child) {
    margin-right: ${theme.spacing.xsmall};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    height: 13px;
    width: 13px;
  }
`

const Content = styled.div`
  background-color: ${({ background }) => background};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.large} ${theme.spacing.xlarge} ${theme.spacing.large}
    ${theme.spacing.mid};
  width: 100%;

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    height: 75vh;
    padding: ${theme.spacing.large} ${theme.spacing.xxxlarge}
      ${theme.spacing.large} ${theme.spacing.xxlarge};
  }
`

const ContentItem = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: ${theme.spacing.large};
  }
`

const Icon = styled.div`
  color: ${({ color }) => color};
  display: flex;
  font-size: ${theme.size.small};
  margin: ${theme.spacing.xxsmall} ${theme.spacing.mid} 0 0;

  & > svg:last-child {
    margin-left: -${theme.spacing.mid};
  }
`

const Work = ({ location }) => {
  const colorScheme = WorkColor[ColorMode.LIGHT]

  const companies = [
    {
      id: "phitopolis",
      name: "Phitopolis International Corp.",
      position: "Software Developer",
      duration: "Nov 2019 - May 2020",
    },
    {
      id: "freelancer",
      name: "Freelancer.com Philippines Inc.",
      position: "Software Engineer",
      duration: "Aug 2016 - Sept 2019",
    },
    {
      id: "orange",
      name: "Orange & Bronze Software Labs",
      position: "Quality Engineer Intern",
      duration: "June 2015 - July 2015",
    },
  ]

  const experience = {
    phitopolis: [
      `picked up and familiarized with the <strong>MERN stack</strong> within the 
      first month to help with the migration of the dashboard web application that 
      utilizes big data for security analytics`,
      `majorly responsible for <strong>frontend development</strong> of the 
        application — built React frontend framework from scratch, integrated its 
        elements and API requests for the view and controller of the dashboard`,
      `in charge of the <strong>UI/UX design</strong> of the dashboard, specifically 
      creating the mockup screens with the user flow integrated`,
      `developed some of the functionalities required in the <strong>backend</strong>, 
      such as retrieving an aggregation of data for showing statistics`,
      `ironed out <strong>business requirements</strong> to detailed product 
      specifications and converted these into technical requirements`,
      `wrote documentation and unit test code, cleaned up legacy code, refactored 
      code, fixed bugs that provided better <strong>code maintenance, readability, 
      and modularity</strong>`,
      `contributed in and enforced standards in the <strong>software development 
      process</strong> of the team such as sprints, code review, and QA testing`,
    ],
    freelancer: [
      `<strong>front-end development</strong> skills consistently recognized in 
      the teams I’ve been in, speeding things up through decreasing significant 
      amount of dependency on the team of dedicated front-end developers`,
      `<strong>developed key features</strong> in memberships, exams, and contest 
      pages with consistent good quality of code — preventing site-breaking bugs, 
      serving as a guide for the code structure of the team's future releases`,
      `<strong>actively participated in meetings</strong> and discussions — helped 
      iron out product and technical requirements and decisions, completed use cases, 
      improved UI/UX, familiarized with the various features`,
      `practiced <strong>agile methodology</strong> through frameworks Kanban and 
      Scrum for optimal and efficient software development`,
      `showed <strong>flexibility</strong> through working on various kinds of work 
      assigned at any given time to get work done as efficient as possible`,
    ],
    orange: [
      `acquired and analyzed <strong>business requirements</strong> for 
    converting to technical specifications`,
      `worked on the <strong>front-end development</strong> of a site for a business 
    process within the company`,
      `awarded as <strong>one of the top team performances</strong> for the implemented
    business process software`,
    ],
  }

  const [selectedCompany, setSelectedCompany] = useState(companies[0])
  const handleCompanyClick = company => {
    setSelectedCompany(company)
  }

  const handleNavigationClick = isNext => {
    const selectedCompanyIndex = companies.findIndex(
      company => company.id === selectedCompany.id
    )
    const newCompanyIndex = isNext
      ? selectedCompanyIndex + 1
      : companies.length + selectedCompanyIndex - 1

    setSelectedCompany(companies[newCompanyIndex % companies.length])
  }

  const isMobileView = useViewport() === Viewport.MOBILE

  return (
    <>
      <Navbar pathname={location.pathname} />
      <Container
        direction={
          isMobileView
            ? ContainerDirection.VERTICAL
            : ContainerDirection.HORIZONTAL
        }
        marginTop={theme.spacing.xxlarge}
        marginBottom={theme.spacing.xxxlarge}
      >
        {!isMobileView && (
          <CompanySection>
            <Companies>
              {companies.map(company => (
                <Company
                  key={company.id}
                  marginBottom={
                    company.id === selectedCompany.id
                      ? theme.spacing.xxxlarge
                      : `calc(${theme.spacing.xxxxlarge} + ${theme.spacing.small})`
                  }
                >
                  <Text
                    key={company.name}
                    color={
                      company.id === selectedCompany.id
                        ? colorScheme.selectedCompany
                        : colorScheme.company
                    }
                    isClickable={true}
                    size={TextSize.LARGE}
                    weight={
                      company.id === selectedCompany.id
                        ? TextWeight.MEDIUM
                        : TextWeight.REGULAR
                    }
                    marginBottom={theme.spacing.xsmall}
                    onClick={() => {
                      handleCompanyClick(company)
                    }}
                  >
                    {company.name}
                  </Text>
                  {company.id === selectedCompany.id && (
                    <React.Fragment key={`subsection-${company.id}`}>
                      <Text
                        key={`${company.id}-${company.position}`}
                        color={colorScheme.position}
                        letterSpacing=".1rem"
                        size={TextSize.MID}
                        transform={TextTransform.UPPERCASE}
                        marginBottom={theme.spacing.xsmall}
                      >
                        {company.position}
                      </Text>
                      <Text
                        key={company.duration}
                        color={colorScheme.duration}
                        letterSpacing=".05rem"
                        size={TextSize.SMALL}
                      >
                        {company.duration}
                      </Text>
                    </React.Fragment>
                  )}
                </Company>
              ))}
            </Companies>
            <Timeline>
              {companies.map((company, i) => {
                if (i + 1 === companies.length) {
                  return (
                    <TimelineCircle
                      key={`circle-${company.id}`}
                      background={colorScheme.timeline}
                      selected={company.id === selectedCompany.id}
                      onClick={() => {
                        handleCompanyClick(company)
                      }}
                    />
                  )
                } else {
                  return (
                    <React.Fragment key={`timeline-${company.id}`}>
                      <TimelineCircle
                        key={`circle-${company.id}`}
                        background={colorScheme.timeline}
                        selected={company.id === selectedCompany.id}
                        onClick={() => {
                          handleCompanyClick(company)
                        }}
                      />
                      <TimelineLine
                        key={`line-${company.id}`}
                        background={colorScheme.timeline}
                      />
                    </React.Fragment>
                  )
                }
              })}
            </Timeline>
          </CompanySection>
        )}

        {isMobileView && (
          <CompanySectionMobile>
            <CompanyMainSection>
              <Text
                color={colorScheme.selectedCompany}
                size={TextSize.XLARGE}
                weight={TextWeight.MEDIUM}
                marginBottom={theme.spacing.xxsmall}
              >
                {selectedCompany.name}
              </Text>
              <CompanySubSection>
                <Text
                  color={colorScheme.position}
                  size={TextSize.MID}
                  transform={TextTransform.UPPERCASE}
                  weight={TextWeight.MEDIUM}
                >
                  {selectedCompany.position}
                </Text>
                <Text color={colorScheme.duration} size={TextSize.MID}>
                  {selectedCompany.duration}
                </Text>
              </CompanySubSection>
            </CompanyMainSection>
            <NavigationSection>
              <Navigation
                color={colorScheme.navigate}
                onClick={() => handleNavigationClick()}
              >
                <ArrowBackIcon color="inherit" fontSize="inherit" />
              </Navigation>
              <Navigation
                color={colorScheme.navigate}
                onClick={() => handleNavigationClick(true)}
              >
                <ArrowForwardIcon color="inherit" fontSize="inherit" />
              </Navigation>
            </NavigationSection>
          </CompanySectionMobile>
        )}

        <Window>
          <TitleBar background={colorScheme.titleBar}>
            <TitleBarButton background={colorScheme.circle1} />
            <TitleBarButton background={colorScheme.circle2} />
            <TitleBarButton background={colorScheme.circle3} />
          </TitleBar>
          <Content background={colorScheme.content}>
            {experience[selectedCompany.id].map((item, index) => (
              <ContentItem key={`xp-${selectedCompany.id}-${index}`}>
                <Icon
                  key={`icon-${selectedCompany.id}-${index}`}
                  color={colorScheme.icon}
                >
                  <NavigateNextIcon
                    key={`icon1-${selectedCompany.id}-${index}`}
                    color="inherit"
                    fontSize="inherit"
                  />
                  <MinimizeIcon
                    key={`icon2-${selectedCompany.id}-${index}`}
                    color="inherit"
                    fontSize="inherit"
                  />
                </Icon>
                <Text
                  key={`${selectedCompany.id}-${index}`}
                  color={colorScheme.experience}
                  size={TextSize.LARGE}
                  lineHeight="1.5"
                  dangerouslySetInnerHTML={{
                    __html: item,
                  }}
                />
              </ContentItem>
            ))}
          </Content>
        </Window>
      </Container>
    </>
  )
}

export default Work
