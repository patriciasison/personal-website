import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "./theme"

const cssHeading = ({
  color,
  letterSpacing,
  opacity,
  size,
  transform,
  weight,
  marginBottom,
  marginRight,
}) => `
  color: ${color};
  font-size: ${size};
  font-weight: ${weight};
  letter-spacing: ${letterSpacing};
  margin-bottom: ${marginBottom};
  margin-right: ${marginRight};
  opacity: ${opacity}%;
  text-transform: ${transform};
`

const StyledHeading = styled.span`
  ${props => cssHeading(props)}
`

const Heading = ({
  children,
  color,
  letterSpacing,
  opacity,
  size,
  transform,
  weight,
  style,
  marginBottom,
  marginRight,
}) => (
  <StyledHeading
    color={color}
    letterSpacing={letterSpacing}
    opacity={opacity}
    size={size}
    transform={transform}
    weight={weight}
    style={style}
    marginBottom={marginBottom}
    marginRight={marginRight}
  >
    {children}
  </StyledHeading>
)

export const HeadingSize = {
  XSMALL: theme.size.mid,
  SMALL: theme.size.large,
  MID: theme.size.xlarge,
  LARGE: theme.size.xxlarge,
  XLARGE: theme.size.xxxlarge,
  XXLARGE: theme.size.xxxxlarge,
  INHERIT: "inherit",
}

export const HeadingTransform = {
  UPPERCASE: "uppercase",
  LOWERCASE: "lowercase",
  CAPITALIZE: "capitalize",
  NONE: "none",
}

export const HeadingWeight = {
  REGULAR: "400",
  MEDIUM: "500",
  BOLD: "700",
  BLACK: "900",
  INHERIT: "inherit",
}

Heading.defaultProps = {
  letterSpacing: "normal",
  opacity: 100,
  size: HeadingSize.INHERIT,
  transform: HeadingTransform.NONE,
  weight: HeadingWeight.INHERIT,
  marginBottom: "0",
  marginRight: "0",
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  letterSpacing: PropTypes.string,
  opacity: PropTypes.number,
  size: PropTypes.oneOf(Object.values(HeadingSize)),
  transform: PropTypes.oneOf(Object.values(HeadingTransform)),
  weight: PropTypes.oneOf(Object.values(HeadingWeight)),
  style: PropTypes.object,
  marginBottom: PropTypes.string,
  marginRight: PropTypes.string,
}

export default Heading
