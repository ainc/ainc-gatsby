import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import * as styles from "../../Forms.module.css";

const PricingForm = ({ modal }) => {
  // insert | modal | as a prop when calling this form. This will set label styles. Labels have different styles on modal than they do on webpage.

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [phone, setPhone] = useState();
  const [companyName, setCompanyName] = useState();
  const [companyWeb, setCompanyWeb] = useState();
  const [years, setYears] = useState();
  const [service, setService] = useState({
    dayPass: false,
    fullTime: false,
    virtual: false,
    private: false,
  });
  const [companyCount, setCompanyCount] = useState();
  const [awesomeSpace, setAwesomeSpace] = useState();
  const [occupy, setOccupy] = useState({
    oneThreeMonths: false,
    threeSixMonths: false,
    sixTwelveMonths: false,
    oneYearPlus: false,
  });
  const [goals, setGoals] = useState();

  const [hearAbout, setHearAbout] = useState({
    newsletter: false,
    mouth: false,
    sign: false,
    socialMedia: false,
    google: false,
    schoolEmail: false,
    eventbrite: false,
    other: false,
  });
  const [otherValue, setOtherValue] = useState("");
  const [userInfo, setUserInfo] = useState();

  const handleCheckboxService = (target, e) => {
    let interestType = target;
    switch (interestType) {
      case "dayPass":
        setService({ dayPass: e.target.checked ? true : false });
        break;
      case "fullTime":
        setService({ fullTime: e.target.checked ? true : false });
        break;
      case "virtual":
        setService({ virtual: e.target.checked ? true : false });
        break;
      case "private":
        setService({ private: e.target.checked ? true : false });
        break;
    }
  };

  const handleCheckboxOccupy = (target, e) => {
    let interestType = target;
    switch (interestType) {
      case "oneThree":
        setOccupy({ oneThreeMonths: e.target.checked ? true : false });
        break;
      case "threeSix":
        setOccupy({ threeSixMonths: e.target.checked ? true : false });
        break;
      case "sixTwelve":
        setOccupy({ sixTwelveMonths: e.target.checked ? true : false });
        break;
      case "oneYear":
        setOccupy({ oneYearPlus: e.target.checked ? true : false });
        break;
    }
  };

  const handleCheckboxHearAbout = (target, e) => {
    let interestType = target;
    switch (interestType) {
      case "newsletter":
        setHearAbout({ newsletter: e.target.checked ? true : false });
        break;
      case "mouth":
        setHearAbout({ mouth: e.target.checked ? true : false });
        break;
      case "sign":
        setHearAbout({ sign: e.target.checked ? true : false });
        break;
      case "socialMedia":
        setHearAbout({ socialMedia: e.target.checked ? true : false });
        break;
      case "google":
        setHearAbout({ google: e.target.checked ? true : false });
        break;
      case "schoolEmail":
        setHearAbout({ schoolEmail: e.target.checked ? true : false });
        break;
      case "eventbrite":
        setHearAbout({ eventbrite: e.target.checked ? true : false });
        break;
      // case "other":
      //   setHearAbout({ other: e.target.checked ? otherValue : false });
      //   break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    return setUserInfo({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      companyName: companyName,
      companyWeb: companyWeb,
      yearsInBusiness: years,
      service: service,
      companyHeadCount: companyCount,
      headCountInAwesomeSpace: awesomeSpace,
      occupancy: occupy,
      companyGoals: goals,
      hearAboutThrough: hearAbout,
    });
  };

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className={styles.formGroup} controlId="FormFirstName">
        <Form.Label className={modal ? styles.center : null}>First Name</Form.Label>
        {/* <Form.Label className={styles.center}>First Name</Form.Label> */}
        <Form.Control
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First Name"
        ></Form.Control>
      </Form.Group>

      <Form.Group className={styles.formGroup} controlId="FormLastName">
        <Form.Label className={modal ? styles.center : null}>Last Name</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        ></Form.Control>
      </Form.Group>

      <Form.Group className={styles.formGroup} controlId="FormEmail">
        <Form.Label className={modal ? styles.center : null}>Email Address</Form.Label>
        <Form.Control
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        ></Form.Control>
      </Form.Group>

      <Form.Group className={styles.formGroup} controlId="FormPhone">
        <Form.Label className={modal ? styles.center : null}>Phone</Form.Label>
        <Form.Control
          type="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(123) 456-7890"
        ></Form.Control>
      </Form.Group>

      <Form.Group className={styles.formGroup} controlId="FormCompanyWeb">
        <Form.Label className={modal ? styles.center : null}>
          Company Name (if applicable)
        </Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Name of Company"
        ></Form.Control>
      </Form.Group>

      <Form.Group className={styles.formGroup} controlId="FormCompanyWeb">
        <Form.Label className={modal ? styles.center : null}>
          Company Website (if applicable)
        </Form.Label>
        <Form.Control
          type="url"
          onChange={(e) => setCompanyWeb(e.target.value)}
          placeholder="Website URL"
        ></Form.Control>
      </Form.Group>

      <Form.Group className={styles.formGroup} controlId="FormExistence">
        <Form.Label className={modal ? styles.center : null}>
          How Long Has Your Business Existed?
        </Form.Label>
        <Form.Control
          type="number"
          onChange={(e) => setYears(e.target.value)}
          placeholder="# of years"
        ></Form.Control>
      </Form.Group>

      <Form.Group className={`mt-4 ${styles.formGroup}`} controlId="FormService">
        <Form.Label className={modal ? styles.center : null}>
          What service are you interested in at Awesome Inc?
        </Form.Label>
        <Form.Check
          onChange={(e) => handleCheckboxService("dayPass", e)}
          type="checkbox"
          label="Day Pass"
        />
        <Form.Check
          onChange={(e) => handleCheckboxService("fullTime", e)}
          type="checkbox"
          label="Full-Time Membership"
        />
        <Form.Check
          onChange={(e) => handleCheckboxService("virtual", e)}
          type="checkbox"
          label="Virtual Membership"
        />
        <Form.Check
          onChange={(e) => handleCheckboxService("private", e)}
          type="checkbox"
          label="Private Office Space"
        />
      </Form.Group>

      <Form.Group className={styles.formGroup} controlId="FormCompanyPeople">
        <Form.Label className={modal ? styles.center : null}>
          How many people are in your company?
        </Form.Label>
        <Form.Control
          type="number"
          onChange={(e) => setCompanyCount(e.target.value)}
          placeholder="# of People"
        ></Form.Control>
      </Form.Group>

      <Form.Group className={styles.formGroup} controlId="FormAwesomeSpace">
        <Form.Label className={modal ? styles.center : null}>
          How many people Will be using the Awesome space?
        </Form.Label>
        <Form.Control
          type="number"
          onChange={(e) => setAwesomeSpace(e.target.value)}
          placeholder="# of People"
        ></Form.Control>
      </Form.Group>

      <Form.Group className={`mt-4 ${styles.formGroup}`} controlId="FormOccupy">
        <Form.Label className={modal ? styles.center : null}>
          How long do you plan on occupying space at Awesome Inc (There is no requirement
          for more than one month)
        </Form.Label>
        <Form.Check
          onChange={(e) => handleCheckboxOccupy("oneThree", e)}
          type="radio"
          name="occupy"
          label="1-3 Months"
        />
        <Form.Check
          onChange={(e) => handleCheckboxOccupy("threeSix", e)}
          type="radio"
          name="occupy"
          label="3-6 Months"
        />
        <Form.Check
          onChange={(e) => handleCheckboxOccupy("sixTwelve", e)}
          type="radio"
          name="occupy"
          label="6-12 Months"
        />
        <Form.Check
          onChange={(e) => handleCheckboxOccupy("oneYear", e)}
          type="radio"
          name="occupy"
          label="1 year+"
        />
        <Form.Text className={modal ? `${styles.center} ${styles.formSubtext}` : null}>
          {/* <Form.Text className={`${styles.formSubtext} ${styles.center}`}> */}
          Choose which option is closest to your estimated time of occupancy.
        </Form.Text>
      </Form.Group>

      <Form.Group className={`mt-4 ${styles.formGroup}`} controlId="FormGoals">
        <Form.Label className={styles.center}>
          Please provide a brief bio of yourself and your business goals/objectives
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={(e) => setGoals(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group className={`mt-4 ${styles.formGroup}`} controlId="FormHearAbout">
        <Form.Label className={modal ? styles.center : null}>
          How did you hear about Awesome Inc?
        </Form.Label>
        <Form.Check
          onChange={(e) => handleCheckboxHearAbout("newsletter", e)}
          type="radio"
          name="hear"
          label="Awesome Inc Email Newsletter"
        />
        <Form.Check
          onChange={(e) => handleCheckboxHearAbout("mouth", e)}
          type="radio"
          name="hear"
          label="Word of mouth"
        />
        <Form.Check
          onChange={(e) => handleCheckboxHearAbout("sign", e)}
          type="radio"
          name="hear"
          label="Sign or flier"
        />
        <Form.Check
          onChange={(e) => handleCheckboxHearAbout("socialMedia", e)}
          type="radio"
          name="hear"
          label="social media"
        />
        <Form.Check
          onChange={(e) => handleCheckboxHearAbout("google", e)}
          type="radio"
          name="hear"
          label="Google Search"
        />
        <Form.Check
          onChange={(e) => handleCheckboxHearAbout("schoolEmail", e)}
          type="radio"
          name="hear"
          label="Email from school"
        />
        <Form.Check
          onChange={(e) => handleCheckboxHearAbout("eventbrite", e)}
          type="radio"
          name="hear"
          label="Eventbrite"
        />
        <div className="d-flex">
          <Form.Check
            onChange={(e) => handleCheckboxHearAbout("other", e)}
            type="radio"
            name="hear"
            label="other"
          />
          <Form.Control
            as="textarea"
            className="w-25 ms-3"
            onChange={(e) => setHearAbout({ other: e.target.value })}
            // setHearAbout({ other: e.target.checked ? otherValue : false });
          ></Form.Control>
        </div>
      </Form.Group>

      <div className={styles.center}>
        <Button className={styles.formBtn} type="submit">
          Send
        </Button>
      </div>
    </Form>
  );
};

export default PricingForm;
