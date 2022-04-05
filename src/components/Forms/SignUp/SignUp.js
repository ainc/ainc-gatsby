import React, { useEffect, useState } from "react";
import ModalCustom from "../../Modal/ModalCustom";
import { Container, Form, Button } from "react-bootstrap";
import * as styles from "../Forms.module.css";

const SignUp = ({ lgShow, hide }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [interest, setInterest] = useState({
    startups: false,
    corporate: false,
    coworking: false,
    adult: false,
    youth: false,
    otherAdult: false,
    software: false,
  });
  const [userInformation, setUserInformation] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    return setUserInformation({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      interest: interest,
    });
  };

  const handleCheckbox = (target, e) => {
    let interestType = target;
    switch (interestType) {
      case "startups":
        setInterest({ ...interest, startups: e.target.checked ? true : false });
        break;
      case "corporate":
        setInterest({ ...interest, corporate: e.target.checked ? true : false });
        break;
      case "coworking":
        setInterest({ ...interest, coworking: e.target.checked ? true : false });
        break;
      case "adult":
        setInterest({ ...interest, adult: e.target.checked ? true : false });
        break;
      case "youth":
        setInterest({ ...interest, youth: e.target.checked ? true : false });
        break;
      case "otherAdult":
        setInterest({ ...interest, otherAdult: e.target.checked ? true : false });
        break;
      case "software":
        setInterest({ ...interest, software: e.target.checked ? true : false });
        break;
    }
  };

  useEffect(() => {
    console.log(userInformation);
  }, [userInformation]);

  return (
    <ModalCustom lgShow={lgShow} hide={hide}>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className={styles.formGroup} controlId="FormFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="John"
          ></Form.Control>
        </Form.Group>
        <Form.Group className={styles.formGroup} controlId="FormLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Hancock"
          ></Form.Control>
        </Form.Group>
        <Form.Group className={styles.formGroup} controlId="FormEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@123.com"
          ></Form.Control>
        </Form.Group>
        <Form.Group className={styles.formGroup} controlId="FormPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(123) 456-7890"
          ></Form.Control>
        </Form.Group>
        <Form.Group className={`mt-4 ${styles.formGroup}`} controlId="FormInterest">
          <Form.Label>I'm interested in...</Form.Label>
          <Form.Check
            onChange={(e) => handleCheckbox("startups", e)}
            type="checkbox"
            label="Startups & Entrepreneurship"
          />
          <Form.Check
            onChange={(e) => handleCheckbox("corporate", e)}
            type="checkbox"
            label="I'm in the corporate world and want to be more innovative"
          />
          <Form.Check
            type="checkbox"
            onChange={(e) => handleCheckbox("coworking", e)}
            label="Coworking"
          />
          <Form.Check
            type="checkbox"
            onChange={(e) => handleCheckbox("adult", e)}
            label="Adult Coding"
          />
          <Form.Check
            type="checkbox"
            onChange={(e) => handleCheckbox("youth", e)}
            label="Youth Coding"
          />
          <Form.Check
            type="checkbox"
            onChange={(e) => handleCheckbox("otherAdult", e)}
            label="Other Adult Classes"
          />
          <Form.Check
            type="checkbox"
            onChange={(e) => handleCheckbox("software", e)}
            label="Custom software needs"
          />
        </Form.Group>
        <Button className={`mt-1 ${styles.formBtn}`} type="submit">
          Submit
        </Button>
      </Form>
    </ModalCustom>
  );
};

export default SignUp;
