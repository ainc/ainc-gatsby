import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Link } from "gatsby";
import { Container, Row, Col, Breadcrumb, Form, Button } from "react-bootstrap";

import * as styles from "./bootcamp_apply.module.css";
import { graphql } from "gatsby";

const Bootcamp_Apply = ({ data }) => {
  const deadlineDate =
    data.allNodeBootcampCohortAndDeadline.nodes[0].field_cohort_deadline;
  const cohort = data.allNodeBootcampCohortAndDeadline.nodes[0].title;

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [findOut, setFindOut] = useState();
  const [referred, setReferred] = useState();
  const [userInfo, setUserInfo] = useState();

  const handleDate = (deadline) => {
    let date = new Date(deadline);
    let options = {
      month: "long",
      day: "numeric",
      weekday: "long",
    };
    date = date.toLocaleDateString("en-US", options);
    return date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      findOut: findOut,
      referred: referred,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setFindOut("");
    setReferred("");
  };

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <Layout pageTitle="Web Developer Bootcamp Application">
      <Container>
        <Row>
          <Col className={styles.header}>
            <h1>WEB DEVELOPER BOOTCAMP APPLICATION</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Breadcrumb className={styles.breadcrumb}>
              <Breadcrumb.Item>
                <Link className={styles.gatsbyLink} to="/">
                  Home
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">
                <Link className={styles.gatsbyLink} to="/">
                  Learn
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">
                <Link className={styles.gatsbyLink} to="/">
                  Adults
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">
                <Link className={styles.gatsbyLink} to="/">
                  Bootcamp
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active href="#">
                Apply
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className={styles.formHeader}>
              Fill out this form to start your application process
            </p>
            <p className={styles.formSubheader}>
              Pay nothing until you land a job!{" "}
              <a href="#" className={styles.link}>
                See how here
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className={styles.deadline}>
              Application deadline for Cohort{" "}
              <span>
                {cohort}: <span>{handleDate(deadlineDate)}</span>
              </span>{" "}
            </p>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit} id={styles.bootcampForm}>
          <Form.Group className="mb-2">
            <Form.Label>First name</Form.Label>
            <Form.Control
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              value={lastName}
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              placeholder="123-456-7890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>How did you find out about the Bootcamp?</Form.Label>
            <Form.Select
              size="sm"
              value={findOut}
              onChange={(e) => setFindOut(e.target.value)}
            >
              <option value="Select">-Select-</option>
              <option value="Advertisement">Advertisement</option>
              <option value="News Article">News Article</option>
              <option value="Signage / Building">Signage / Building</option>
              <option value="Google Search">Google Search</option>
              <option value="Referral / Word of Mouth">Referral / Word of Mouth</option>
              <option value="Event">Event</option>
              <option value="Facebook">Facebook</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>If referred, who told you about the bootcamp?</Form.Label>
            <Form.Control
              value={referred}
              onChange={(e) => setReferred(e.target.value)}
              placeholder="Referred by..."
            />
          </Form.Group>
          <Button type="submit" className={styles.btn}>
            Submit
          </Button>
        </Form>

        <Row>
          <Col className={styles.header}>
            <h1 className={styles.subHeader}>The Cost</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <h5 className={styles.costHeader}>Income Share Agreement</h5>
            <p className={styles.costText}>
              Fund your future with an Income Share Agreement. We&#39;re partnered with
              industry-leading ISA provider{" "}
              <span>
                <a href="https://www.meratas.com/">Meratas</a>
              </span>{" "}
              to allow students to enroll in our full-time program with no up front
              tuition costs. ISA recipients only pay when they&#39;ve landed a job making
              $40,000/year or more. Want to know more?{" "}
              <span>
                <a href="/">Schedule a call today!</a>
              </span>{" "}
            </p>
          </Col>
          <Col sm={12} md={6}>
            <h5 className={styles.costHeader}>Up-front payment</h5>
            <p className={styles.costText}>
              Students who choose to pay tuition up front are offered a discounted tuition
              rate of $13,500.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const query_bootcamp_apply = graphql`
  query deadline {
    allNodeBootcampCohortAndDeadline(
      sort: { fields: field_cohort_deadline, order: DESC }
      limit: 1
    ) {
      nodes {
        field_cohort_deadline
        title
      }
    }
  }
`;

export default Bootcamp_Apply;
