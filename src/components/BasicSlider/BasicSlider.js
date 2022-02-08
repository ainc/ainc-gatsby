import React from "react";
// JSX
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import Wrapper from "../UI/Wrapper/Wrapper";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";
import BrandButton from "../BrandButton/BrandButton"
// import { ButtonContainer } from "./BasicSlider.module.scss"
import { Container} from "react-bootstrap"


// Images
// const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

class BasicSlider extends React.Component {
  render() {
    return (
      <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log("onBeforeChange", previousSlide, nextSlide)
        }
        onChange={nextSlide => console.log("onChange", nextSlide)}
        onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.33)"
        }}
        settings={{
          slidingDuration: 250,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: true,
          autoplayDuration: 5000,
          height: "100vh"
        }}
      >
        <OverlayContainer>
          <Slide
            background={{
              backgroundImage: giauPass,
              backgroundAttachment: "fixed"
            }}
            >
            <Wrapper>
              <Container className="mb-3">
                <Subtitle className="text-white">Join the Bootcamp</Subtitle>
                <Title className="mb-3 text-white">Get a coding job in 16 weeks</Title>
                <BrandButton href="/alumni" className="mt-3">Learn More</BrandButton>
              </Container>
            </Wrapper>
          </Slide>
        </OverlayContainer>

        <OverlayContainer>
          <Slide
            background={{
              backgroundImage: craterRock,
              backgroundAttachment: "fixed"
            }}
            >
            <Wrapper>
              <Container className="mb-3">
                <Subtitle className="text-white">Grow your startup by</Subtitle>
                <Title className="mb-3 text-white">Joining the Fellowship Program</Title>
                <BrandButton href="/alumni" className="mt-3">Learn More</BrandButton>
              </Container>
            </Wrapper>
          </Slide>
        </OverlayContainer>

        <OverlayContainer>
          <Slide
            background={{
              backgroundImage: countyClare,
              backgroundAttachment: "fixed"
            }}
            >
            <Wrapper>
              <Container className="mb-3">
                <Subtitle className="text-white">Become a member and</Subtitle>
                <Title className="mb-3 text-white">Get your best work done here</Title>
                <BrandButton href="/alumni" className="mt-3">Learn More</BrandButton>
              </Container>
            </Wrapper>
          </Slide>
        </OverlayContainer>

        <Nav />
      </HeroSlider>
    );
  };
};

export default BasicSlider;
