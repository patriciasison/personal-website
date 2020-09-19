import React from "react"
import PropTypes from "prop-types"
import { Wave } from "react-css-spinners"
import styled from "styled-components"
import theme from "../bits/theme"
import { Viewport } from "../providers"

const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
  max-height: ${theme.breakpoint[Viewport.MOBILE].maxHeight}px;
  min-height: ${theme.breakpoint[Viewport.MOBILE].minHeight}px;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoint[Viewport.TABLET].media}px) {
    max-height: ${theme.breakpoint[Viewport.TABLET].maxHeight}px;
    min-height: ${theme.breakpoint[Viewport.TABLET].minHeight}px;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.LAPTOP].media}px) {
    max-height: ${theme.breakpoint[Viewport.LAPTOP].maxHeight}px;
    min-height: ${theme.breakpoint[Viewport.LAPTOP].minHeight}px;
  }

  @media screen and (min-width: ${theme.breakpoint[Viewport.DESKTOP].media}px) {
    max-height: ${theme.breakpoint[Viewport.DESKTOP].maxHeight}px;
    min-height: ${theme.breakpoint[Viewport.DESKTOP].minHeight}px;
  }
`

const Loading = ({ color }) => {
  return (
    <MainContainer>
      <Wave color={color} />
    </MainContainer>
  )
}

Loading.propTypes = {
  color: PropTypes.string.isRequired,
}

export default Loading
