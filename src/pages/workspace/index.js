import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
// import { graphql } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";
import * as styles from "./workspace.module.css";
import MemberOption from "../../components/MemberOptions/memberOptions";
import Amenities from "../../components/Amenities/Amenities";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import SeeTheSpace from "./Components/SeeTheSpace/SeeTheSpace";
import ModalCustom from "../../components/Modal/ModalCustom";
//Image Links Below
import MailOutline from "../../images/icons/mail-outline.png";
import DeskOutline from "../../images/icons/desk-outline.png";
import LockOutline from "../../images/icons/lock-outline.png";
import Wifi from "../../images/icons/wifi.png";
import Mail from "../../images/icons/mail.png";
import Chair from "../../images/icons/chair.png";
import Calendar from "../../images/icons/calendar.png";
import Printer from "../../images/icons/printer.png";
import PingPong from "../../images/icons/ping-pong.png";
import ThoughtBubble from "../../images/icons/thought-bubble.png";
import Connection from "../../images/icons/connection.png";
import Microphone from "../../images/icons/microphone.png";
import LightbulbSun from "../../images/icons/lightbulb-sun.png";
import Scooter from "../../images/icons/scooter.png";
import Cube from "../../images/icons/cube.png";

const WorkspacePage = () => {
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);

  return (
    <Layout pageTitle="Workspace">
      {/* Hero */}
      <section>
        <div className={styles.headerWorkspace}>
          <Container>
            <Row>
              <Col className={` ${styles.lgxHeadingArea} ${styles.lgxHeading} `}>
                <Title className={`${styles.headingTitle} ${styles.extraBold} text-white`}>Workspace</Title>
                <Subtitle className={styles.headingSubtitle}>
                  <i>Get your best work done here.</i>
                </Subtitle>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* See The Space */}
      <section className={styles.spotlightAdult}>
        <SeeTheSpace />
      </section>

      {/* Become a member */}
      <section className={styles.member}>
        <Container>
          <Row>
            <Title className={`${styles.headingTitle} ${styles.extraBold} ${styles.lineHeight}`}>
              Become a member
            </Title>
          </Row>
          <Row>
            <Col md={4} sm={12}>
              <MemberOption
                imgModal="#"
                imgSrc={MailOutline}
                header="VIRTUAL MEMBER"
                infoOne="DOWNTOWN MAILING ADDRESS"
                infoTwo="CONFERENCE ROOM ACCESS"
                infoThree="MEMBER EXCLUSIVE EVENTS"
                price="$75/MONTH"
                imgAlt
                id="44"
              />
            </Col>
            <Col md={4} sm={12}>
              <MemberOption
                imgModal="#"
                imgSrc={DeskOutline}
                header="OPEN DESK MEMBER"
                infoOne="24/7 Access to Our Space"
                infoTwo="Conference Room Access"
                infoThree="Member Exclusive Events"
                price="$199/MONTH"
              />
            </Col>
            {/* The lock image is a lot larger than the other images, so an extra prop was needed to even this out, aka classN. */}
            <Col md={4} sm={12}>
              <MemberOption
                imgModal="#"
                imgSrc={LockOutline}
                header="PRIVATE OFFICE"
                infoOne="Private Office Space"
                infoTwo="Conference Room Access"
                infoThree="Member Exclusive Events"
                price="REACH OUT FOR PRICING"
                classN={styles.lockIcon}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Membership amenities */}
      <section className={styles.spotlightAdult}>
        <Container fluid>
          <Row>
            <Title
              className={`${styles.headingTitle} ${styles.extraBold} ${styles.amenities} ${styles.lineHeight}`}
            >
              Membership Amenities
            </Title>
          </Row>
          <Row className={styles.spotlightAdult}>
            <Col xl={{ span: 8, offset: 2 }} lg={{ span: 9, offset: 2 }}>
              <Row>
                {/* Various Amenities */}
                <Col md={6} sm={12}>
                  <Amenities
                    info="Secure Wi-Fi, Gigabit Internet"
                    imgSrc={Wifi}
                    alt="Wifi Access"
                  />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities
                    info="Downtown Mailing Address"
                    imgSrc={Mail}
                    alt="Mailing Address"
                  />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities
                    info="Conference + Meeting Rooms"
                    imgSrc={Chair}
                    alt="Conference Rooms"
                  />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities info="Networking Events" imgSrc={Calendar} alt="Networking Events" />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities info="Print + Copy" imgSrc={Printer} alt="Printing and Copying" />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities
                    info="Breakroom + Kitchen"
                    imgSrc={PingPong}
                    alt="Breakroom and Kitchen"
                  />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities info="Thinking Room" imgSrc={ThoughtBubble} alt="Thinking Room" />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities info="Mentorship" imgSrc={Connection} alt="Mentorship Access" />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities info="Podcasting Room" imgSrc={Microphone} alt="Podcast Room" />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities
                    info="Indoor/Outdoor space"
                    imgSrc={LightbulbSun}
                    alt="Indoor/Outdoor space"
                  />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities info="Electric Scooters" imgSrc={Scooter} alt="Electric Scooters" />
                </Col>
                <Col md={6} sm={12}>
                  <Amenities info="3D Printer" imgSrc={Cube} alt="3D Printer" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Container fluid>
            <Row>
              <Col>
                <Button onClick={handleShow} className={styles.btnCustom}>
                  Schedule A Tour
                </Button>
              </Col>

              <ModalCustom lgShow={lgShow} hide={handleClose}>
              </ModalCustom>
            </Row>
          </Container>
        </Container>
      </section>
    </Layout>
  );
};

export default WorkspacePage;
