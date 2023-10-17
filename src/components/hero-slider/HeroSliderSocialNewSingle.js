import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const HeroSliderSocialNewSingle = ({ data, sliderClass }) => {
  return (
    <div
      className="single-slider-2 slider-height-new1 d-flex align-items-center slider-height-res bg-img"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}>
      <div className="container">
        <div className="row">
        <div className="d-flex" style={{ justifyContent: "space-between", position: "relative" ,zIndex: "2"}} >
                <h2 style={{color:"white",fontSize:"25px"}}>SOCIAL</h2>
                
            </div>
          <div   style={{ justifyContent: "space-between", position: "relative" ,zIndex: "2"}}>
      
            <div className="slider-content-margin slider-animated-1" style={{textAlign:"center"}} >
                
            <div className="sliderphysicalnew">
                <h2 className="physicalfont">Introducing the REZINGO Eco System: A Final Full Stop To Aging</h2>
                <button className="sliderbuttonphysicalnew">Read Story</button>
            </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

HeroSliderSocialNewSingle.propTypes = {
  data: PropTypes.shape({})
};

export default HeroSliderSocialNewSingle;
