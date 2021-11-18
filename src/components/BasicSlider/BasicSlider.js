import React from "react";
// JSX
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import Wrapper from "../UI/Wrapper/Wrapper";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";
import Button from "../Button/Button"

// Images
const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

const app = () => {
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
      

      <Slide
        background={{
          backgroundImage: giauPass,
          backgroundAttachment: "fixed"
        }}
        >
        <Wrapper>
          <Subtitle>Join the Bootcamp</Subtitle>
          <Title>Get a coding job in 16 weeks</Title>
          <Button>Learn More</Button>
        </Wrapper>
      </Slide>

      <Slide
        background={{
          backgroundImage: countyClare,
          backgroundAttachment: "fixed"
        }}
        >
        <Wrapper>
          <Subtitle>Grow your startup by</Subtitle>
          <Title>Joining the Fellowship Program</Title>
          <Button>Learn More</Button>
        </Wrapper>
      </Slide>

      <Slide
        background={{
          backgroundImage: craterRock,
          backgroundAttachment: "fixed"
        }}
        >
        <Wrapper>
          <Subtitle>Become a member and</Subtitle>
          <Title>Get your best work done here</Title>
          <Button>Learn More</Button>
        </Wrapper>
      </Slide>

      <Nav />
    </HeroSlider>
  );
};

export default app;
