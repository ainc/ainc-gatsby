import React from "react";
import * as styles from "./bootcamp.module.css";
import Layout from "../../components/Layout/Layout";
import { Button, Container, Row, Col } from "react-bootstrap";
import Diagonal from "../../components/Layout/Diagonal/Diagonal";
import Forms from "../../components/Forms/Forms";

const BootcampPage = () => {
  return (
    <Layout pageTitle="Web Developer Bootcamp">
      {/* Hero */}
      <section>
        <Container>
          <Button size="sm" className={styles.lgxBtnApply}>
            Apply Now
          </Button>
          <Row>
            {/* <Diagonal>
              <h3>
                A 16 week, Full Time, Job-Guaranteed Program designed for individuals looking to
                make a career change.
              </h3>
            </Diagonal> */}

            <Col style={{ marginTop: "300px", marginBottom: "300px" }}>
              {/* TYPE Options: SignUp - ScheduleTour - ProgramGuide - Pricing - Internship -
              Fellowship - Contact - Bootcamp */}

              {/* ProgramGuide Fellowship Pricing */}
              <Forms BtnText="SignUp" type="SignUp" />
              <Forms BtnText="Schedule A Tour" type="ScheduleTour" />
              <Forms BtnText="Program" type="ProgramGuide" />
              <Forms BtnText="Pricing" type="Pricing" />
              <Forms BtnText="Internship" type="Internship" />
              <Forms BtnText="Fellowship" type="Fellowship" />
              <Forms BtnText="Contact" type="Contact" />
              <Forms BtnText="Bootcamp" type="Bootcamp" />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default BootcampPage;
