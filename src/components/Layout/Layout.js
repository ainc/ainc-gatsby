import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import { Container, Row } from 'react-bootstrap'
import Header from '../Header/Header'

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
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <Header />
        
      {children}
      
    </div>
  )
}

export default Layout