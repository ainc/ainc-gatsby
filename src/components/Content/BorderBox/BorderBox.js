import React, { Component } from "react"
import styled from "styled-components"
import {
  Container,
  Row
} from "react-bootstrap"
import Title from "../../UI/Title/Title"

export const borderColor = "white";

const Bracket = styled.span`
  width: 100%;
  height: 250px;
  background: transparent;
  position: relative;
  margin: 20px;
  border-right: 4px solid ${borderColor};
  border-left: 4px solid ${borderColor};
  text-align: center;
`

const LeftSpan = styled.span`
  &:before {
    content: '';
    width: 30%;
    height: 4px;
    background: ${borderColor};
    position: absolute;
    top: 0;
    left: 0;
  }  
  &:after {
    content: '';
    width: 30%;
    height: 4px;
    background: ${borderColor};
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
    background: ${borderColor};
    position: absolute;
    top: 0;
    right: 0;
  }
  &:after {
    content: '';
    width: 30%;
    height: 4px;
    background: ${borderColor};
    position: absolute;
    bottom: 0;
    right: 0;
  }
`

export const BorderBoxTitle = ({ children }) => <Title className={children.className}>{children}</Title>;
export const BorderBoxContent = ({ children }) => <p>{children}</p>;


class BorderBox extends Component {

  static Title = BorderBoxTitle;
  static Content = BorderBoxContent;

  render() {
    return (
      <Container>
        <Row>
          <Bracket>
            <LeftSpan />
            <RightSpan />
            {this.props.children}
          </Bracket>
        </Row>
      </Container>
    )
  }
}

export default BorderBox