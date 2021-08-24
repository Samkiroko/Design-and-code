import { themes } from "./ColorStyles"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${themes.light.backgroundColor};
  }
`
