import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const cssButton = ({ theme, background, foreground, borderRadius }) => `
  align-items: start;
  background: ${background};
  border: 0;
  border-radius: ${borderRadius};
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.2);
  color: ${foreground};
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: ${theme.size.xsmall};
  outline: 0;
  padding: ${theme.spacing.mid} ${theme.spacing.xxlarge};
  text-transform: capitalize;

  & > svg {
    font-size: ${theme.size.mid};
    margin-left: -${theme.spacing.xsmall};
    padding-right: ${theme.spacing.xsmall};
  }

  &:hover {
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.25);
    font-weight: 500;
  }
`

const StyledButton = styled.button`
  ${props => cssButton(props)}
`

const Button = ({
  children,
  background,
  foreground,
  borderRadius,
  onClick,
}) => (
  <StyledButton
    background={background}
    foreground={foreground}
    borderRadius={borderRadius}
    onClick={onClick}
  >
    {children}
  </StyledButton>
)

Button.defaultProps = {
  borderRadius: "30px",
  onClick: () => {},
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
  foreground: PropTypes.string.isRequired,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
