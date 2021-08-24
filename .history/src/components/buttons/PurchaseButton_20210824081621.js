import React from "react"
import styled from "styled-components"

const PurchaseButton = props => {
  return (
    <Wrapper>
      <Title>{props.title || "Get Pro Access"}</Title>
      <Subtitle>{props.subtitle || "$19 per month"}</Subtitle>
    </Wrapper>
  )
}

export default PurchaseButton

const Wrapper = styled.div``

const Title = styled.p``

const Subtitle = styled.p``
