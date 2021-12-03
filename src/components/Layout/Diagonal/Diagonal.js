import React from "react"
import styled from 'styled-components';

const RotationDegree = 5;
// const MagicNumber = 0.09719;
const SkewPadding = 100 * MagicNumber;
const ClipPadding = 100 * MagicNumber;
const MagicNumber = Math.tan(RotationDegree) / 2;

const DiagonalDiv = styled.div`
  position: relative;
  padding: ${SkewPadding}vw 0;
  margin-top: -1px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(45deg, #654ea3, #eaafc8); 	
    transform: skewY(${RotationDegree}deg);
    transform-origin: 50% 0;
    backface-visibility: hidden;
  }
`

const ContentDiv = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  padding: 1.5em;
  position: relative;
  border: 2px dashed;
`
const Diagonal = (props) => {
  return (
    <DiagonalDiv>
      <ContentDiv>{props.children}</ContentDiv>
    </DiagonalDiv>
  )
}

export default Diagonal
