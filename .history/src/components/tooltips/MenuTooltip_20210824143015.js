import React, { useState } from "react"

const MenuTooltip = () => {
  const { isOpen, setIsOpen } = useState(false)
  return <div onClick={() => setIsOpen(true)}>{isOpen ? "Open" : "Closed"}</div>
}

export default MenuTooltip
