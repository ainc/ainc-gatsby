import * as React from 'react';
import { Button } from "react-bootstrap"
import { BtnBrand } from "./BrandButton.module.scss"
import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: "open sans";
  font-weight: 600;
  letter-spacing: 3px;
  background: #c12029;
  padding: 0.8rem 2.4rem;
  color: #fff;
  overflow: hidden;
  display: inline-block;
  text-transform: uppercase;
  @include font-size(12);
  border: 2px solid #c12029;
  border-radius: 4px;
  position: relative;
  &.disabled,
  &[disabled],
  fieldset[disabled] & {
    cursor: not-allowed;
  }
  &:hover {
    color: #222;
  }
`

const BrandButton = (props) => {
    return <StyledButton {...props}/>
}
 
export default BrandButton;
