import * as React from "react";
import { graphql } from "gatsby";
import { Container, Col, Row } from "react-bootstrap";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/Layout/Layout";
import AuthorDetail from "./components/AuthorDetail";
import * as authorStyles from "./BlogPage.module.css";
import * as styles from "./BlogPost.module.css";
import AddToAnyLinks from "./components/AddToAnyLinks";
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const MarkdownWrapper = styled.div`
  p,
  li {
    font-size: 15px;
    margin-bottom: 25px;
  }
  a {
    text-decoration: none;
    color: #c12029;
  }
  a:hover {
    color: #f31823;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid rgb(177, 177, 177);
  }
  h3 {
    font-weight: 700;
    line-height: 2.5rem;
  }
  blockquote {
    text-align: left;
    overflow: hidden;
    width: 100%;
    font-size: 15px;
    line-height: 22.5px;
    font-size: 1.5rem;
    line-height: 2.25rem;
    color: #323333;
    font-weight: 400;
    margin: 2rem 0;
    display: block;
    padding: 2rem;
    font-style: italic;
    position: relative;
    border-left: 0;
    border-radius: 6px;
    border: 1px solid rgba(33, 39, 57, 0.1);
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
  }
  blockquote p {
    font-size: 17px;
    line-height: 25.5px;
  }

  blockquote:before {
    content: "\\201c";
    font-family: "Font Awesome 5 Free";
    position: absolute;
    left: -10px;
    top: -15px;
    line-height: 76.5px;
    font-size: 8rem;
    line-height: 7.65rem;
    color: #c12029;
    opacity: 0.5;
  }
  blockquote:after {
    font-family: FontAwesome;
    content: "\\201D";
    right: 14px;
    position: absolute;
    bottom: -50px;
    line-height: 76.5px;
    font-size: 8rem;
    line-height: 7.65rem;
    color: #c12029;
    opacity: 0.5;
  }
`;

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Container className="mt-5">
        <Row>
          <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }}>
            <Col>
              <h1 className={styles.blogTitle}>{data.mdx.frontmatter.title}</h1>
              <AuthorDetail
                author={data.mdx.frontmatter.author ? data.mdx.frontmatter.author : "Awesome Inc"}
                date={data.mdx.frontmatter.date}
                imgClass={authorStyles.authorImgBlack}
                subClass={authorStyles.dateBlack}
              />
              <AddToAnyLinks />
            </Col>
            <Col className={styles.mdx}>
              <MarkdownWrapper>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </MarkdownWrapper>
            </Col>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMM D, YYYY")
        author
      }
      body
    }
  }
`;

export default BlogPost;
