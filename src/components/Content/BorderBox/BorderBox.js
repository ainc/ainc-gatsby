import React from "react"
import styled from "styled-components"
import {
  Container,
  Row
} from "react-bootstrap"
import Title from "../../UI/Title/Title"

const Bracket = styled.span`
  width: 60%;
  height: 250px;
  background: white;
  position: relative;
  margin: 20px;
  border-right: 4px solid #B9B2C0;
  border-left: 4px solid #B9B2C0;
  text-align: center;
`

const LeftSpan = styled.span`
  &:before {
    content: '';
    width: 30%;
    height: 4px;
    background: green;
    position: absolute;
    top: 0;
    left: 0;
  }  
  &:after {
    content: '';
    width: 30%;
    height: 4px;
    background: green;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

const RightSpan = styled.span`
  &:before {
    content: '';
    width: 30%;
    height: 4px;
    background: green;
    position: absolute;
    top: 0;
    right: 0;
  }
  &:after {
    content: '';
    width: 30%;
    height: 4px;
    background: green;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`


const BorderBox = (props) => {
  return (
    <Container>
      <Row>
        <Bracket>
          <LeftSpan />
          <RightSpan />
          <Title>Test</Title>
        </Bracket>
      </Row>
    </Container>
  )
}

export default BorderBox