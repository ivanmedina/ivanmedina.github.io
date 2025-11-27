import React from 'react';
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from "semantic-ui-react";


const Footer = () => {
  return (
    <Segment inverted vertical className="footer">
      <Container className="footer__container">
        <Grid divided inverted stackable>
          <Grid.Row>

            {/* <Grid.Column width={3}>
              <Header inverted as="h4" content="Sitemap" />
              <List link inverted>
                <List.Item as="a">Home</List.Item>
                <List.Item as="a">Whoami</List.Item>
                <List.Item as="a">Skills</List.Item>
                <List.Item as="a">Experience</List.Item>
                <List.Item as="a">Certifications</List.Item>
              </List>
            </Grid.Column> */}

            <Grid.Column width={3}>
              <Header inverted as="h4" content="Social" />
              <List link inverted>
                <List.Item as='a' href="https://medium.com/@ivansk8.imm" target="_blank" rel="noopener noreferrer">
                  Medium
                </List.Item>
                <List.Item as='a' href="https://www.linkedin.com/in/ivanmedina-isc/" target="_blank" rel="noopener noreferrer">
                  Linkedin
                </List.Item>
                <List.Item as='a' href="https://github.com/ivanmedina" target="_blank" rel="noopener noreferrer">
                  Github
                </List.Item>
                <List.Item as='a' href="https://discordapp.com/users/611002011713798184" target="_blank" rel="noopener noreferrer">
                  Discord
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={7}>
              {/* <Header as="h4" inverted>
                Footer Header
              </Header> */}
              <p>
              Developed by Ivan Medina — 2025.
              </p>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};
export default Footer;