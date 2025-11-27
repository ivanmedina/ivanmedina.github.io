import React from "react";
import { Segment, Header, Grid} from 'semantic-ui-react';
import ServiceCard from "../ServiceCard";

const Services = ( { title, services } ) => {
  
  return (
    
    <Segment
      className="services"
      vertical
      verticalAlign="middle"
    >
     <Grid
      verticalAlign='middle'
      stretched
      style={{ minHeight: 'inherit' }}
      container
     >

      <Grid.Row
        stretched
        verticalAlign='middle'
      >

        <Grid.Column 
          verticalAlign="middle"
          style={{padding: "4em"}}
        >

          <Header 
              as="h1"
              className="services__title"
              textAlign="center"
              style={{padding:"1em"}}
            >
            {title}
          </Header>

          <Grid 
            columns={2}
            stackable
            doubling
          >

            {services.map((s) => (

              <Grid.Column
                key={s.id}
                className="services__cell"
                textAlign="center"
              >
                <ServiceCard {...s} />
              </Grid.Column>
              
            ))}

          </Grid>

        </Grid.Column>

      </Grid.Row>

    </Grid>
      
    </Segment>

  );
};

export default Services;