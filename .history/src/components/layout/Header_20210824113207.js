import React from "react"

const menuData = ["Courses", "Tutorials", "Livestreams"]

const Header = () => {
  return (
    <>
      {menuData.map(item => (
        <p key={item}>{item}</p>
      ))}
    </>
  )
}

export default Header
