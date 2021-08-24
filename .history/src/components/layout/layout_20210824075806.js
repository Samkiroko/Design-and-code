import React from "react"
import { GlobalStyle } from "../styles/GlobalStyle"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  )
}

export default Layout
