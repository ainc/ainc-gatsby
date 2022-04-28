import React from "react";
import ModalCustom from "../../../Modal/ModalCustom";
import SignUpForm from "../SignUpForm/SignUpForm";

const SignUpModal = ({ lgShow, hide }) => {
  return (
    <ModalCustom lgShow={lgShow} hide={hide}>
      <SignUpForm />
    </ModalCustom>
  );
};

export default SignUpModal;
