import React from "react";
import { 
  Segment,
  Container,
  Grid,
  Header,
  List
} from "semantic-ui-react";

import { useContext } from "react";
import { ResponsiveContext } from "../../contexts/ResponsiveContext";

import MainButton from "../buttons/MainButton";

const BannerList = (
  {
    title,
    description,
    bullets = [],
    ctaLabel = "Let’s Talk",
    onCtaClick = () => {},
  }
) => {

    const { isMobile } = useContext(ResponsiveContext);
    
    return (

      <Segment vertical className="banner" placeholder size="small" >

          <Grid container className="banner__container" padded='vertically' verticalAlign='middle' >

            <Grid.Row >

              <Grid.Column mobile={16} tablet={16} computer={8} className="banner__left" >
                
                <Header as="h1" className="banner__title">
                  {title}
                </Header>
  
                { description && (
                  <p className="banner__description">{description}</p>
                )}
  
                <MainButton
                  size="large"
                  className="banner__cta"
                  floated={isMobile ? '' : 'left'}
                  onClick={onCtaClick}
                  content={ctaLabel}
                />

              </Grid.Column>
  
              <Grid.Column mobile={16} tablet={16} computer={8} className="banner__right"  verticalAlign="centered" >

                <Container text >

                  {bullets.length > 0 && (

                    <List bulleted className="banner__list" size="large">

                      {bullets.map((item, idx) => (
                        <List.Item key={idx} className="banner__list">{item}</List.Item>
                      ))}

                    </List>

                  )}

                </Container>
                
              </Grid.Column>
              
            </Grid.Row>

          </Grid>

      </Segment>

    );
  };
  

export default BannerList;