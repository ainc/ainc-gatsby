import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Container, Row } from 'react-bootstrap'
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
      <header>{data.site.siteMetadata.title}</header>
      <Header />
        
      {children}
      
    </div>
  )
}

export default Layout