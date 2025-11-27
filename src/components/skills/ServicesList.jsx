import React from 'react';
import {
  Segment,
  Container,
  Grid,
  Header,
  List,
} from 'semantic-ui-react';

import { useContext } from "react";
import { ResponsiveContext } from "../../contexts/ResponsiveContext";

const ServiceList = ({ title, description, items }) => {


    const { isMobile } = useContext(ResponsiveContext);
    
    return (
      <Segment
        vertical
        placeholder
        className="services_list__segment"
      >
        <Container className="">
          <Grid
            padded='vertically'
            verticalAlign='middle'
            className=""
          >
            <Grid.Row className="">
              <Grid.Column textAlign={isMobile ? 'center' : 'left'}>
                <Header 
                  as="h1"
                  className="services__list__title"
                >
                  {title}
                </Header>
              </Grid.Column>
            </Grid.Row>
  
            {description && description.trim() !== "" && (
              <Grid.Row className="">
                <Grid.Column className="services__list__content">   
                  {description}
                </Grid.Column>
              </Grid.Row>
            )}
  
            <Grid.Row className="">
              <Grid.Column className="services__list">   
                <List bulleted>
                  {items.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                  ))}
                </List>
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </Container>
      </Segment>
    );
  };
  

  export default ServiceList;