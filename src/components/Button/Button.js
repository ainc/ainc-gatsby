import * as React from 'react';
import { Button as bsButton } from "react-bootstrap/Button"
import { BtnBrand } from "./Button.module.scss"

class Button extends React.Component {
  render() { 
    return <bsButton className={`${BtnBrand}`}>{this.props.children}</bsButton>
  }
}
 
export default Button;
