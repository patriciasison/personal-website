import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "./theme"

const cssText = ({
  color,
  decoration,
  fontStyle,
  isClickable,
  letterSpacing,
  lineHeight,
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
  line-height: ${lineHeight};
  margin-bottom: ${marginBottom};
  margin-right: ${marginRight};
  text-decoration: ${decoration};
  text-transform: ${transform};

  ${isClickable ? "cursor: pointer;" : ""}
`

const StyledText = styled.span`
  ${props => cssText(props)}
`

const Text = ({
  children,
  color,
  decoration,
  fontStyle,
  isClickable,
  letterSpacing,
  lineHeight,
  size,
  transform,
  weight,
  marginBottom,
  marginRight,
  dangerouslySetInnerHTML,
  onClick,
}) => (
  <StyledText
    color={color}
    decoration={decoration}
    fontStyle={fontStyle}
    isClickable={isClickable}
    lineHeight={lineHeight}
    letterSpacing={letterSpacing}
    size={size}
    transform={transform}
    weight={weight}
    marginBottom={marginBottom}
    marginRight={marginRight}
    dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    onClick={onClick}
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
  INHERIT: "inherit",
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
  LIGHT: "300",
  REGULAR: "400",
  MEDIUM: "500",
  BOLD: "700",
  BLACK: "900",
}

Text.defaultProps = {
  decoration: TextDecoration.NONE,
  fontStyle: TextStyle.NORMAL,
  isClickable: false,
  letterSpacing: "normal",
  lineHeight: "normal",
  size: TextSize.INHERIT,
  transform: TextTransform.NONE,
  weight: TextWeight.REGULAR,
  marginBottom: "0",
  marginRight: "0",
  dangerouslySetInnerHTML: undefined,
  onClick: () => {},
}

Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string.isRequired,
  decoration: PropTypes.oneOf(Object.values(TextDecoration)),
  fontStyle: PropTypes.oneOf(Object.values(TextStyle)),
  isClickable: PropTypes.bool,
  letterSpacing: PropTypes.string,
  lineHeight: PropTypes.string,
  size: PropTypes.oneOf(Object.values(TextSize)),
  transform: PropTypes.oneOf(Object.values(TextTransform)),
  weight: PropTypes.oneOf(Object.values(TextWeight)),
  marginBottom: PropTypes.string,
  marginRight: PropTypes.string,
  dangerouslySetInnerHTML: PropTypes.object,
  onClick: PropTypes.func,
}

export default Text
