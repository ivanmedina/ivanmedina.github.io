import React from "react";
import { Segment, Header, Container } from 'semantic-ui-react';
import ServiceList from "./ServicesList";



  const Skills = ({ AppSec, Pentesting, RedTeam, WebDevelopment }) => {
    return (
      <Segment vertical className="skills">
        
        <Container>
          
          <Header as="h2" className="skills__title">
            Skills
          </Header>

          <ServiceList {...AppSec} />
          <ServiceList {...Pentesting}/>
          <ServiceList {...RedTeam}/>
          <ServiceList {...WebDevelopment}/>

        </Container>

      </Segment>
    );
  };
  

export default Skills;