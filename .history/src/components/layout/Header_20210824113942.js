import React from "react"

const menuData = [
  { title: "Courses", icon: "/images/icons/courses.svg", link: "/courses" },
  {
    title: "Tutorials",
    icon: "/images/icons/tutorials.svg",
    link: "/tutorials",
  },
  { title: "Pricing", icon: "/images/icons/pricing.svg", link: "/pricing" },
]

const Header = () => {
  return (
    <>
      {menuData.map(item => (
        <img src={item.icon}  />
        <p>{item.title}</p>
      ))}
    </>
  )
}

export default Header
