import React from "react";
import ModalCustom from "../../Modal/ModalCustom";
import * as styles from "./Fellowship.module.css";

const FellowshipModal = ({ lgShow, hide }) => {
  return (
    <ModalCustom lgShow={lgShow} hide={hide}>
      <h1>fellow</h1>
    </ModalCustom>
  );
};

export default FellowshipModal;
