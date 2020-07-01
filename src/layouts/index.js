/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

// Styles //
import styled, { ThemeProvider } from "styled-components"
import theme from "styles/theme"
import GlobalStyle from "styles/global"

// Contexts //
import { SnackbarProvider } from "contexts/Snackbar"

// Components //
import Footer from "components/Footer"
import Header from "components/Header"
import NavHeader from "components/NavHeader"

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0px;
  margin-bottom: 50px;
  z-index: 1;
`

const Layout = ({ children, location }) => (
  <ThemeProvider theme={theme}>
    <SnackbarProvider>
      <HeaderWrapper>
        <Header />
        <NavHeader {...{ location }} />
      </HeaderWrapper>
      {children}
      <Footer />
      <GlobalStyle />
    </SnackbarProvider>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
