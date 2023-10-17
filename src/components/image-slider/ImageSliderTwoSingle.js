import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ImageSliderTwoSingle = ({ data }) => {
  return (
    <div className="single-image" style={{marginRight:"25px",marginLeft:"10px"}}>
      <Link to={process.env.PUBLIC_URL + data.link}>
        <img src={process.env.PUBLIC_URL + data.image} alt="" />
      </Link>
     <div>
     <h3 style={{fontSize:"15px",marginBottom:"15px",marginTop:"20px",lineHeight:"24px",fontWeight:"bold"}}>{data.title}</h3>
     <p style={{fontSize: "16px",lineHeight: "1.38",marginBottom: "14px"}}>{data.subtitle}</p>
     <div><a href="/blog" >{data.minute} Minute Read</a></div>
     </div>
    </div>
    
  );
};

ImageSliderTwoSingle.propTypes = {
  data: PropTypes.shape({})
};

export default ImageSliderTwoSingle;
