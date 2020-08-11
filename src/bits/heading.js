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
  SMALL: theme.size.mid,
  MID: theme.size.large,
  LARGE: theme.size.xlarge,
  XLARGE: theme.size.xxlarge,
  XXLARGE: theme.size.xxxlarge,
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
}

Heading.defaultProps = {
  letterSpacing: "normal",
  opacity: 100,
  transform: HeadingTransform.NONE,
  weight: HeadingWeight.REGULAR,
  marginBottom: "0",
  marginRight: "0",
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  letterSpacing: PropTypes.string,
  opacity: PropTypes.number,
  size: PropTypes.oneOf(Object.values(HeadingSize)).isRequired,
  transform: PropTypes.oneOf(Object.values(HeadingTransform)),
  weight: PropTypes.oneOf(Object.values(HeadingWeight)),
  style: PropTypes.object,
  marginBottom: PropTypes.string,
  marginRight: PropTypes.string,
}

export default Heading
