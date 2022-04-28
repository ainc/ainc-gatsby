import React from "react";
import ModalCustom from "../../../Modal/ModalCustom";
import FellowshipForm from "../FellowshipForm/FellowshipForm";

const FellowshipModal = ({ lgShow, hide }) => {
  return (
    <ModalCustom lgShow={lgShow} hide={hide}>
      <FellowshipForm />
    </ModalCustom>
  );
};

export default FellowshipModal;
