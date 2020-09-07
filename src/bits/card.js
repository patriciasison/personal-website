import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const cssCard = ({
  background,
  direction,
  height,
  padding,
  width,
  isClickable,
  marginBottom,
  marginRight,
}) => `
  align-items: center;
  background-color: ${background};
  display: flex;
  flex-direction: ${direction};
  height: ${height};
  justify-content: space-between;
  margin: 0 ${marginRight} ${marginBottom} 0;
  padding: ${padding};
  width: ${width};

  ${
    isClickable
      ? `
    cursor: pointer;
  
    &:hover {
      box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.1);
    }
  `
      : ""
  }
`

const StyledCard = styled.div`
  ${props => cssCard(props)}
`

const Card = ({
  children,
  background,
  direction,
  height,
  padding,
  width,
  isClickable,
  marginBottom,
  marginRight,
  onClick,
}) => (
  <StyledCard
    background={background}
    direction={direction}
    height={height}
    padding={padding}
    width={width}
    isClickable={isClickable}
    marginBottom={marginBottom}
    marginRight={marginRight}
    onClick={onClick}
  >
    {children}
  </StyledCard>
)

Card.defaultProps = {
  isClickable: false,
  direction: "column",
  height: "auto",
  padding: "0",
  width: "auto",
  marginBottom: "0",
  marginRight: "0",
  onClick: () => {},
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
  direction: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  isClickable: PropTypes.bool,
  marginBottom: PropTypes.string,
  marginRight: PropTypes.string,
  onClick: PropTypes.func,
}

export default Card
