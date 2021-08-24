import React, { useState } from "react"

const MenuTooltip = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Wrapper onClick={() => setIsOpen(true)}>
      {isOpen ? "Open" : "Closed"}
    </Wrapper>
  )
}

export default MenuTooltip

const Wrapper = styled.div`
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
`
