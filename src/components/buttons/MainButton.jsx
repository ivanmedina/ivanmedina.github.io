import React from 'react';
import { 
    Button,
  } from "semantic-ui-react";

const MainButton = (
    {
        size,className,
        floated,
        onCtaClick,
        content
    }
) => {

    return (
    
        <Button
            size={size}
            className={className}
            floated={floated}
            onClick={onCtaClick}
            content={content}
        />
    )
}

export default MainButton;
