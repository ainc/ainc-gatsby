import React, { useState } from "react";
import * as styles from "./bootcamp.module.css";
import Layout from "../../components/Layout/Layout";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import Diagonal from "../../components/Layout/Diagonal/Diagonal";
import bootcampHero from "../../images/bootcamp-hero.jpeg";
import ModalForms from "../../components/Forms/ModalForms";
import { Link } from "gatsby";
import DiagonalInvert from "../../components/Layout/Diagonal_Invert/Diagonal_Invert";

import apax from "../../images/apax.png";
import bigAssFans from "../../images/bigassfans-logo.png";
import blueFrame from "../../images/blueframe-logo.png";
import cabem from "../../images/cabemtechnologies-logo.png";
import infosys from "../../images/infosys-logo.png";
import lightwell from "../../images/lightwell-logo.png";
import nymbolSystems from "../../images/nymblsystems-logo.png";
import prospectTrax from "../../images/prospecttrax-logo.png";
import silverFern from "../../images/silverfern-logo.png";
import vetData from "../../images/vetdata-logo.png";
import meloImg from "../../images/melo.jpeg";
import davidImg from "../../images/david.jpeg";
import brettImg from "../../images/brett.jpeg";
import justinImg from "../../images/justin.jpeg";
import jobGuaranteed from "../../images/job-guaranteed.png";
import graduation from "../../images/graduation.png";
import jobPlacement from "../../images/job-placement.png";
import salary from "../../images/salary.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import git from "../../images/git.png";
import js from "../../images/javascript.png";
import agile from "../../images/agile.png";
import onlineApplication from "../../images/online-application.png";
import basicChallenge from "../../images/basic-challenge.png";
import inPersonInterview from "../../images/in-person-interview.png";
import fioChallenge from "../../images/fio-challenge.png";
import timeline from "../../images/timeline.png";

const BootcampPage = () => {
  const [testimony3, setTestimony3] = useState(false);
  const [testimony2, setTestimony2] = useState(false);
  const [testimony1, setTestimony1] = useState(true);

  return (
    <Layout pageTitle="Web Developer Bootcamp">
      {/* Hero */}
      <Container fluid>
        <section style={{ marginBottom: "75px" }}>
          <Link to="/bootcamp_apply">
            <Button size="sm" className={styles.lgxBtnApply}>
              Apply Now
            </Button>
          </Link>
          <Row>
            <Diagonal bgImage={{ bootcampHero }}>
              <Col md={6}>
                <h3 className={styles.headingTitle}>
                  A 16 week, Full Time, Job-Guaranteed Program designed for
                  individuals looking to make a career change.
                </h3>
                <ModalForms type="ProgramGuide" btnText="Download Program Guide" />
                <p className={styles.text}>
                  Pay nothing until you land a job!{" "}
                  <span>
                    <Link to="/bootcamp_apply">
                      <a href="#">See how here</a>
                    </Link>
                  </span>
                </p>
              </Col>
            </Diagonal>
          </Row>
        </section>
      </Container>
      {/* Answer section */}
      <section style={{ marginBottom: "100px" }}>
        <Container>
          <Row>
            <Col>
              <h3 className={styles.answer}>Answer Honestly...</h3>
              <p className={styles.secret}>
                (your answer is safe with us, we promise.)
              </p>
            </Col>
          </Row>
          <Col lg={{ offset: 1, span: 10 }} md={12}>
            <Row>
              <Col lg={2} md={3} sm={6} className={styles.colSm5ths}>
                <div className={styles.shield}>
                  <div className={styles.shieldText}>
                    <p>Do you ever think of changing careers?</p>
                  </div>
                </div>
              </Col>
              <Col lg={2} md={3} sm={6} className={styles.colSm5ths}>
                <div className={styles.shield}>
                  <div className={styles.shieldText}>
                    <p>Are you looking for a more meaningful career?</p>
                  </div>
                </div>
              </Col>
              <Col lg={2} md={3} sm={6} className={styles.colSm5ths}>
                <div className={styles.shield}>
                  <div className={styles.shieldText}>
                    <p>Do you enjoy learning new ideas and solving problems?</p>
                  </div>
                </div>
              </Col>
              <Col lg={2} md={3} sm={6} className={styles.colSm5ths}>
                <div className={styles.shield}>
                  <div className={styles.shieldText}>
                    <p>
                      Do you want to gain a skill set that will set you up for
                      success no matter your location?
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={2} md={3} sm={6} className={styles.colSm5ths}>
                <div className={styles.shield}>
                  <div className={styles.shieldText}>
                    <p>Are you looking to explore a different life path?</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Row>
            <p className={`d-flex justify-content-center ${styles.fancyP}`}>Yes!</p>
            <p className={`fw-bold text-center mb-3 ${styles.webDevP}`}>
              If you answered yes to any of these, our Web Developer Bootcamp could
              be your next move.
            </p>
            <p className={`text-center mb-3 ${styles.webDevP}`}>
              The Web Developer Bootcamp is a 16-week, intensive training program for
              aspiring software developers.
            </p>
            <div className="d-flex justify-content-center">
              <ModalForms type="ProgramGuide" btnText="Download Program Guide" />
            </div>
          </Row>
        </Container>
      </section>
      {/* Alumni Testimonies */}
      <section className={styles.alumni}>
        <Container>
          <Row>
            <h1 className={`mt-5 mb-5 text-white text-center ${styles.header}`}>
              Hear from our alumni
            </h1>
          </Row>
          <Row className="pb-4">
            <Col
              md={4}
              xs={12}
              sm={12}
              className="d-flex flex-sm-row flex-md-column"
            >
              <div className="me-sm-2 mb-md-2 d-flex justify-content-center">
                <Image
                  fluid
                  onClick={() => {
                    setTestimony1(true);
                    setTestimony2(false);
                    setTestimony3(false);
                  }}
                  src={davidImg}
                  className={testimony1 ? styles.imageActive : styles.image}
                />
              </div>
              <div className="me-sm-2 mb-md-2 d-flex justify-content-center">
                <Image
                  fluid
                  onClick={() => {
                    setTestimony1(false);
                    setTestimony2(true);
                    setTestimony3(false);
                  }}
                  src={meloImg}
                  className={testimony2 ? styles.imageActive : styles.image}
                />
              </div>
              <div className="me-sm-2 mb-md-2 d-flex justify-content-center">
                <Image
                  fluid
                  onClick={() => {
                    setTestimony1(false);
                    setTestimony2(false);
                    setTestimony3(true);
                  }}
                  src={brettImg}
                  className={testimony3 ? styles.imageActive : styles.image}
                />
              </div>
            </Col>
            <Col className="mt-sm-3">
              <div className={styles.alumniStory}>
                {testimony1 ? (
                  <>
                    <h4>DAVID VANDERHAAR</h4>
                    <p>
                      David worked part-time at Starbucks, and applied for the
                      Bootcamp on a whim (and with a little encouragement from his
                      wife). In addition to working full-time as a software
                      developer, he also teaches classes helping kids learn to code.
                    </p>
                  </>
                ) : null}
                {testimony2 ? (
                  <>
                    <h4>MELANIE STOECKLE</h4>
                    <p>
                      Melanie came to the Bootcamp with previous experience in
                      graphic design. She landed a job as a developer within a week
                      of graduating from the program. Eventually, she earned the
                      freedom through her employer to work remotely, and now travels
                      the world - her office is wherever there's a wifi connection.
                    </p>
                  </>
                ) : null}
                {testimony3 ? (
                  <>
                    <h4>BRETT FRALEY</h4>
                    <p>
                      Brett made the switch from factory worker to software
                      developer. "I worked in lots of different types of factories
                      for years and my body was just getting run down at such a young
                      age. I knew I needed something else. There's no way I could
                      have afforded time or money for a four-year degree."
                    </p>
                  </>
                ) : null}
              </div>
            </Col>
          </Row>

          <div className="d-flex justify-content-center mt-3 pb-4">
            <Link to="/alumni">
              <Button className={styles.lgxBtn} size="sm">
                More Alumni
              </Button>
            </Link>
          </div>
        </Container>
      </section>
      {/* Why awesome inc */}
      <section className="mb-5">
        <Container fluid>
          <Row style={{ marginTop: "50px", marginBottom: "50px" }}>
            <div className=" d-flex justify-content-center">
              <p className={`w-75 ${styles.quote}`}>
                "You don't have to feel trapped. Earn your freedom, work when & where
                you want. Earn a living in just 40 hours a week."
              </p>
            </div>
          </Row>
          <Row className={styles.awesomeBanner}></Row>
          {/* Svg clip which cuts off awesome inc banner. Not working? */}

          {/* <svg viewBox="0 0 100 100" className={styles.clip} preserveAspectRatio="none">
            <polygon points="100,0 0,100 100,100"></polygon>
          </svg> */}

          <Row className="me-3">
            <Col className="mx-auto" sm={8}>
              <h1 className={`mt-4 mb-3 text-end ${styles.header}`}>
                Why Awesome Inc?
              </h1>
              <div className="text-end">
                <p className={`${styles.whyAwesome}`}>
                  Awesome Inc exists to grow the tech and startup community in
                  central KY. We do that by offering a startup accelerator, a
                  coworking space, a sister software company called APAX, and running
                  Awesome Inc U - our coding school.
                </p>
                <p className={`mb-4 ${styles.whyAwesome}`}>
                  We do a lot, and we do it all to create an ecosystem where people
                  like you can thrive.
                </p>
                <ModalForms type="Tour" btnText="Schedule a visit" />
              </div>
            </Col>
          </Row>
          <Row className="mt-5 d-flex justify-content-center">
            <Col
              md={4}
              sm={12}
              className="d-flex justify-content-end align-items-center"
            >
              <Image className={styles.lgImage} src={justinImg} />
            </Col>
            <Col md={6} className="mb-4">
              <p className={`${styles.smFancyP}`}>meet justin</p>
              <p className={`w-75 ${styles.webDevP}`}>
                This is Justin, an artist turned developer who runs our training
                program. He's been on this journey himself. He found Awesome Inc and
                is now helping us create opportunies for others.
              </p>
              {/* Change this Btn to a link */}
              <Link to="/bootcamp_apply">
                <Button size="sm" className={`mt-2 ${styles.lgxBtn}`}>
                  Apply Now
                </Button>
              </Link>
              <p className={`mt-4 mb-5 ${styles.webDevP}`}>
                Pay nothing until you land a job!{" "}
                <span>
                  <a className={styles.link} href="#cost">
                    See how here
                  </a>
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Job */}
      <section className={styles.job}>
        <Container>
          <Row>
            <Col className="mt-5">
              <Image fluid className={styles.centerBlock} src={jobGuaranteed} />
              <p className={`mt-4 mb-5 ${styles.success}`}>
                We only succeed when you succeed. We guarantee that all students who
                complete the 16-week Bootcamp program and uphold the job search
                requirements will receive a job offer within six months of their
                graduation date, or we'll refund your tuition. See our Student
                Agreement for details.
              </p>
            </Col>
          </Row>
        </Container>
        {/* Bootcamp stats */}
        <Container fluid className={styles.redBg}>
          <Col className="pt-5 pb-3" md={{ span: 8, offset: 2 }}>
            <Row>
              <Col md={4} className={`${styles.stats}`}>
                <Image className={styles.jobImage} src={graduation} />
                <div className="mt-4">
                  <h5>90%</h5>
                  <p className={styles.info}>Graduation Rate</p>
                  <p className={styles.subInfo}>2016-2020</p>
                </div>
              </Col>
              <Col md={4} className={`${styles.stats}`}>
                <Image className={styles.jobImage} src={jobPlacement} />
                <div className="mt-4">
                  <h5>86%</h5>
                  <p className={styles.info}>Job Placement Rate</p>
                  <p className={styles.subInfo}>Within 180 days</p>
                </div>
              </Col>
              <Col md={4} className={`${styles.stats}`}>
                <Image className={styles.jobImage} src={salary} />
                <div className="mt-4">
                  <h5>$45k</h5>
                  <p className={styles.info}>Starting Salary</p>
                  <p className={styles.subInfo}>Average</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Row className="pb-5">
            <Col className="d-flex justify-content-center">
              <ModalForms
                btnColor={styles.blackBtn}
                type="ProgramGuide"
                btnText="Download Program Guide"
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Companies hiring graduates */}
      <section className={styles.companies}>
        <Container>
          <Row>
            <h1>COMPANIES THAT HAVE HIRED OUR GRADUATES</h1>
          </Row>

          <Row className="d-flex justify-content-center">
            <Col md={2} xs={6}>
              <Image
                fluid
                src={apax}
                className={styles.imgResponsive}
                alt="apax software"
              />
            </Col>
            <Col md={2} xs={6}>
              <Image
                fluid
                src={bigAssFans}
                className={styles.imgResponsive}
                alt="big ass fans"
              />
            </Col>
            <Col md={2} xs={6}>
              <Image
                fluid
                src={blueFrame}
                className={styles.imgResponsive}
                alt="blue frame technology"
              />
            </Col>
            <Col md={2} xs={6}>
              <Image
                fluid
                src={cabem}
                className={styles.imgResponsive}
                alt="cabem technologies"
              />
            </Col>
            <Col md={2} xs={6}>
              <Image
                fluid
                src={infosys}
                className={styles.imgResponsive}
                alt="infosys"
              />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mb-5">
            <Col md={2} xs={6}>
              <Image
                fluid
                src={lightwell}
                className={styles.imgResponsive}
                alt="lightwell"
              />
            </Col>
            <Col md={2} xs={6}>
              <Image
                fluid
                src={nymbolSystems}
                className={styles.imgResponsive}
                alt="nymbol.systems"
              />
            </Col>
            <Col md={2} xs={6}>
              <Image
                fluid
                src={prospectTrax}
                className={styles.imgResponsive}
                alt="prospect trax"
              />
            </Col>
            <Col md={2} xs={6}>
              <Image
                fluid
                src={silverFern}
                className={styles.imgResponsive}
                alt="silver fern"
              />
            </Col>
            <Col md={2} xs={6}>
              <Image
                fluid
                src={vetData}
                className={styles.imgResponsive}
                alt="vetdata"
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Training */}
      <section className={styles.training}>
        <Container>
          <Row className="text-center fw-bold">
            <p>
              With over 500 hours of hands-on training, you'll gain experience while
              building 10+ projects using
            </p>
          </Row>
          <Row className="d-flex justify-content-center mb-5">
            <Col md={2} xs={6}>
              <Image
                className={styles.imgResponsive}
                fluid
                src={html}
                alt="vetdata"
              />
            </Col>
            <Col md={2} xs={6}>
              <Image
                className={styles.imgResponsive}
                fluid
                src={css}
                alt="vetdata"
              />
            </Col>
            <Col md={2} xs={6}>
              <Image
                className={styles.imgResponsive}
                fluid
                src={git}
                alt="vetdata"
              />
            </Col>
            <Col md={2} xs={6}>
              <Image className={styles.imgResponsive} fluid src={js} alt="vetdata" />
            </Col>
            <Col md={2} xs={6}>
              <Image
                className={styles.imgResponsive}
                fluid
                src={agile}
                alt="vetdata"
              />
            </Col>
          </Row>
          <Row className="text-center d-flex justify-content-center">
            <Col md={8} sm={12}>
              <p className={`mb-4 text-start ${styles.text}`}>
                With over 500 hours of hands-on training, you'll gain experience
                while building 10+ projects using HTML, CSS, JavaScript, web
                frameworks, GitHub, Agile, and more.
              </p>
              <p className={`mt-2 text-start ${styles.text}`}>
                Once admitted, students gain access to our self-paced Prework
                content. As Bootcamp begins, students start remotely with a 4-week,
                part-time Onboarding phase with daily "standup" video calls. After
                that, we kick into high gear for 12 weeks of full-time, in-person
                training. We've designed the Bootcamp to feel less like school, and
                more like your first 3 months on the job. By the conclusion of the
                combined 16-week program, our alumni are ready to interview with
                regional and national employers for the opportunity to earn a
                full-time position at a competitive junior developer's salary.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Process */}
      <section className="mb-5">
        <Container className="mb-5">
          <Col lg={{ offset: 0, span: 12 }} md={12}>
            <Row className="mb-4 mt-4 d-flex justify-content-center">
              <Col lg={2} md={3} xs={6}>
                <Image fluid src={onlineApplication} alt="vetdata" />
              </Col>
              <Col lg={2} md={3} xs={6}>
                <Image fluid src={basicChallenge} alt="vetdata" />
              </Col>
              <Col lg={2} md={3} xs={6}>
                <Image fluid src={inPersonInterview} alt="vetdata" />
              </Col>
              <Col lg={2} md={3} xs={6}>
                <Image fluid src={fioChallenge} alt="vetdata" />
              </Col>
            </Row>
            <Row className="text-start d-flex justify-content-center mt-0">
              <Col md={8} sm={12}>
                <p className={styles.text}>
                  This process helps us to find top-quality applicants for the
                  Bootcamp. We continue to be surprised and inspired by the variety
                  of different educational and professional backgrounds from which
                  our students come to Bootcamp. Contrary to stereotypes about
                  software developers, there&#39;s not just one archetype that&#39;s
                  a good fit for this career. Our goal throughout the application
                  process is to find people who, in their own unique way, are ready
                  to dive into a software development career through the accelerated
                  learning environment we provide. For more on this, check out our
                  blog post{" "}
                  <span>
                    <a href="#">What We Look For In A Bootcamp Student.</a>
                  </span>
                </p>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center mt-4">
              <Col
                lg={3}
                md={4}
                xs={12}
                sm={6}
                className="d-flex justify-content-center"
              >
                <Link to="/bootcamp_apply">
                  <Button className={styles.lgxBtn}>Apply Now</Button>
                </Link>
              </Col>
              <Col
                lg={3}
                md={4}
                xs={12}
                sm={6}
                className="d-flex justify-content-center"
              >
                <ModalForms type="Tour" btnText="Schedule A Visit" />
              </Col>
              <Col
                lg={3}
                md={4}
                xs={12}
                className="d-flex justify-content-center mt-sm-4 mt-md-0"
              >
                <ModalForms type="ProgramGuide" btnText="Program Guide" />
              </Col>
            </Row>
          </Col>
        </Container>
      </section>
      {/* Timeline */}
      <section className={styles.marginLayer}>
        <DiagonalInvert>
          <Container>
            <Row className="d-block position-relative">
              <h1 className={styles.timelineHeader}>The Timeline</h1>
              <div className="d-flex justify-content-center">
                <div className="d-block">
                  <Col className="ms-md-5">
                    <p className={`mb-4 text-start ${styles.text}`}>
                      This is a realistic timeline of what a Web Developer Bootcamp
                      student can expect from applying to the program to becoming a
                      proud alumni.
                    </p>
                  </Col>

                  <Image
                    fluid
                    src={timeline}
                    className={`mt-2 w-100 ${styles.imgResponsive}`}
                  />
                </div>
              </div>
            </Row>
          </Container>
        </DiagonalInvert>
      </section>
      {/* Cost  */}
      <section>
        <Container>
          <Row>
            <Col className={styles.costHeader}>
              <h1 className={styles.costSubHeader}>The Cost</h1>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <h5 className={styles.costTitle}>Income Share Agreement</h5>
              <p className={styles.costText}>
                Fund your future with an Income Share Agreement. We&#39;re partnered
                with industry-leading ISA provider{" "}
                <span>
                  <a href="https://www.meratas.com/">Meratas</a>
                </span>{" "}
                to allow students to enroll in our full-time program with no up front
                tuition costs. ISA recipients only pay when they&#39;ve landed a job
                making $40,000/year or more. Want to know more?{" "}
                <span>
                  <a href="/">Schedule a call today!</a>
                </span>{" "}
              </p>
            </Col>
            <Col sm={12} md={6}>
              <h5 className={styles.costTitle}>Up-front payment</h5>
              <p className={styles.costText}>
                Students who choose to pay tuition up front are offered a discounted
                tuition rate of $13,500.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Still unsure? */}
      <section className={styles.unsure}>
        <Container>
          <Row className="d-flex justify-content-center mx-auto">
            <Col>
              <h1 className="mt-5">
                Still unsure? Here's everyone who took this same leap and hasn't
                looked back!
              </h1>
              <div className="d-flex justify-content-center mt-4 mb-5">
                <Link to="/alumni" className="mx-auto">
                  <Button className={styles.lgxBtn}>Meet Alumni</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Questions? */}
      <section className={styles.questions}>
        <Container>
          <Row>
            <Col>
              <h1>Still have questions?</h1>
              <div className="d-flex justify-content-center mb-5">
                <Link to="/" className="mx-auto">
                  <Button className={styles.lgxBtn}>See Our FAQs</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default BootcampPage;
