import React from "react";
import { Segment, Grid, Header, Icon } from "semantic-ui-react";

import { useContext } from "react";
import { ResponsiveContext } from "../../contexts/ResponsiveContext";

import MainButton from "../buttons/MainButton";

const BannerSocial = (
  {
    title,
    description,
    ctaLabel,
    onCtaClick = () => {},
    icons = [],
    iconSize = "huge",
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
    
                  {description && (
                    <p className="banner__description">{description}</p>
                  )}
    
                  {ctaLabel && (
                  <MainButton
                    size="large"
                    className="banner__cta"
                    floated={isMobile ? '' : 'left'}
                    onClick={onCtaClick}
                    content={ctaLabel}
                  />
                  )}

                </Grid.Column>
    
                <Grid.Column mobile={16} tablet={16} computer={8} className="banner__right" >

                  <Grid container textAlign='center' columns={4} padded>

                    {icons.map((it, idx) => (

                      <Grid.Column key={idx} >
                        <a href={it.url} target="_blank" rel="noopener noreferrer">
                          <Icon name={it.name} size={iconSize} className="banner-social__icon" />
                        </a>
                      </Grid.Column>

                    ))}
                    
                  </Grid > 
                  
                </Grid.Column>

              </Grid.Row>

          </Grid>

      </Segment>
    );
  };
  
export default BannerSocial;
