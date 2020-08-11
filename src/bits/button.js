import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const cssButton = ({ theme, bgColor, fgColor }) => `
  background: ${bgColor};
  border: 0;
  border-radius: 30px;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.2);
  color: ${fgColor};
  cursor: pointer;
  font-family: inherit;
  font-size: ${theme.size.xxsmall};
  outline: 0;
  padding: ${theme.spacing.mid} ${theme.spacing.xxlarge};
  text-transform: capitalize;

  &:hover {
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.25);
    font-weight: 500;
  }
`

const StyledButton = styled.button`
  ${props => cssButton(props)}
`

const Button = ({ children, bgColor, fgColor }) => (
  <StyledButton bgColor={bgColor} fgColor={fgColor}>
    {children}
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
}

export default Button