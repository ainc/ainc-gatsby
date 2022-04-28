import React, { useEffect, useState } from "react";
import ModalCustom from "../../../Modal/ModalCustom";
import PricingForm from "../PricingForm/PricingForm";

const PricingModal = ({ lgShow, hide }) => {
  return (
    <ModalCustom lgShow={lgShow} hide={hide} backdrop="static">
      <PricingForm modal />
    </ModalCustom>
  );
};

export default PricingModal;
