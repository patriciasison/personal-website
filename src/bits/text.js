import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "./theme"

const cssText = ({
  color,
  decoration,
  fontStyle,
  letterSpacing,
  size,
  transform,
  weight,
  marginBottom,
  marginRight,
}) => `
  color: ${color};
  font-size: ${size};
  font-style: ${fontStyle};
  font-weight: ${weight};
  letter-spacing: ${letterSpacing};
  margin-bottom: ${marginBottom};
  margin-right: ${marginRight};
  text-decoration: ${decoration};
  text-transform: ${transform};
`

const StyledText = styled.span`
  ${props => cssText(props)}
`

const Text = ({
  children,
  color,
  decoration,
  fontStyle,
  letterSpacing,
  size,
  transform,
  weight,
  marginBottom,
  marginRight,
}) => (
  <StyledText
    color={color}
    decoration={decoration}
    fontStyle={fontStyle}
    letterSpacing={letterSpacing}
    size={size}
    transform={transform}
    weight={weight}
    marginBottom={marginBottom}
    marginRight={marginRight}
  >
    {children}
  </StyledText>
)

export const TextDecoration = {
  UNDERLINE: "underline",
  NONE: "none",
}

export const TextSize = {
  SMALL: theme.size.xxxsmall,
  MID: theme.size.xxsmall,
  LARGE: theme.size.xsmall,
  XLARGE: theme.size.small,
}

export const TextStyle = {
  NORMAL: "normal",
  ITALIC: "italic",
}

export const TextTransform = {
  UPPERCASE: "uppercase",
  LOWERCASE: "lowercase",
  CAPITALIZE: "capitalize",
  NONE: "none",
}

export const TextWeight = {
  REGULAR: "400",
  MEDIUM: "500",
  BOLD: "700",
  BLACK: "900",
}

Text.defaultProps = {
  decoration: TextDecoration.NONE,
  fontStyle: TextStyle.NORMAL,
  letterSpacing: "normal",
  transform: TextTransform.NONE,
  weight: TextWeight.REGULAR,
  marginBottom: "0",
  marginRight: "0",
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  decoration: PropTypes.oneOf(Object.values(TextDecoration)),
  fontStyle: PropTypes.oneOf(Object.values(TextStyle)),
  letterSpacing: PropTypes.string,
  size: PropTypes.oneOf(Object.values(TextSize)).isRequired,
  transform: PropTypes.oneOf(Object.values(TextTransform)),
  weight: PropTypes.oneOf(Object.values(TextWeight)),
  marginBottom: PropTypes.string,
  marginRight: PropTypes.string,
}

export default Text
