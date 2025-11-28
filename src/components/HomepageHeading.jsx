import React from "react";
import { Container, Header } from "semantic-ui-react";

const HomepageHeading = ({ title, subtitle }) => {

  return(
    <div className="hero hero--bg-hacker">

      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="hero__video"
      >
        <source src="/assets/hero.webm" type="video/webm" />
      </video>

      <Container text className="hero__inner">
        <Header as="h1" content={title} inverted className="hero__title" />
        <Header
          as="h2"
          content="[ RED TEAM ]"
          inverted
          className="hero__type"
        />
        <Header
          as="h2"
          content={subtitle}
          inverted
          className="hero__subtitle"
        />
        <Header
          as="h3"
          content="OSWE | OSWP | CRTA | CWES | eWPTX"
          inverted
          className="hero__certs"
        />
      </Container>
    </div>
  );
};



export default HomepageHeading;