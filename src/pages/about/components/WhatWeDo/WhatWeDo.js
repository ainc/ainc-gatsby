import React from "react";
import { Button } from "react-bootstrap";
import * as styles from "./whatWeDo.module.css";

const WhatWeDo = (props) => {
  return (
    <div className={`text-center ${styles.border}`}>
      <h4 className={`text-center align-items-end ${styles.subHeading}`}>{props.subHeading}</h4>
      <p className={`${styles.content}`}>{props.content}</p>
      {/* <div className="d-flex justify-content-center">
        <Button className={props.btnText.length > 10 ? styles.btnLongText : styles.btn}>
          {props.btnText}
        </Button>
      </div> */}
      <div className="d-flex justify-content-center">
        <div className={styles.absolute}>
          <Button className={`d-flex justify-content-center ${styles.btn}`}>{props.btnText}</Button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
