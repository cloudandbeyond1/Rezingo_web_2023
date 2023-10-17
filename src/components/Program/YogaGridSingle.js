import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDiscountPrice } from "../../helpers/program";
// import PhysicalModal from "./PhysicalModal";


const YogaGridSingle = ({
  product,
  currency,
  cartItem,
  wishlistItem,
  compareItem,
  spaceBottomClass
}) => {
  const [modalShow, setModalShow] = useState(false);
  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);
  const dispatch = useDispatch();

  return (
    <Fragment>



<div className="single-image" style={{marginRight:"25px",marginLeft:"25px"}}>
      <Link to={process.env.PUBLIC_URL +"/yoga/" + product.id}>
        <img src={process.env.PUBLIC_URL + product.image[0]} alt="" />
      </Link>
     <div>
     <h3 style={{fontSize:"14px",marginBottom:"15px",marginTop:"20px",lineHeight:"24px",fontWeight:"bold"}}> {product.name}</h3>
     <p className="physicalGridsingle">{product.subtitle}</p>
     <div><Link to={process.env.PUBLIC_URL +"/yoga/" + product.id} style={{textDecoration: "revert"}}>View More</Link></div>
     </div>
    </div>



  
      {/* product modal */}
      {/* <PhysicalModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedPrice={discountedPrice}
        finalProductPrice={finalProductPrice}
        finalDiscountedPrice={finalDiscountedPrice}
        wishlistItem={wishlistItem}
        compareItem={compareItem}
      /> */}
    </Fragment>
  );
};

YogaGridSingle.propTypes = {
  cartItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({}),
  wishlistItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  product: PropTypes.shape({}),
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default YogaGridSingle;
