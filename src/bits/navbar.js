import React, { useEffect, useState } from "react"
import EmailIcon from "@material-ui/icons/Email"
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined"
import HomeIcon from "@material-ui/icons/Home"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import PersonIcon from "@material-ui/icons/Person"
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined"
import StarIcon from "@material-ui/icons/Star"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import WorkIcon from "@material-ui/icons/Work"
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "./theme"
import { ColorMode, SiteRoute } from "../config"

const NavbarColor = {
  [ColorMode.LIGHT]: {
    navbarBackground: theme.color.blue.norm,
    navItemColor: theme.color.white.norm,
    navItemHighlight: theme.color.blue.light,
  },
}

const cssNavbar = ({ background, backgroundEnabled }) => `
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
  padding-top: ${theme.spacing.large};
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
  font-size: ${theme.size.large};
  padding: 0 ${theme.spacing.mid} ${theme.spacing.mid} ${theme.spacing.mid};
  text-decoration: none;
  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: ${theme.spacing.xxlarge};
  }

  ${active === "true" && `border-bottom: 3px solid ${highlight}`};
  
  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    font-size: ${theme.size.xxsmall};

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
    font-size: ${theme.size.xxxsmall};
  }
`

const StyledNavItem = styled(Link)`
  ${props => cssNavItem(props)}
`

const Navbar = ({ navItems, pathname, backgroundEnabled }) => {
  const colorScheme = NavbarColor[ColorMode.LIGHT]
  const activeNavItemId =
    pathname === "/" ? SiteRoute.HOME : pathname.replace(/\/$/, "")
  const [showIcons, setShowIcons] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setShowIcons(window.innerWidth < theme.breakpoint.tablet.media)
    }
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
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
}

Navbar.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape(navItemShape)).isRequired,
  pathname: PropTypes.string.isRequired,
  backgroundEnabled: PropTypes.bool,
}

export default Navbar
