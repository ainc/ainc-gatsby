import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from './Banner.module.scss'

const Banner = () => {
  
  const data = useStaticQuery(graphql`
    query {
      nodeBanner {
        field_banner_text {
          processed
        }
      }
    }  
  `)
  
  return (
    <div
      className={`alert-danger ${styles.banner}`}
      dangerouslySetInnerHTML={{__html: data.nodeBanner.field_banner_text.processed}}
    />
  )

}

export default Banner