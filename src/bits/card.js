import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const cssCard = ({
  background,
  isClickable,
  padding,
  size,
  marginBottom,
  marginRight,
}) => `
  align-items: center;
  background-color: ${background};
  display: flex;
  flex-direction: column;
  height: ${size}px;
  justify-content: space-between;
  margin: 0 ${marginRight} ${marginBottom} 0;
  padding: ${padding};
  width: ${size}px;

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
  isClickable,
  padding,
  size,
  marginBottom,
  marginRight,
  onClick,
}) => (
  <StyledCard
    background={background}
    isClickable={isClickable}
    padding={padding}
    size={size}
    marginBottom={marginBottom}
    marginRight={marginRight}
    onClick={onClick}
  >
    {children}
  </StyledCard>
)

Card.defaultProps = {
  isClickable: false,
  padding: "0",
  marginBottom: "0",
  marginRight: "0",
  onClick: () => {},
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
  isClickable: PropTypes.bool,
  padding: PropTypes.string,
  size: PropTypes.number.isRequired,
  marginBottom: PropTypes.string,
  marginRight: PropTypes.string,
  onClick: PropTypes.func,
}

export default Card
