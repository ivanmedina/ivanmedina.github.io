import React from 'react'
import {  Grid, Image, Segment } from 'semantic-ui-react';

const PresentationImageLayout = (props) => {

    console.log(props)

    const {
        children,
        imageSrc,
        styles: {
          classNameSegment,
          classNameContent,
          classNameLeft,
          classNameRight
        }
      } = props;

    return (

        <Segment
            vertical
            className={classNameSegment}
            placeholder size="small"
        >

            <Grid
                padded='vertically'
                verticalAlign='middle'
                className=""
            >
                <Grid.Row
                    className={classNameContent}
                >

                    <Grid.Column
                        mobile={16}
                        tablet={16}
                        computer={8}
                        className={classNameLeft}
                        style={{padding: "4em"}}
                    >
                        {children}
                    </Grid.Column >

                    <Grid.Column
                        mobile={16}
                        tablet={16}
                        computer={8}
                        fluid
                        className={classNameRight}
                    >
                        <Image src={imageSrc} fluid  />
                    </Grid.Column>

                </Grid.Row>

            </Grid>
            
        </Segment>

    )
}

export default PresentationImageLayout;