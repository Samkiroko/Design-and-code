import React from "react"
import styled from "styled-components"

const MockupAnimation = () => {
  return (
    <Wrapper>
      <div className="mockup1" />
      <div className="mockup2" />
      <div className="mockup3" />
      <div className="mockup4" />
      <div className="mockup5" />
    </Wrapper>
  )
}

export default MockupAnimation

const Wrapper = styled.div`
  position: relative;
  .mockup1 {
    position: absolute;
    width: 183px;
    height: 120px;
    left: 0px;
    top: 0px;

    background: radial-gradient(
      218.51% 281.09% at 100% 100%,
      rgba(253, 63, 51, 0.6) 0%,
      rgba(76, 0, 200, 0.6) 45.83%,
      rgba(76, 0, 200, 0.6) 100%
    );
    box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(21.8507px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 16px;
  }
`
