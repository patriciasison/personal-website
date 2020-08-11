import React from "react"
import styled from "styled-components"

const cssContainer = theme => `
  background: none;
  display: flex;
  margin-top: calc(${theme.spacing.xxlarge} + ${theme.size.small};
  width: ${theme.bodyWidth.desktop};
`

const StyledContainer = styled.div`
  ${({ theme }) => cssContainer(theme)}
`

const Container = () => <StyledContainer />

export default Container
