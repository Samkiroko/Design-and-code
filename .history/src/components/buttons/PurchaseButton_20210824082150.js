import React from "react"
import styled from "styled-components"

const PurchaseButton = props => {
  const { title, subtitle } = props
  return (
    <Wrapper>
      <Title>{title || "Get Pro Access"}</Title>
      <Subtitle>{subtitle || "$19 per month"}</Subtitle>
    </Wrapper>
  )
}

export default PurchaseButton

const Wrapper = styled.div`
  width: 280px;
  height: 77px;

  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2);
  backdrop-filter: blur(30px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
`

const Title = styled.p``

const Subtitle = styled.p``
