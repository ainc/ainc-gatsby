import React, { useState } from "react";
import ModalCustom from "../../../Modal/ModalCustom";
import ProgramForm from "../ProgramForm/ProgramForm";

const ProgramModal = ({ lgShow, hide }) => {
  return (
    <ModalCustom lgShow={lgShow} hide={hide}>
      <ProgramForm />
    </ModalCustom>
  );
};

export default ProgramModal;
