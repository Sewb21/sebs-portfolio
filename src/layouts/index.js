import React from "react"
import PropTypes from "prop-types"

// Styles //
import styled, { ThemeProvider } from "styled-components"
import theme from "styles/theme"
import GlobalStyle from "styles/global"

const Layout = ({ children, location }) => (
  <ThemeProvider theme={theme}>
    <>
      {children}
      <GlobalStyle />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
