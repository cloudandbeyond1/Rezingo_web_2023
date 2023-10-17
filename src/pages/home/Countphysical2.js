import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import "../../assets/css/ourblog.css";
const Countphysical2 = ({
  spaceTopClass,
  spaceBottomClass,
  dateTime,
  countDownImage
}) => {
  return (
    <div className={clsx("funfact-area", spaceTopClass, spaceBottomClass)}>
      <div className="container containerphysical">
        <div className="row align-items-center">
          <div className="col-md-6 col-xs-6 col-lg-6 order-1 order-lg-2">
          <div className="card">
            <div className="funfact-content funfact-res text-left paddingnew">
              <h3 style={{fontWeight:"500",fontSize:"28px", lineHeight: "1.21", marginBottom: "32px"}}>Introducing The REZINGO Formula</h3>
              <div style={{justifyContent: "space-between", padding: "19px 0 14px", borderBottom: "1px solid #979797", borderTop: "1px solid #979797"}}>
                 <p  className="countphysicalcss"> Genolytic™ technology tackles the 8 mechanisms of skin aging  </p>
                 <p  className="countphysicalcss2">4 Minute Read</p>
              </div>
              <div style={{justifyContent: "space-between", padding: "19px 0 14px", borderBottom: "1px solid #979797"}}>
                 <p  className="countphysicalcss"> Genolytic™ technology tackles the 8 mechanisms of skin aging  </p>
                 <p  className="countphysicalcss2">4 Minute Read</p>
              </div>
              <div style={{justifyContent: "space-between", padding: "19px 0 14px", borderBottom: "1px solid #979797"}}>
                 <p  className="countphysicalcss"> Genolytic™ technology tackles the 8 mechanisms of skin aging  </p>
                 <p  className="countphysicalcss2">4 Minute Read</p>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 order-2 order-lg-1" >
            <div className="card rounded-3xl">
            <div className="funfact-image text-center single-image">
              <Link>
                <img
                  src="/assets/img/slider/rita-Hero.jpg"
                  alt="rita-Hero"
                  className="img-fluid "
                />
              </Link>
              <h2 style={{ marginTop: "25px", fontSize: "22px",fontWeight:"500", lineHeight: "1.25", marginBottom: "0px", textAlign: "left"}}>Meet Rita Levi-Montalcini: The Groundbreaking Neurobiologist Behind LYMA’s Tenth Ingredient</h2>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Countphysical2.propTypes = {
  countDownImage: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default Countphysical2;
