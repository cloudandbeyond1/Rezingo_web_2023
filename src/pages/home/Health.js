import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import ProgramTopSection from "../../wrappers/Program/Programtopsection";
import HeroSliderHealth from "../../wrappers/hero-slider/HeroSliderHealth";
const Health = () => {
  return (
    <Fragment>

      <SEO
        titleTemplate="Shop"
        description="Shop home of flone react minimalist eCommerce template."
      />

      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <HeroSliderHealth
        spaceTopClass="pt-100"
        />

       <ProgramTopSection
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
        />

      </LayoutOne>

    </Fragment>
  );
};

export default Health;
