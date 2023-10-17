import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import AnxietyTopSection from "./AnxietyTopSection";
import HeroSliderAnxiety from "../../wrappers/hero-slider/HeroSliderAnxiety";

const Anxiety = () => {
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
        <HeroSliderAnxiety
        spaceTopClass="pt-100"
        />

       <AnxietyTopSection
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
        />

      </LayoutOne>

    </Fragment>
  );
};

export default Anxiety;
