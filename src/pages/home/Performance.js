import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import PerformanceTopSection from "./PerformanceTopSection";
import HeroSliderPerformance from "../../wrappers/hero-slider/HeroSliderPerformance";

const Performance = () => {
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
        <HeroSliderPerformance
        spaceTopClass="pt-100"
        />

       <PerformanceTopSection
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
        />

      </LayoutOne>

    </Fragment>
  );
};

export default Performance;
