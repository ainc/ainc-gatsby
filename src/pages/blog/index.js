import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import { Card, Row, Col, Container, Image } from "react-bootstrap";
import Mail from "../../images/awesome-inc-space-banner.jpeg";
import BlkImg from "../../images/black-img.jpeg";
import YellowImg from "../../images/yellow-img.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./BlogPage.module.css";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";


const BlogPage = ({ data }) => {

  // const images = (data.allMdx.nodes.map())

  // const authorImg = getImage()

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
              <Col xl={4} md={6} sm={12} className={styles.center}>
                <Card style={{ width: "22.5rem" }} className={styles.card}>
                  <Card.Body>
                    <figure>
                      <div className={styles.containerBlogImg}>
                        <StaticImage alt="test" image={node.frontmatter.header_img} className={styles.cardImg} />
                        <div className={styles.shadowEffect}></div>
                      </div>
                      <div className={styles.authorSection}>
                        <div className={styles.author}>
                          <Image src={Mail} className={styles.authorImg} alt="fff" />
                          <div className={styles.authorInfo}>
                            <Card.Title className={styles.authorName}>
                              {node.frontmatter.author}
                            </Card.Title>
                            <Card.Subtitle className={styles.date}>
                              {node.frontmatter.date}
                            </Card.Subtitle>
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Card.Title className={styles.blogTitle}>
                      <Link className={styles.blogTitleLink} to={`/blog/${node.slug}`}>
                        {/* {node.frontmatter.title} */}
                        {node.frontmatter.author_img}
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

export default BlogPage;
