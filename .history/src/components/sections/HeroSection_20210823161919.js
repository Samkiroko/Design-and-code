import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeroSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <img src="/images/logos/angle-logo.svg" alt="logo" />
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <Link to="/page-2/">Go to page 2</Link> <br />
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`
const TextWrapper = styled.div`
  max-width: 360px;
`
