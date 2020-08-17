import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const cssContainer = ({ theme, align, direction, marginBottom, marginTop }) => `
  display: flex;
  ${align === ContainerAlign.CENTER ? "align-items: center;" : ""}
  ${direction === ContainerDirection.VERTICAL ? "flex-direction: column;" : ""}

  @media screen and (max-width: ${theme.breakpoint.tablet.media}px) {
    margin: calc(${theme.spacing.xxlarge} + ${theme.size.large}
      + ${marginTop}) 0 ${marginBottom} 0;
    width: ${theme.breakpoint.mobile.width}px;
  }

  @media screen and (min-width: ${theme.breakpoint.tablet.media}px) {
    margin: calc(${theme.spacing.xxlarge} + ${theme.size.xxsmall}
      + ${marginTop}) 0 ${marginBottom} 0;
    width: ${theme.breakpoint.tablet.width}px;
  }

  @media screen and (min-width: ${theme.breakpoint.laptop.media}px) {
    margin: calc(${theme.spacing.xxlarge} + ${theme.size.xxxsmall}
      + ${marginTop}) 0 ${marginBottom} 0;
    width: ${theme.breakpoint.laptop.width}px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop.media}px) {
    width: ${theme.breakpoint.desktop.width}px;
  }
`

const StyledContainer = styled.div`
  ${props => cssContainer(props)}
`

const Container = ({ children, align, direction, marginBottom, marginTop }) => (
  <StyledWrapper>
    <StyledContainer
      align={align}
      direction={direction}
      marginBottom={marginBottom}
      marginTop={marginTop}
    >
      {children}
    </StyledContainer>
  </StyledWrapper>
)

export const ContainerAlign = {
  START: "flex-start",
  CENTER: "center",
}

export const ContainerDirection = {
  HORIZONTAL: "row",
  VERTICAL: "column",
}

Container.defaultProps = {
  align: ContainerAlign.START,
  direction: ContainerDirection.VERTICAL,
  marginBottom: "0rem",
  marginTop: "0rem",
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(Object.values(ContainerAlign)),
  direction: PropTypes.oneOf(Object.values(ContainerDirection)),
  marginBottom: PropTypes.string,
  marginTop: PropTypes.string,
}

export default Container
