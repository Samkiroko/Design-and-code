import React, { useState } from "react"
import styled from "styled-components"

const MenuTooltip = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Wrapper isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      Button
    </Wrapper>
  )
}

export default MenuTooltip

const Wrapper = styled.div`
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  padding: 20px;
  position: absolute;
  top: 60px;
  right: 30px;
  opacity: ${props => (props.isOpen ? 1 : 0)};
`
