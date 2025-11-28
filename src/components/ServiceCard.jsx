import React from 'react';
import { Card, Icon, Header, List, Grid } from 'semantic-ui-react';

export default function ServiceCard({
    title,
    icon,
    description,
    bullets = [],
  }) {
    return (
      <Card className='service-card card-hover-effect' centered >
        <Card.Content>
        <Grid container>
          <Grid.Row >
            <Grid.Column mobile={16} tablet={16} computer={8} verticalAlign='middle'>
              <Icon name={icon} size='massive' />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={8}   verticalAlign='middle'>
              <Header as="h3" icon textAlign="center" className="service-card-title">
                {title}
              </Header>
                {bullets.length > 0 && (
                  <List bulleted className="service-card__list">
                    {bullets.map((item, i) => (
                      <List.Item key={i}>{item}</List.Item>
                    ))}
                  </List>
                )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
        </Card.Content>
      </Card>
    );
  }