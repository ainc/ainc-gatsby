import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout/Layout'
// import Profile from '../../components/Profile/Profile'
import FilterButtons from '../../components/FilterButtons/FilterButtons'
import ProfileGrid from '../../components/ProfileGrid/ProfileGrid'
import { Container, Row, Col } from 'react-bootstrap'

const AlumniPage = ({ data }) => {

  const cohortNames = data.allTaxonomyTermBootcampCohort.nodes.map(node => node.name)
  const sortedCohorts = cohortNames.sort(function(a, b) {
    const seasons = ["Spring", "Summer", "Fall", "Winter"]
    
    const aSeason = seasons.find(season => season === a.split(" ")[0])
    const bSeason = seasons.find(season => season === b.split(" ")[0])
    const aYear = parseInt(a.split(" ")[1])
    const bYear = parseInt(b.split(" ")[1])

    if (aYear > bYear) {
      return -1
    } else if (aYear < bYear) {
      return 1
    } else {
      if (aSeason < bSeason) {
        return -1
      } else if (aSeason > bSeason) {
        return 1
      } else {
        return 0
      }
    }
  })
  const formattedCohorts = Array.from(sortedCohorts, cohort => cohort.slice(0, cohort.length - 5) + " '" + cohort.slice(cohort.length - 2))
  const cohortFilters = Array.from(sortedCohorts, (cohort, index) => {return {"display": formattedCohorts[index], "filter": cohort}})

  const [alumniNodes, setAlumniNodes] = useState(data.allNodeBootcampAlumni.nodes)

  return (
    <Layout pageTitle="Awesome Inc U Bootcamp Alumni">
      <Container>
        <Row>
          <FilterButtons
            data = {data.allNodeBootcampAlumni.nodes}
            filterAttribute = 'relationships.field_cohort.name'
            setData = {setAlumniNodes}
            filters = {cohortFilters}
          />
        </Row>
        <Row>
          <ProfileGrid userNodes={alumniNodes} />
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allNodeBootcampAlumni {
    nodes {
      title
      id
      field_linkedin_link {
        uri
      }
      field_github {
        uri
      }
      field_position
      field_website {
        uri
      }
      relationships {
        field_cohort {
          name
        }
        field_picture {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
  allTaxonomyTermBootcampCohort {
    nodes {
      name
    }
  }
}
`

export default AlumniPage