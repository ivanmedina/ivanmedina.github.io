import React from "react";
import { Segment, Header, Grid, Container } from 'semantic-ui-react';
import { ItemImage, ItemGroup, ItemContent, Item } from 'semantic-ui-react';
import Background from "../background";

const Certificates = ({title,certs}) => {
  return (
    <Segment vertical className="certificates">


      <Container>

      <Header as="h1" className="certificates__title">
        {title}
      </Header>

        <Grid 
          doubling
          columns={3}
          className="certificates__grid"
        >

          {certs.map((cert, index) => (

            <Grid.Column key={index} className="certificates__cell">

              <ItemGroup>

                <Item>

                  <ItemImage size="small" src={cert.src} />
                  
                    <ItemContent verticalAlign="middle" className="certificates__itemLabel">
                      {cert.label}
                    </ItemContent>

                </Item>

              </ItemGroup>

            </Grid.Column>

          ))}

        </Grid>

      </Container>
    </Segment>
  );
};

export default Certificates;