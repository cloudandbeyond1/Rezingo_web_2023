import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderPhysicalwellness from "../../wrappers/hero-slider/HeroSliderPhysicalwellness";
import HeroSliderSocialwellness from "../../wrappers/hero-slider/HeroSliderSocialwellness";
import ImageSliderTwo from "./ImageSliderTwo";
import Countphysical from "./countphysical";
import Countsocial from "./countsocial";
import Countphysical2 from "./Countphysical2";
import ImageSliderFitness from "./ImageSliderFitness";
import ImageSliderSport from "./ImageSliderSport";
import NeverPage from "./NeverPage";
import PhysicalGrid from "../../wrappers/Program/PhysicalGrid";
import SportGrid from "../../wrappers/Program/SportGrid";
import FitnessGrid from "../../wrappers/Program/FitnessGrid";
import YogaGrid from "../../wrappers/Program/YogaGrid";
import SocialGrid from "../../wrappers/Program/SocialGrid";
const SocialWellness = () => {
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
        <HeroSliderSocialwellness
        spaceTopClass="pt-100"
        />
        {/* <ImageSliderTwo/> */}
        <SocialGrid/>
        <Countsocial/>
        <div style={{height:"40px"}}></div>
        <div className="container-fluid p-0">
          <div className="heronew py-55 ">
            <div>
               <div className="heronew2">
                  <h2 className="heronew4">FITNESS</h2>
                </div>
                <div className="heronew3">
                   <h2 className="heronew5">Gain the advantage to operate at peak performance.</h2>
                </div>
            </div>
          </div>
        </div>
        {/* <ImageSliderFitness/> */}
        <FitnessGrid/>
        <div style={{height:"40px"}}></div>
        <div className="container-fluid p-0">
          <div className="heromind py-55 ">
            <div>
               <div className="heronew2">
                  <h2 className="heronew4 text-dark">SPORTS</h2>
                </div>
                <div className="heronew3">
                   <h2 className="heronew5 text-dark">Live life on an even keel again.</h2>
                </div>
            </div>
          </div>
        </div>
        {/* <ImageSliderSport/> */}
        <SportGrid/>
        <Countphysical2/>
        <div style={{height:"40px"}}></div>
        <div className="container-fluid p-0">
          <div className="heroskin py-55 ">
            <div>
               <div className="heronew2">
                  <h2 className="heronew4 text-dark">YOGA</h2>
                </div>
                <div className="heronew3">
                   <h2 className="heronew5 text-dark">Have the confidence of knowing you look your absolute best.</h2>
                </div>
            </div>
          </div>
        </div>
        {/* <ImageSliderTwo/> */}
        <YogaGrid/>
        <NeverPage/>
      </LayoutOne>

    </Fragment>
  );
};

export default SocialWellness;
