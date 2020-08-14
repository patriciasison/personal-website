import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const cssContainer = ({ theme, direction }) => `
  display: flex;
  ${direction === ContainerDirection.VERTICAL && `flex-direction: column;`}

  @media screen and (max-width: ${theme.breakpoint.tablet.media}px) {
    margin-top: calc(${theme.spacing.xxlarge} + ${theme.size.large});
    width: ${theme.breakpoint.mobile.width}px;
  }

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    margin-top: calc(${theme.spacing.xxlarge} + ${theme.size.xxsmall});
    width: ${theme.breakpoint.tablet.width}px;
  }

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    margin-top: calc(${theme.spacing.xxlarge} + ${theme.size.xxxsmall});
    width: ${theme.breakpoint.laptop.width}px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop.media}px) {
    width: ${theme.breakpoint.desktop.width}px;
  }
`

const StyledContainer = styled.div`
  ${props => cssContainer(props)}
`

const Container = ({ children, direction }) => (
  <StyledWrapper>
    <StyledContainer direction={direction}>{children}</StyledContainer>
  </StyledWrapper>
)

export const ContainerDirection = {
  HORIZONTAL: "row",
  VERTICAL: "column",
}

Container.defaultProps = {
  direction: ContainerDirection.HORIZONTAL,
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(Object.values(ContainerDirection)),
}

export default Container
