import React from "react";
import ModalCustom from "../../Modal/ModalCustom";
import * as styles from './Bootcamp.module.css'

const Bootcamp = ({ lgShow, hide }) => {
  return (
    <ModalCustom lgShow={lgShow} hide={hide}>
      <h1>bootcamp</h1>
    </ModalCustom>
  );
};

export default Bootcamp;