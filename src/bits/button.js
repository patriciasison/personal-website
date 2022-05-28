import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const cssButton = ({ theme, background, foreground }) => `
  background: ${background};
  border: 0;
  border-radius: 30px;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.2);
  color: ${foreground};
  cursor: pointer;
  font-family: inherit;
  font-size: ${theme.size.xsmall};
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

const Button = ({ children, background, foreground, onClick }) => (
  <StyledButton
    background={background}
    foreground={foreground}
    onClick={onClick}
  >
    {children}
  </StyledButton>
)

Button.defaultProps = {
  onClick: () => {},
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
  foreground: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button
