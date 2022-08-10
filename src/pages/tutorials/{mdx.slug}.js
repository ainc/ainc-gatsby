import * as React from "react";
import { graphql } from "gatsby";
import { Container, Col, Row } from "react-bootstrap";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/Layout/Layout";
import Title from '../../components/UI/Title/Title'
import * as styles from "./Tutorial.module.css";
import styled from "styled-components";

/* Tutorial Page Notes:
- in each new .mdx file, write "series: tutorials" in the frontmatter
- if you want to make a target blank link, you need to change it to an html tag <a>
- code blocks are formatted by the code-blocks.scss file (but we didn't copy everything from our old site)

Still Need to Do: 
- change CSS in this file so that all images are left aligned
- work on the Jekyll tutorial page so that it attaches the correct content (in the "includes" folder)
- get the assets file in unity-pong.mdx to work
- fix image widths in construct-block-game.mdx (they are individually sized)
- fix the query so that it only selects the tutorial pages (I tried to do this by filtering frontmatter "series: tutorials")
- fix the blog's query so that it only selects blog pages
*/

const MarkdownWrapper = styled.div`
  p,
  li,
  {
    font-size: 15px;
    margin-bottom: -1px;
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
  h1 {
    font-size: 62px;
    font-weight: 400;
  }
  h2 {
    font-size: 38px;
    margin-top: 15px;
    font-weight: 400;
  }
  h3 {
    margin-top: 15px;
    font-weight: 700;
    line-height: 2.5rem;
  }
`;


const TutorialPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Container className="mt-5">
        <Row>
          <Col className={styles.mdx} xl={{ span: 11, offset: .5 }}>
            <Title className="text-center">{data.mdx.frontmatter.title.toUpperCase()}</Title>
          </Col> 
          <Col className={styles.mdx} xl={{ span: 11, offset: .5 }}>
            <MarkdownWrapper>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </MarkdownWrapper>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

// This query selects all MDX files instead of just tutorial pages. It also doesn't show the animal-website page
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}, frontmatter: {series: {eq: "tutorials"}}) {
      frontmatter {
        title
        layout
      }
      body
    }
  }
`;

export default TutorialPost;
  