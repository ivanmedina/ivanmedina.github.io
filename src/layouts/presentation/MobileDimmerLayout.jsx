import React from 'react'

import { Grid, Image, Dimmer, Segment } from 'semantic-ui-react';

const MobileDimmerLayout = (props) => {

  const { children, imageSrc } = props;

  return (
    <Segment
      vertical
      className="presentation"
      placeholder
      size="small"
    >
      
      <Grid
        padded='vertically'
        verticalAlign='middle'
        className=""
      >

      <Grid.Row
        stretched
        className="presentation__content"
        only="mobile tablet"
      >
          <Grid.Column mobile={16} tablet={16} fluid>
              <Dimmer.Dimmable blurring dimmed>
                  <Image
                    src={imageSrc}
                  />
                  <Dimmer active>
                    {children}
                  </Dimmer>
              </Dimmer.Dimmable>
          </Grid.Column>
      </Grid.Row>
      </Grid>
    </Segment>

  )
}

export default MobileDimmerLayout;
