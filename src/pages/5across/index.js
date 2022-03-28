import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import * as styles from "./5across.module.css";
import Layout from "../../components/Layout/Layout";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import Title from "../../components/UI/Title/Title";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import PlannedEvent from "../../components/PlannedEvent/PlannedEvent";
import RecentWinner from "./components/RecentWinner/RecentWinner";
import PastWinners from "./components/PastWinners/PastWinners";
import Sponsors from "../../components/Sponsors/Sponsors";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

import fiveAcrossRedCircle from "../../images/5across-big-red-circle.png";
import fiveAcrossBanner from "../../images/5across-banner.png";
import fiveAcrossPitch from "../../images/5across-pitches.png";
import fiveAcrossTime from "../../images/5across-time.png";
import fiveAcrossPrize from "../../images/5across-prize.png";
import fiveAcrossStart from "../../images/5across-start.png";
import fiveAcrossEntry from "../../images/5across-entry.png";
import dabbingUnicorn from "../../images/dabbing_unicorn.png";

const Index = ({ data }) => {
  //second query in page. Renders single winner_completed true value, sorted by DESC
  const sortedWinner = data.sortedWinner.nodes[0];
  //third query in page. Renders all prior winners
  const priorWinners = data.priorWinners.nodes;

  const titleSponsors = data.titleSponsors.nodes[0].relationships.field_5across_title_sponsor.map(
    (images) => images.localFile.childImageSharp.gatsbyImageData
  );

  const supportingSponsors =
    data.supportingSponsors.nodes[0].relationships.field_5across_title_sponsor.map(
      (images) => images.localFile.childImageSharp.gatsbyImageData
    );

  const presentingSponsors =
    data.presentingSponsors.nodes[0].relationships.field_5across_title_sponsor.map(
      (images) => images.localFile.childImageSharp.gatsbyImageData
    );

  console.log(presentingSponsors);

  const [selectValue, setSelectValue] = useState(2022);
  const [parsed, setParsed] = useState([]);

  //Drupal returns the date as a type of string so it must be converted. This also filters each years results by select value instead of running a new query for each year
  const dateParser = (year) => {
    setSelectValue(year);

    const parsing = () => {
      //var that will be used to filter the years
      let startYear = new Date("01-01-" + year);
      let endYear = new Date("12-31-" + year);

      let options = {
        year: "numeric",
        month: "long",
      };
      let dates = priorWinners.map((winners) => ({
        winner: winners.field_winner,
        year: new Date(winners.field_5across_upcoming_date).toLocaleString("en-US", options),
        //splits founders names by every 2nd space
        founder: new Array(
          winners.field_founders_names.value.match(/\b[\w']+(?:[^\w\n]+[\w']+){0,1}\b/g)
        ),
        youtubeLink: winners.field_youtube_link.uri,
      }));

      //finished results
      let parsedDates = dates.filter((a) => {
        let date = new Date(a.year);
        return date >= startYear && date <= endYear;
      });

      return parsedDates;
    };

    return setParsed(parsing());
  };

  useEffect(() => {
    dateParser(selectValue);
  }, [selectValue]);

  return (
    <div>
      <Layout pageTitle="5 Across">
        {/* Hero */}
        <section className={styles.hero}>
          <Container>
            <Row>
              <Col sm={10} lg={8}>
                <div className={styles.heading}>
                  <Image src={fiveAcrossBanner} className={styles.img} />
                  <div className={styles.catchline}>
                    <Title
                      className={`${styles.title} ${styles.lgxZoomInOne} ${styles.lgxHeadingTitle}`}
                    >
                      A Pitch Competition for Kentucky Entrepreneurs
                    </Title>
                  </div>
                  <div className={styles.btnRow}>
                    <BrandButton
                      type="button"
                      className={`${styles.btn} ${styles.btnMargins} ${styles.btnGrey} btn--small mx-5`}
                      id="applyBtn"
                      onClick={(e) =>
                        (window.location.href =
                          "https://forms.zohopublic.com/virtualoffice9155/form/5AcrossApplication1/formperma/i3hM2QiFcJG1DM_nCW8jQvMplp5UUFgRbKc5Ev8kuiA")
                      }
                    >
                      Apply to pitch
                    </BrandButton>
                    <BrandButton
                      type="button"
                      className={`${styles.btn} ${styles.btnMargins} ${styles.btnGrey} btn--small`}
                      role="button"
                      aria-disabled="true"
                      id="registerBtn"
                      onClick={(e) =>
                        (window.location.href = "http://www.eventbrite.com/e/288019432877")
                      }
                    >
                      Register To Attend
                    </BrandButton>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Icon section */}
        <section>
          <Container className={styles.icon}>
            <div className={`d-flex justify-content-center ${styles.marginTop}`}>
              <Row className="d-flex justify-content-center">
                {/* Icon list */}
                <Col className={styles.iconList} lg={2} md={6} xs={6}>
                  <Image fluid src={fiveAcrossPitch} alt="5across pitches" />
                </Col>
                <Col className={styles.iconList} lg={2} md={6} xs={6}>
                  <Image fluid src={fiveAcrossTime} alt="5across pitches" />
                </Col>
                <Col className={styles.iconList} lg={2} md={6} xs={6}>
                  <Image fluid src={fiveAcrossPrize} alt="5across pitches" />
                </Col>
                <Col className={styles.iconList} lg={2} md={6} xs={6}>
                  <Image fluid src={fiveAcrossStart} alt="5across pitches" />
                </Col>
                <Col className={`${styles.iconList}`} lg={2} md={6} xs={6}>
                  <Image fluid src={fiveAcrossEntry} alt="5across pitches" />
                </Col>
              </Row>
            </div>
            <Row className={`mt-4 justify-content-center ${styles.iconBtnList}`}>
              <Col className={`${styles.iconBtnList}`} sm={12} lg={2} md={6}>
                <BrandButton
                  className={`${styles.btn} ${styles.btnGrey} btn--small`}
                  id="applyBtn"
                  onClick={(e) =>
                    (window.location.href =
                      "https://forms.zohopublic.com/virtualoffice9155/form/5AcrossApplication1/formperma/i3hM2QiFcJG1DM_nCW8jQvMplp5UUFgRbKc5Ev8kuiA")
                  }
                >
                  Apply to pitch
                </BrandButton>
              </Col>
              <Col className={` ${styles.iconBtnList}`} sm={12} lg={2} md={6}>
                <BrandButton
                  className={`w-100 ${styles.btn} ${styles.btnGrey} btn--small`}
                  role="button"
                  aria-disabled="true"
                  id="registerBtn"
                  onClick={(e) =>
                    (window.location.href = "http://www.eventbrite.com/e/288019432877")
                  }
                >
                  Register to attend
                </BrandButton>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Past pitches */}
        <section className={styles.pastPitches}>
          <div>
            <Container fluid className={`${styles.bgShader}`}>
              <Row>
                <Col className={styles.marginTop}>
                  <Title className={` text-center ${styles.headingTitle} text-white`}>
                    Over 10 years of putting the spotlight on Kentucky Entrepreneurs
                  </Title>
                </Col>
                <Row>
                  <Col className={`text-center`}>
                    <BrandButton className={`mb-5 ${styles.btn} ${styles.btnLarge}`}>
                      Watch Past Pitches
                    </BrandButton>
                  </Col>
                </Row>
              </Row>
            </Container>
          </div>
        </section>
        {/* Next 5 across */}
        <section>
          <div className={styles.joinNext}>
            <Container fluid>
              {/* <Image src={fiveAcrossArrow} alt="arrow" className={styles.redArrow} /> */}
              <Row className={styles.redCircle}>
                <Image className={styles.redCircleImg} src={fiveAcrossRedCircle} alt="red-circle" />
                <Title>Join us at the next 5 Across</Title>

                {data.allNode5Across.nodes.map((node) =>
                  !node.field_winner_completed ? (
                    <div className={styles.nextEvent}>
                      <PlannedEvent
                        date={node.field_5across_upcoming_date}
                        location={node.field_5across_location.value}
                        alt="Five across banner"
                      ></PlannedEvent>
                    </div>
                  ) : (
                    ""
                  )
                )}
              </Row>
            </Container>
          </div>
        </section>
        {/* Most Recent Winner */}
        <section>
          <Container>
            <Row className={styles.mostRecentWinner}>
              <Col className={`text-center ${styles.marginTopLarge}`}>
                <Title className={`mb-5 ${styles.recentWinnerHeader}`}>Our most recent winner</Title>
                {sortedWinner ? (
                  <RecentWinner
                    alt="alt"
                    winner={sortedWinner.field_winner}
                    image={
                      sortedWinner.relationships.field_winner_img?.relationships.field_media_image
                        .localFile.childImageSharp.gatsbyImageData
                    }
                  />
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </Container>
        </section>
        {/* Previous Winner */}
        <section className={styles.marginTopLarge}>
          <Container>
            <Row>
              <Col className={`text-center ${styles.marginTop}`}>
                <h1 className={` mb-5 ${styles.recentWinnerHeader}`}>
                  Or Revisit a previous winner
                </h1>
                <div>
                  <select onChange={(e) => setSelectValue(e.target.value)} for="years">
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                  </select>
                </div>
                <Row>
                  {parsed
                    ? parsed.map((winners) => {
                        return (
                          <Col lg={4} md={6} sm={12}>
                            <PastWinners
                              year={winners.year}
                              winner={winners.winner}
                              founder={winners.founder}
                              link={winners.youtubeLink}
                            />
                          </Col>
                        );
                      })
                    : ""}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Bring the fun / unicorn */}
        <section>
          <Container>
            <Row>
              <Col className={`text-center ${styles.marginTopLarge}`}>
                <Title className={`${styles.rule}`}>And don't forget rule #17</Title>
              </Col>
            </Row>
            <Row>
              <div className={styles.unicorn}>
                <Image src={dabbingUnicorn} alt="dabbing unicorn" />
                <div className={styles.bringTheFun}>
                  <p>Bring</p>
                  <p>The</p>
                  <p>Fun</p>
                </div>
              </div>
            </Row>
          </Container>
        </section>
        {/* Sponsors */}
        <section className={styles.marginTopLarge}>
          <Container>
            <Sponsors
              title={titleSponsors}
              supporting={supportingSponsors}
              presenting={presentingSponsors}
            />
          </Container>
        </section>
        {/* SocialMedia */}
        <section>
          <SocialMedia />
        </section>
      </Layout>
    </div>
  );
};

export const query_next_event = graphql`
  query next_event {
    allNode5Across {
      nodes {
        field_5across_location {
          value
        }
        field_5across_upcoming_date(formatString: "MMMM/DD/YYYY")
        field_winner_completed
        relationships {
          field_winner_img {
            relationships {
              field_media_image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED, width: 130)
                  }
                }
              }
            }
          }
        }
      }
    }
    sortedWinner: allNode5Across(
      filter: {
        field_winner_completed: { eq: true, in: true }
        relationships: {
          field_winner_img: {
            relationships: { field_media_image: { localFile: { childImageSharp: {} } } }
          }
        }
      }
      sort: { fields: field_5across_upcoming_date, order: DESC }
      limit: 1
    ) {
      nodes {
        field_5across_upcoming_date(formatString: "MMMM/DD/YYYY")
        field_winner_completed
        relationships {
          field_winner_img {
            relationships {
              field_media_image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                  }
                }
              }
            }
          }
        }
        field_winner
      }
    }
    priorWinners: allNode5Across(filter: { field_winner_completed: { eq: true, in: true } }) {
      nodes {
        field_winner
        field_founders_names {
          value
        }
        field_5across_upcoming_date
        field_youtube_link {
          uri
        }
      }
    }
    titleSponsors: allNode5AcrossSponsor(
      filter: {
        relationships: { field_sponsor_weight: { name: { eq: "Title" } } }
        field_date_5across_sponsor_: {}
      }
      sort: { fields: field_date_5across_sponsor_ }
    ) {
      nodes {
        relationships {
          field_5across_title_sponsor {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          field_sponsor_weight {
            name
          }
        }
        field_date_5across_sponsor_(formatString: "MMMM/DD/YYYY")
      }
    }
    supportingSponsors: allNode5AcrossSponsor(
      filter: {
        relationships: { field_sponsor_weight: { name: { eq: "Supporting" } } }
        field_date_5across_sponsor_: {}
      }
      sort: { fields: field_date_5across_sponsor_, order: DESC }
      limit: 1
    ) {
      nodes {
        relationships {
          field_5across_title_sponsor {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          field_sponsor_weight {
            name
          }
        }
        field_date_5across_sponsor_(formatString: "MMMM/DD/YYYY")
      }
    }
    presentingSponsors: allNode5AcrossSponsor(
      filter: { relationships: { field_sponsor_weight: { name: { eq: "Presenting" } } } }
      sort: { fields: field_date_5across_sponsor_, order: DESC }
      limit: 1
    ) {
      nodes {
        relationships {
          field_5across_title_sponsor {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          field_sponsor_weight {
            name
          }
        }
        field_date_5across_sponsor_(formatString: "MMMM/DD/YYYY")
      }
    }
  }
`;

export default Index;
