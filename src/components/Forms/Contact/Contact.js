import React from "react";
import ModalCustom from "../../Modal/ModalCustom";
import * as styles from './Contact.module.css'

const Contact = ({ lgShow, hide }) => {
  return (
    <ModalCustom lgShow={lgShow} hide={hide}>
      <h1>contact</h1>
    </ModalCustom>
  );
};

export default Contact;