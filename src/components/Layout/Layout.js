import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import { Container, Row } from 'react-bootstrap'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400&display=swap");
`

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (

    <div>
      <GlobalStyle />
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout