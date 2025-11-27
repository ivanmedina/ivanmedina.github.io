import React from 'react';
import {
  Segment,
  Container,
  Grid,
  Header,
} from 'semantic-ui-react';

import { useContext } from "react";
import { ResponsiveContext } from "../../contexts/ResponsiveContext";

import MainButton from '../buttons/MainButton';

const ServiceSection = (
  {
    serviceData,
    ctaLabel = "Let’s Talk",
    onCtaClick = () => {},
  }
) => {

    const { title, headline, description, items } = serviceData;

    const { isMobile } = useContext(ResponsiveContext);
    
    return (
        
      <Segment
        vertical
        placeholder
        className={`services__segment ${isMobile ? 'services__segment--mobile' : ''}`}
      >
        <Container
            className={`services__container ${isMobile ? 'services__container--mobile' : ''}`}
        >
          <Grid
            padded='vertically'
            verticalAlign='middle'
            className=""
          >
            <Grid.Row className="">
              <Grid.Column textAlign={isMobile ? 'center' : 'left'}>
                <Header 
                  as="h1"
                  className="services__title"
                >
                  {title}
                </Header>
              </Grid.Column>
            </Grid.Row>
  
            <Grid.Row className="">
              <Grid.Column className="services__headline">   
                {headline}
              </Grid.Column>
            </Grid.Row>
  
            <Grid.Row className="">
              <Grid.Column className="services__content">   
                {description}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row className="">
              <Grid.Column className="">   
              <MainButton
                  size="large"
                  className="banner__cta"
                  floated={isMobile ? '' : 'left'}
                  onClick={onCtaClick}
                  content={ctaLabel}
                />
              </Grid.Column>
            </Grid.Row>

          </Grid>

        </Container>

      </Segment>
    );
  };
  

  export default ServiceSection;