import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import "../../assets/css/home.css";

const NeverPage = ({ spaceTopClass, spaceBottomClass, dateTime }) => {
  return (
    <div className={clsx("funfact-area", spaceTopClass, spaceBottomClass)}>
      <div className="container-fluid mt-4 pt-4" style={{flexDirection: "row"}}>
        <div className="row align-items-center">
            
          <div className="col-md-12 col-xs-12 col-lg-12 order-1 order-lg-1" style={{padding:"0px"}}>
            <div className="funfact-content funfact-res text-center" style={{backgroundColor:"white",marginBottom:"30px",paddingBottom:"60px"}}>
            <div style={{textAlign:"center"}}>
            <h2 style={{fontSize: "40px",lineHeight: "1.15", marginBottom: "23px",fontWeight:"600"}}>Never Run Out</h2>
            <h3 style={{fontSize: "20px", lineHeight: "1.021", marginBottom: "25px",fontWeight:"400"}}>Buy or Subscribe. Worldwide shipping included.</h3>
              {/* <div id="cta-waitlist-input" class="mb-12" style={{position:" relative"}}>
                <input type="email" class="mb-2" style={{    paddingTop: "1.5rem",height:"65px", paddingBottom: "1.5rem",paddingRight: "5rem",paddingLeft: "1.5rem"}} placeholder="Enter your email address"/>
   */}
              <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
                <Link
                  className="animated" style={{backgroundColor:"#ab87cd",color:"#fff"}}
                  to={process.env.PUBLIC_URL + "/shopdetails"}
                >
                  Shop Now
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{backgroundColor:"#fafafa",paddingTop:"60px",paddingBottom:"60px"}}>
          <div style={{textAlign:"center"}}>
            <h2>Never Run Out</h2>
            <p>Buy or Subscribe. Worldwide shipping included.</p>
            <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
                <Link
                  className="animated" style={{backgroundColor:"#ab87cd",color:"#fff"}}
                  to={process.env.PUBLIC_URL + "/wellness"}
                >
                  Explore Wellness Dimensions
                </Link>
              </div>
          </div>
        </div> */}
    </div>
  );
};

NeverPage.propTypes = {
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default NeverPage;
