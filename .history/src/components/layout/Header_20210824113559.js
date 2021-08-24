import React from "react"

const menuData = [
  { title: "Courses", icon: "/images/icons/courses.svg", link: "/courses" },
  "Tutorials",
  "Livestreams",
]

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
