import React, { useState } from "react";
import ModalCustom from "../../Modal/ModalCustom";
import * as styles from "../Forms.module.css";
import { Form, Button } from "react-bootstrap";

const ProgramModal = ({ lgShow, hide }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [userInformation, setUserInformation] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    return setUserInformation({
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
  };

  return (
    <ModalCustom lgShow={lgShow} hide={hide}>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Label className="fs-6 fw-normal">Bootcamp Program Guide</Form.Label>
        <Form.Group className={`mt-2 ${styles.formGroup}`} controlId="FormFirstName">
          <Form.Control
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="First name"
          ></Form.Control>
        </Form.Group>
        <Form.Group className={`mt-3 ${styles.formGroup}`} controlId="FormLastName">
          <Form.Control
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
          ></Form.Control>
        </Form.Group>
        <Form.Group className={`mt-3 mb-0 ${styles.formGroup}`} controlId="FormEmail">
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          ></Form.Control>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Form.Text className={styles.formText}>No spam. Just Oreos</Form.Text>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Button className={styles.formBtn} type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </ModalCustom>
  );
};

export default ProgramModal;
