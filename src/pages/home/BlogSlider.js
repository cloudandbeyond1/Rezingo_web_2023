import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import "../../assets/css/home.css";

const BlogSlider = ({ spaceTopClass, spaceBottomClass, dateTime }) => {
  return (
    <div className={clsx("funfact-area", spaceTopClass, spaceBottomClass)} style={{position: "sticky",top:"0",left:"0",width:"100%",zIndex:"0"}}>
      <div className="container containermaxwidth mt-4 pt-4" style={{flexDirection: "row"}}>
        <div className="row align-items-center">
            
          <div className="col-md-5 col-xs-5 col-lg-5 order-1 order-lg-1">
            <div className="funfact-content funfact-res text-left">
            <h3 className="f-60">Czech Please! Hollywood’s Finest Facialist Just Launched Her Best Laser Facial Yet</h3>
         
            </div>
          </div>
          <div className="col-md-7 col-lg-7 order-2 order-lg-2">
            <div className="funfact-image text-center">
             
                <img
                  src="/assets/img/blog/blogslider.jpg"
                  alt=""
                  className="img-fluid h-b1"/>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogSlider.propTypes = {
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BlogSlider;
