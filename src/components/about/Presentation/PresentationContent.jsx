import React from "react";
import { Header, Grid } from 'semantic-ui-react';

export const PresentationContent = ( { title, subtitle,content, buttonContent } ) =>{
  
    return(
        <Grid>
            <Grid.Row>
                <Grid.Column
                    className=""
                >

                    <Header as="h2" className="about__title">
                    {title}
                    </Header>
                    
                    <Header as="h1" className="about__subtitle">
                    {subtitle}
                    </Header>
                    
                    <p className="about__text">
                    {content}
                    </p>

                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default PresentationContent;