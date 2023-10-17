import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import BeautyTopSection from "./BeautyTopSection";
import HeroSliderBeauty from "../../wrappers/hero-slider/HeroSliderBeauty";

const Beauty = () => {
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
        <HeroSliderBeauty
        spaceTopClass="pt-100"
        />

       <BeautyTopSection
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
        />

      </LayoutOne>

    </Fragment>
  );
};

export default Beauty;
