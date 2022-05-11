import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Profile from '../Profile/Profile'

const ProfileGrid = ({ userNodes }) => {
  return (
    <Container>
      <Row>
        {userNodes.map((node) => {
          return (
            <Col xs={3} key={node.id}>
              <Profile 
                name={node.title}
                image={node.relationships.field_picture.localFile.childImageSharp.gatsbyImageData}
                linkedin={node.field_linkedin_link.uri}
                github={node.field_github.uri}
                website={node.field_website.uri}
                position={node.field_position}
              />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default ProfileGrid
