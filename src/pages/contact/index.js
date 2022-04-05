import React, { useEffect, useState } from "react";
import * as styles from "./contact.module.css";
import Layout from "../../components/Layout/Layout";
import { Form, Container, Button } from "react-bootstrap";

const Contact = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [help, setHelp] = useState();
  const [userInfo, setUserInfo] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({
      firstName: firstName,
      lastName: lastName,
      email: email,
      help: help,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setHelp("");
  };

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <Layout pageTitle="Contact Us">
      <Container>
        <div className={styles.header}>
          <h1>Contact Us</h1>
        </div>
        <Form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formHeader}>
            <h5>Contact Us</h5>
          </div>
          <Form.Group className="ms-3 mt-3">
            <Form.Label>
              Name <span style={{ color: "tomato" }}>*</span>
            </Form.Label>
            <div className={styles.nameLabels}>
              <Form.Control
                required
                value={firstName}
                className="me-3"
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
              ></Form.Control>
              <Form.Control
                required
                value={lastName}
                className=""
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
              ></Form.Control>
            </div>
          </Form.Group>

          <Form.Group className="mt-3 ms-3">
            <Form.Label>
              Email <span style={{ color: "tomato" }}>*</span>
            </Form.Label>
            <Form.Control
              required
              value={email}
              className="w-50"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mt-3 ms-3 me-3">
            <Form.Label>
              How can we help? <span style={{ color: "tomato" }}>*</span>
            </Form.Label>
            <Form.Control
              required
              value={help}
              rows="3"
              as="textarea"
              onChange={(e) => setHelp(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <div className="d-flex justify-content-center mt-4 mb-3">
            <Button className={styles.btn} type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </Layout>
  );
};

export default Contact;
