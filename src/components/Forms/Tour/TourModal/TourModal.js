import React from "react";
import ModalCustom from "../../../Modal/ModalCustom";
import TourForm from "../TourForm/TourForm";
const TourModal = ({ lgShow, hide }) => {
  return (
    <ModalCustom lgShow={lgShow} hide={hide}>
      <TourForm />
    </ModalCustom>
  );
};

export default TourModal;
