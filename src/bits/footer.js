import React from "react"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import MailIcon from "@material-ui/icons/Mail"
import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "./theme"
import IconButton from "./icon-button"
import Text, { TextSize, TextWeight } from "./text"
import { ColorMode, SiteRoute } from "../config"

const FooterColor = {
  [ColorMode.LIGHT]: {
    footerBackground: theme.color.white.xdark,
    footerText: theme.color.gray.norm,
    footerLink: theme.color.blue.dark,
    iconButton: "#797979",
    iconButtonHover: theme.color.blue.dark,
  },
}

const cssFooter = ({ background }) => `
  background: ${background};
  display: flex;
  justify-content: center;
  overflow: hidden;
`

const StyledFooter = styled.div`
  ${props => cssFooter(props)}
`

const cssContainer = theme => `
  display: flex;
  justify-content: space-between;
  padding: ${theme.spacing.xxlarge} 0  ${theme.spacing.xxxxlarge} 0;
  width: ${theme.breakpoint.mobile.width}px;

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    width: ${theme.breakpoint.tablet.width}px;
  }

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    width: ${theme.breakpoint.laptop.width}px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop.media}px) {
    width: ${theme.breakpoint.desktop.width}px;
  }
`

const StyledContainer = styled.div`
  ${({ theme }) => cssContainer(theme)}
`

const StyledFooterText = styled.div`
  display: flex;
  flex-direction: column;
`

const cssLink = color => `
  color: ${color};
  font-size: inherit;
  font-weight: 500;
`

const StyledLink = styled.a`
  ${({ color }) => cssLink(color)}
`

const cssContactGroup = color => `
  color: ${color};
  display: flex;
  font-size: ${theme.size.small};
`

const StyledContactGroup = styled.div`
  ${({ color }) => cssContactGroup(color)}
`

const Footer = ({ colorMode }) => {
  const colorScheme = FooterColor[colorMode]

  return (
    <StyledFooter background={colorScheme.footerBackground}>
      <StyledContainer>
        <StyledFooterText>
          <Text
            color={colorScheme.footerText}
            size={TextSize.SMALL}
            weight={TextWeight.LIGHT}
            marginBottom={theme.spacing.xxsmall}
          >
            Website designed and developed by me.
          </Text>
          <Text
            color={colorScheme.footerText}
            size={TextSize.SMALL}
            weight={TextWeight.LIGHT}
          >
            Vectors created by{" "}
            <StyledLink
              href="https://www.freepik.com"
              color={colorScheme.footerLink}
            >
              freepik
            </StyledLink>
            .
          </Text>
        </StyledFooterText>
        <StyledContactGroup color={colorScheme.footerLink}>
          <IconButton
            color={colorScheme.iconButton}
            hoverColor={colorScheme.iconButtonHover}
            marginRight={theme.spacing.small}
            onClick={() => {
              window.open(SiteRoute.CONTACT, "_self")
            }}
          >
            <MailIcon color="inherit" fontSize="inherit" />
          </IconButton>
          <IconButton
            color={colorScheme.iconButton}
            hoverColor={colorScheme.iconButtonHover}
            marginRight={theme.spacing.small}
            onClick={() => {
              window.open("https://www.github.com/patriciasison", "_blank")
            }}
          >
            <GitHubIcon color="inherit" fontSize="inherit" />
          </IconButton>
          <IconButton
            color={colorScheme.iconButton}
            hoverColor={colorScheme.iconButtonHover}
            onClick={() => {
              window.open("https://www.linkedin.com/in/patriciasison", "_blank")
            }}
          >
            <LinkedInIcon color="inherit" fontSize="inherit" />
          </IconButton>
        </StyledContactGroup>
      </StyledContainer>
    </StyledFooter>
  )
}

Footer.defaultProps = {
  colorMode: ColorMode.LIGHT,
}

Footer.propTypes = {
  colorMode: PropTypes.oneOf(Object.values(ColorMode)),
}

export default Footer
