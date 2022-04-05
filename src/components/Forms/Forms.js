import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import * as styles from "./Forms.module.css";
import SignUp from "./SignUp/SignUp";
import ScheduleTour from "./ScheduleTour/ScheduleTour";
import Pricing from "./Pricing/Pricing";
import Contact from "./Contact/Contact";
import Bootcamp from "./Bootcamp/Bootcamp";
import FellowshipModal from "./FellowshipModal/FellowshipModal";
import Internship from "./Internship/Internship";
import ProgramModal from "./ProgramModal/ProgramModal";

const Forms = ({ type, BtnText }) => {
  //the prop TYPE is just a reference to which form that needs to be displayed.
  //TYPE Options: SignUp - ScheduleTour - ProgramGuide - Pricing - Internship - Fellowship - Contact - Bootcamp

  const [signUpShow, setSignUpShow] = useState(false);
  const [scheduleTourShow, setScheduleTourShow] = useState(false);
  const [programGuideShow, setProgramGuideShow] = useState(false);
  const [pricingShow, setPricingShow] = useState(false);
  const [internshipShow, setInternshipShow] = useState(false);
  const [fellowshipShow, setFellowshipShow] = useState(false);
  const [contactShow, setContactShow] = useState(false);
  const [bootcampShow, setBootcampShow] = useState(false);

  const handleSignUpClose = () => setSignUpShow(false);
  const handleScheduleTourClose = () => setScheduleTourShow(false);
  const handleProgramGuideClose = () => setProgramGuideShow(false);
  const handlePricingClose = () => setPricingShow(false);
  const handleInternshipClose = () => setInternshipShow(false);
  const handleFellowshipClose = () => setFellowshipShow(false);
  const handleContactClose = () => setContactShow(false);
  const handleBootcampClose = () => setBootcampShow(false);

  const handleSignUpShow = () => setSignUpShow(true);
  const handleScheduleTourShow = () => setScheduleTourShow(true);
  const handleProgramGuideShow = () => setProgramGuideShow(true);
  const handlePricingShow = () => setPricingShow(true);
  const handleInternshipShow = () => setInternshipShow(true);
  const handleFellowshipShow = () => setFellowshipShow(true);
  const handleContactShow = () => setContactShow(true);
  const handleBootcampShow = () => setBootcampShow(true);

  const handleModalType = (type) => {
    let modalType = type;
    switch (modalType) {
      case "SignUp":
        handleSignUpShow();
        break;
      case "ScheduleTour":
        handleScheduleTourShow();
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
      case "Contact":
        handleContactShow();
        break;
      case "Bootcamp":
        handleBootcampShow();
        break;
      default:
        console.log("default");
        break;
    }
  };

  return (
    <div>
      <Button onClick={() => handleModalType(type)} className={styles.lgxBtn}>
        {BtnText}
      </Button>

      {/* Modal types to be displayed  */}
      {signUpShow ? <SignUp lgShow={signUpShow} hide={handleSignUpClose} /> : null}

      {scheduleTourShow ? (
        <ScheduleTour lgShow={scheduleTourShow} hide={handleScheduleTourClose} />
      ) : null}

      {programGuideShow ? (
        <ProgramModal lgShow={programGuideShow} hide={handleProgramGuideClose} />
      ) : null}

      {pricingShow ? <Pricing lgShow={pricingShow} hide={handlePricingClose} /> : null}

      {internshipShow ? <Internship lgShow={internshipShow} hide={handleInternshipClose} /> : null}

      {fellowshipShow ? (
        <FellowshipModal lgShow={fellowshipShow} hide={handleFellowshipClose} />
      ) : null}

      {contactShow ? <Contact lgShow={contactShow} hide={handleContactClose} /> : null}

      {bootcampShow ? <Bootcamp lgShow={bootcampShow} hide={handleBootcampClose} /> : null}
    </div>
  );
};

export default Forms;
