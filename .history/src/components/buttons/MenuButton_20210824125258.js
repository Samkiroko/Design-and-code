import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const MenuButton = () => {
  return (
    <Link to={item.link} key={index}>
      <MenuItem title={item.title}>
        <img src={item.icon} alt={item.title} />
        {item.title}
      </MenuItem>
    </Link>
  )
}

export default MenuButton
