import React from "react"
import styled from "styled-components"
import {
  Container,
  Row
} from "react-bootstrap"

const Header = styled.h2`
  border:3px solid;
  height:300px;
  position:relative;

  &:before {
    content:'Header';
    position:absolute;
    top:-10px;
    left:50px;
    background:#fff;
    padding:0 20px;
  }
`

const BorderBox = (props) => {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
    </Container>
  )
}

export default BorderBox