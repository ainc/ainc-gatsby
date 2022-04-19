import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import { Card, Row, Col, Container, Image } from "react-bootstrap";
import Mail from "../../images/ainc-space.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./BlogPage.module.css";
// import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import AuthorDetail from "./components/AuthorDetail";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <Container>
        <Row>
          <Col>
            <h1 className={styles.blogH1}>Blog</h1>
          </Col>
        </Row>
        <Col lg={{ span: 10, offset: 1 }}>
          <Row>
            {data.allMdx.nodes.map((node) => (
              <Col xl={4} md={6} sm={6} xs={12} className={styles.center}>
                <Card style={{ width: "22.5rem" }} className={styles.card}>
                  <Card.Body>
                    <figure>
                      <div className={styles.containerBlogImg}>
                        <Image alt="test" src={Mail} className={styles.cardImg} />
                        <div className={styles.shadowEffect}></div>
                      </div>
                      <div className={styles.authorSection}>
                        <AuthorDetail
                          date={node.frontmatter.date}
                          author={node.frontmatter.author ? node.frontmatter.author : "Awesome Inc"}
                          imgClass={styles.authorImg}
                          subClass={styles.date}
                        />
                      </div>
                    </figure>
                    <Card.Title className={styles.blogTitle}>
                      <Link className={styles.blogTitleLink} to={`/blog/${node.slug}`}>
                        {node.frontmatter.title}
                        {/* {node.frontmatter.author_img} */}
                      </Link>
                    </Card.Title>
                    <p className={styles.blogDescription}>{node.frontmatter.description}</p>

                    <Link className={styles.blogLink} to={`/blog/${node.slug}`}>
                      <span>Read More</span>
                      <FontAwesomeIcon className={styles.blogArrow} icon={faArrowRight} />
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMM DD, YYYY")
          title
          author_img
          author
          header_img
          description
        }
        id
        slug
      }
    }
  }
`;

// query MyQuery {
//   allNodeBlogPosts {
//     nodes {
//       title
//       created(formatString: "MMM  DD, YYYY")
//       relationships {
//         field_author {
//           display_name
//         }
//         field_preview_image {
//           localFile {
//             childImageSharp {
//               gatsbyImageData(layout: CONSTRAINED)
//             }
//           }
//         }
//       }
//       body {
//         value
//       }
//     }
//   }
// }

export default BlogPage;
