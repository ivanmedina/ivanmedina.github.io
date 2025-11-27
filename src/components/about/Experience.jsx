import React from "react";
import { Segment, Header, List, Container } from 'semantic-ui-react';

const Experience = ({title,experiences}) => {
  return (
    <Segment vertical className="experience">
      
      <Container>
        
        <Header as="h2" className="experience__title">
          {title}
        </Header>

        <List divided relaxed className="experience__list">

          {experiences.map((exp, idx) => (

            <List.Item key={idx} className="experience__item">

              <Header as="h3" className="experience__company">
                {exp.company} – <span>{exp.role}</span>
              </Header>

              <p className="experience__description">{exp.description}</p>
              
              <p className="experience__tools">
                <strong>Tools:</strong> {exp.tools.join(", ")}
              </p>

            </List.Item>

          ))}

        </List>
      </Container>
    </Segment>
  );
};
  

export default Experience;