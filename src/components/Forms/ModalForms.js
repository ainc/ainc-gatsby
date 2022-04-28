import React, { useState } from "react";
import { Button } from "react-bootstrap";
import * as styles from "./Forms.module.css";
import SignUpModal from "./SignUp/SignUpModal/SignUpModal";
import TourModal from "./Tour/TourModal/TourModal";
import PricingModal from "./Pricing/PricingModal/PricingModal";
import FellowshipModal from "./Fellowship/FellowshipModal/FellowshipModal";
import ProgramModal from "./ProgramGuide/ProgramModal/ProgramModal";
import InternshipModal from "./Internship/InternshipModal";

const ModalForms = ({ type, btnText, btnColor }) => {
  //the prop TYPE is just a reference to which form that needs to be displayed.
  //TYPE Options: SignUp - Tour - ProgramGuide - Pricing - Internship - Fellowship - Contact - Bootcamp

  const [signUpShow, setSignUpShow] = useState(false);
  const [tourShow, setTourShow] = useState(false);
  const [programGuideShow, setProgramGuideShow] = useState(false);
  const [pricingShow, setPricingShow] = useState(false);
  const [internshipShow, setInternshipShow] = useState(false);
  const [fellowshipShow, setFellowshipShow] = useState(false);

  const handleSignUpClose = () => setSignUpShow(false);
  const handleTourClose = () => setTourShow(false);
  const handleProgramGuideClose = () => setProgramGuideShow(false);
  const handlePricingClose = () => setPricingShow(false);
  const handleInternshipClose = () => setInternshipShow(false);
  const handleFellowshipClose = () => setFellowshipShow(false);

  const handleSignUpShow = () => setSignUpShow(true);
  const handleTourShow = () => setTourShow(true);
  const handleProgramGuideShow = () => setProgramGuideShow(true);
  const handlePricingShow = () => setPricingShow(true);
  const handleInternshipShow = () => setInternshipShow(true);
  const handleFellowshipShow = () => setFellowshipShow(true);

  const handleModalType = (type) => {
    let modalType = type;
    switch (modalType) {
      case "SignUp":
        handleSignUpShow();
        break;
      case "Tour":
        handleTourShow();
        break;
      case "ProgramGuide":
        handleProgramGuideShow();
        break;
      case "Pricing":
        handlePricingShow();
        break;
      case "Internship":
        handleInternshipShow();
        break;
      case "Fellowship":
        handleFellowshipShow();
        break;

      default:
        console.log("default");
        break;
    }
  };

  return (
    <div>
      <Button
        onClick={() => handleModalType(type)}
        className={btnColor ? btnColor : styles.formBtn}
      >
        {btnText}
      </Button>

      {/* Modal types to be displayed  */}
      {signUpShow ? (
        <SignUpModal lgShow={signUpShow} hide={handleSignUpClose} />
      ) : null}

      {tourShow ? <TourModal lgShow={tourShow} hide={handleTourClose} /> : null}

      {programGuideShow ? (
        <ProgramModal lgShow={programGuideShow} hide={handleProgramGuideClose} />
      ) : null}

      {pricingShow ? (
        <PricingModal lgShow={pricingShow} hide={handlePricingClose} />
      ) : null}

      {internshipShow ? (
        <InternshipModal lgShow={internshipShow} hide={handleInternshipClose} />
      ) : null}

      {fellowshipShow ? (
        <FellowshipModal lgShow={fellowshipShow} hide={handleFellowshipClose} />
      ) : null}
    </div>
  );
};

export default ModalForms;
