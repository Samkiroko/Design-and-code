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
  border-radius: 20px;

const Title = styled.p``

const Subtitle = styled.p``
