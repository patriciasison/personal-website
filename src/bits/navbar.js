import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import EmailIcon from "@mui/icons-material/Email"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import HomeIcon from "@mui/icons-material/Home"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import PersonIcon from "@mui/icons-material/Person"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import StarIcon from "@mui/icons-material/Star"
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined"
import WorkIcon from "@mui/icons-material/Work"
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "./theme"
import { ColorMode, SiteRoute, SITE_NAME } from "../config"
import { Viewport } from "../providers/viewport-provider"

const NavbarColor = {
  [ColorMode.LIGHT]: {
    navbarBackground: theme.color.blue.norm,
    navItemColor: theme.color.white.norm,
    navItemHighlight: theme.color.blue.light,
  },
}

const cssNavbar = ({ theme, background, backgroundEnabled }) => `
  background: ${background};
  display: flex;
  justify-content: center;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1500;

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    background: ${backgroundEnabled ? background : "none"};
  }
`

const StyledNavbar = styled.div`
  ${props => cssNavbar(props)}
`

const cssContainer = theme => `
  display: flex;
  justify-content: center;
  width: ${theme.breakpoint.mobile.width}px;

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    width: ${theme.breakpoint.tablet.width}px;
  }

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    justify-content: flex-end;
    width: ${theme.breakpoint.laptop.width}px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop.media}px) {
    width: ${theme.breakpoint.desktop.width}px;
  }
`

const StyledContainer = styled.div`
  ${({ theme }) => cssContainer(theme)}
`

const cssNavItem = ({ theme, active, color, highlight }) => `
  align-items: center;
  border-bottom: 3px solid transparent;
  box-sizing: border-box;
  color: ${color};
  display: flex;
  font-size: ${theme.size.xlarge};
  padding: ${theme.spacing.large} ${theme.spacing.mid} ${theme.spacing.mid} ${
  theme.spacing.mid
};
  text-decoration: none;
  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: ${theme.spacing.xxlarge};
  }

  ${active === "true" && `border-bottom: 3px solid ${highlight}`};
  
  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    font-size: ${theme.size.xsmall};

    ${
      active === "true"
        ? `
      font-weight: 700;
      opacity: 100%;
    `
        : `
      font-weight: 400;
      opacity: 85%;
  
      &:hover {
        opacity: 100%;
      }
    `
    }
  }

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    font-size: ${theme.size.xxsmall};

    &:not(:last-child) {
      margin-right: ${theme.spacing.xlarge};
    }
  }
`

const StyledNavItem = styled(Link)`
  ${props => cssNavItem(props)}
`

const Navbar = ({
  navItems,
  pathname,
  viewport,
  backgroundEnabled,
  colorMode,
  onClick,
}) => {
  const colorScheme = NavbarColor[colorMode]
  const [activeNavItemId, setActiveNavItemId] = useState(
    pathname === "/" ? SiteRoute.HOME : pathname
  )
  const [pageLoad, setPageLoad] = useState(false)

  const showIcons = viewport === Viewport.MOBILE

  const formatPathnameToTitle = string => {
    const title = string.replace(/\//g, "").replace(/-/g, " ")
    return title[0].toUpperCase() + title.substring(1)
  }

  useEffect(() => {
    setPageLoad(
      (pathname === "/" && activeNavItemId !== SiteRoute.HOME) ||
        (pathname !== "/" && pathname !== activeNavItemId)
    )
  }, [pathname, activeNavItemId, setPageLoad])

  useEffect(() => {
    onClick(pageLoad)
  }, [onClick, pageLoad])

  return (
    <>
      <Helmet>
        <title>
          {SITE_NAME} | {formatPathnameToTitle(activeNavItemId)}
        </title>
      </Helmet>

      <StyledNavbar
        background={colorScheme.navbarBackground}
        backgroundEnabled={backgroundEnabled}
      >
        <StyledContainer>
          {navItems.map(navItem => (
            <StyledNavItem
              key={navItem.id}
              to={navItem.id}
              active={(activeNavItemId === navItem.id) + ""}
              color={colorScheme.navItemColor}
              highlight={colorScheme.navItemHighlight}
              onClick={() => {
                setActiveNavItemId(navItem.id)
              }}
            >
              {showIcons
                ? activeNavItemId === navItem.id
                  ? navItem.primaryIcon
                  : navItem.secondaryIcon
                : navItem.name}
            </StyledNavItem>
          ))}
        </StyledContainer>
      </StyledNavbar>
    </>
  )
}

const navItemShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  primaryIcon: PropTypes.object,
  secondaryIcon: PropTypes.object,
}

Navbar.defaultProps = {
  navItems: [
    {
      id: SiteRoute.HOME,
      name: "home",
      primaryIcon: <HomeIcon color="inherit" fontSize="inherit" />,
      secondaryIcon: <HomeOutlinedIcon color="inherit" fontSize="inherit" />,
    },
    {
      id: SiteRoute.ABOUT_ME,
      name: "about me",
      primaryIcon: <PersonIcon color="inherit" fontSize="inherit" />,
      secondaryIcon: <PersonOutlinedIcon color="inherit" fontSize="inherit" />,
    },
    {
      id: SiteRoute.SKILLS,
      name: "skills",
      primaryIcon: <StarIcon color="inherit" fontSize="inherit" />,
      secondaryIcon: (
        <StarBorderOutlinedIcon color="inherit" fontSize="inherit" />
      ),
    },
    {
      id: SiteRoute.WORK,
      name: "work",
      primaryIcon: <WorkIcon color="inherit" fontSize="inherit" />,
      secondaryIcon: (
        <WorkOutlineOutlinedIcon color="inherit" fontSize="inherit" />
      ),
    },
    {
      id: SiteRoute.CONTACT,
      name: "contact",
      primaryIcon: <EmailIcon color="inherit" fontSize="inherit" />,
      secondaryIcon: <EmailOutlinedIcon color="inherit" fontSize="inherit" />,
    },
  ],
  backgroundEnabled: true,
  colorMode: ColorMode.LIGHT,
}

Navbar.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape(navItemShape)).isRequired,
  pathname: PropTypes.string.isRequired,
  viewport: PropTypes.oneOf(Object.values(Viewport)).isRequired,
  backgroundEnabled: PropTypes.bool,
  colorMode: PropTypes.oneOf(Object.values(ColorMode)),
}

export default Navbar
