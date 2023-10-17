import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const HeroSliderSocialSingle = ({ data, sliderClass }) => {
  return (
    <div
      className="single-slider-2 slider-height-1 d-flex align-items-center slider-height-res bg-img"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-7 justify-content-center d-flex">
            <div className="slider-content-2 slider-animated-1" >
              <h3 className="animated">{data.title}</h3>
              <p
                className="animated mt-10"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              ></p>
                <p
                className="animated" style={{marginTop:"-18px"}}
                dangerouslySetInnerHTML={{ __html: data.text}}
              ></p>
              <div className="slider-btn btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  Explore Wellness Dimensions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderSocialSingle.propTypes = {
  data: PropTypes.shape({})
};

export default HeroSliderSocialSingle;
