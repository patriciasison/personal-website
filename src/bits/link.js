import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const cssLink = ({ color, size, weight }) => `
  color: ${color};
  font-size: ${size};
  font-weight: ${weight};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const StyledLink = styled.a`
  ${props => cssLink(props)}
`

const Link = ({ children, href, target, color, size, weight }) => (
  <StyledLink
    href={href}
    target={target}
    color={color}
    size={size}
    weight={weight}
  >
    {children}
  </StyledLink>
)

export const LinkWeight = {
  MEDIUM: "500",
  BOLD: "700",
}

Link.defaultProps = {
  target: "_self",
  size: "inherit",
  weight: LinkWeight.BOLD,
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
  weight: PropTypes.oneOf(Object.values(LinkWeight)),
}

export default Link
