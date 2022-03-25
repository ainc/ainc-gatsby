import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import Profile from "../../components/Profile/Profile";
import { Container, Row } from "react-bootstrap";

const AlumniPage = ({ data }) => {
  return (
    <Layout pageTitle="Awesome Inc U Bootcamp Alumni">
      <Container>
        <Row>
          {data.allNodeBootcampAlumni.nodes.map((node) => (
            <div className="col-3" key={node.id}>
              <Profile
                name={node.title}
                image={node.relationships.field_picture.localFile.childImageSharp.gatsbyImageData}
                linkedin={node.field_linkedin_link.uri}
                github={node.field_github.uri}
                website={node.field_website.uri}
                position={node.field_position}
              ></Profile>
            </div>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

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
  }
`;

export default AlumniPage;
