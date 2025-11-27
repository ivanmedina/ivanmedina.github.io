import React from "react";

import { useContext } from "react";
import { ResponsiveContext } from "../../../contexts/ResponsiveContext";
import PresentationImageLayout from "../../../layouts/presentation/PresentationImageLayout";
import PresentationContent from "./PresentationContent";

  const Presentation = ( { presentationImage, ...propsContent } ) => {
  
  const { isMobile } = useContext(ResponsiveContext);

  const styles = {
    classNameSegment: "about",
    classNameContent: "about__content",
    classNameLeft: "about__left",
    classNameRight: `about__right ${isMobile ? 'about__right--mobile' : ''}`
  }


  return (
    <PresentationImageLayout
      styles={styles}
      imageSrc={presentationImage}
    >
     <PresentationContent {...propsContent}/> 
    </PresentationImageLayout>
    );
};

export default Presentation;