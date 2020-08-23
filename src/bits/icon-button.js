import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const cssIconButton = ({
  theme,
  color,
  hoverColor,
  marginBottom,
  marginRight,
}) => `
  background: transparent;
  border: 1px ${color} solid;
  border-radius: 50%;
  color: ${color};
  cursor: pointer;
  display: flex;
  font-size: ${theme.size.small};
  margin: 0 ${marginRight} ${marginBottom} 0;
  outline: 0;
  padding: ${theme.spacing.xsmall};

  &:hover {
    border: 2px ${hoverColor} solid;
    color: ${hoverColor};
  }

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    border: 2px ${color} solid;
  }
`

const StyledIconButton = styled.button`
  ${props => cssIconButton(props)}
`

const IconButton = ({
  children,
  color,
  hoverColor,
  marginBottom,
  marginRight,
  onClick,
}) => (
  <StyledIconButton
    color={color}
    hoverColor={hoverColor}
    marginBottom={marginBottom}
    marginRight={marginRight}
    onClick={onClick}
  >
    {children}
  </StyledIconButton>
)

IconButton.defaultProps = {
  marginBottom: "0",
  marginRight: "0",
  onClick: () => {},
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
  marginBottom: PropTypes.string,
  marginRight: PropTypes.string,
  onClick: PropTypes.func,
}

export default IconButton
