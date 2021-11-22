import * as React from 'react';
import { Button } from "react-bootstrap"
import { BtnBrand } from "./BrandButton.module.scss"

class BrandButton extends React.Component {

  constructor(props) {
    super(props)
    this.className = this.className + props.className
  }

  render() { 
    return <Button className={`${BtnBrand}` + this.props.className}>{this.props.children}</Button>
  }
}
 
export default BrandButton;
