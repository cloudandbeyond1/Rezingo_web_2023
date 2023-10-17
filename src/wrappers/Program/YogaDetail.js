import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import PropTypes from "prop-types";
import clsx from "clsx";
import React, { Fragment, useState } from "react";
// import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";
import BrandLogoOneSingle from "../../components/brand-logo/BrandLogoOneSingle";
import ImageSliderOne from "../../pages/home/ImageSliderOne";
import Swiper, { SwiperSlide } from "../../components/swiper";
import brandLogoData from "../../data/brand-logos/brand-logo-one.json";
import GoogleMap from "../../components/google-map";
import { useLocation } from "react-router-dom";
import VideoPopupTwo from "../../components/video-popup/VideoPopupTwo";
import rightImage from "../../assets/images/outdoor.png";
import { useDispatch } from "react-redux";
import play from "../../assets/images/play.png";
import { getProductCartQuantity } from "../../helpers/program";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import { addToCompare } from "../../store/slices/compare-slice";
import profileImage from "../../assets/images/profile.png";

import outdoor from "../../assets/images/outdoor.png";


const YogaDetail = ({
  spaceBottomClass,  
  product,cartItems,wishlistItem,compareItem
}) => {
  const dispatch = useDispatch();
  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation ? product.variation[0].size[0].name : ""
  );
  const [productStock, setProductStock] = useState(
    product.variation ? product.variation[0].size[0].stock : product.stock
  );
  const [quantityCount, setQuantityCount] = useState(1);

  const productCartQty = getProductCartQuantity(
    cartItems,
    product,
    wishlistItem,
    selectedProductColor,
    selectedProductSize
  );
  let { pathname } = useLocation();
  return (
    <div className={clsx("product-details-content")}>
      <div className="container-fluid justify-content-center d-flex">
      <div className="container-fluid">
  
  <div className="row align-items-center d-flex bg-light">
    <div className="col-xl-6 p-5 justify-content-center d-flex">
      <div className="title-width">
<h2 className="text-left" style={{fontSize: "36px",
  fontWeight: "600"}}>{product.name}

  </h2>
  {product.affiliateLink ? (
        <div className="pro-details-quality">
          <div className="pro-details-cart btn-hover ml-0">
            <a
              href={product.affiliateLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              ENROLL NOW
            </a>
          </div>
        </div>
      ) : (
        <div className="pro-details-quality">
          <div className="pro-details-cart btn-hover">
            {productStock && productStock > 0 ? (
              <button
                onClick={() =>
                  dispatch(addToCart({
                    ...product,
                    quantity: quantityCount,
                    selectedProductColor: selectedProductColor ? selectedProductColor : product.selectedProductColor ? product.selectedProductColor : null,
                    selectedProductSize: selectedProductSize ? selectedProductSize : product.selectedProductSize ? product.selectedProductSize : null
                  }))
                }
                disabled={productCartQty >= productStock}
              >
                {" "}
                ENROLL NOW{" "}
              </button>
            ) : (
              <button disabled>Out of Stock</button>
            )}
          </div>
          {/* <div className="pro-details-wishlist">
            <button
              className={wishlistItem !== undefined ? "active" : ""}
              disabled={wishlistItem !== undefined}
              title={
                wishlistItem !== undefined
                  ? "Added to wishlist"
                  : "Add to wishlist"
              }
              onClick={() => dispatch(addToWishlist(product))}
            >
              <i className="pe-7s-like" />
            </button>
          </div> */}
          {/* <div className="pro-details-compare">
            <button
              className={compareItem !== undefined ? "active" : ""}
              disabled={compareItem !== undefined}
              title={
                compareItem !== undefined
                  ? "Added to compare"
                  : "Add to compare"
              }
              onClick={() => dispatch(addToCompare(product))}
            >
              <i className="pe-7s-shuffle" />
            </button>
          </div> */}
        </div>
      )}
{/* <p className="text-left">The Rezingo Supplement Starter Kit includes 30-day supply, copper storage vessel and membership that gives access to member pricing and benefits.</p> */}
{/* <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
              <Link
                className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px"}}
                to={process.env.PUBLIC_URL + "/"}
              >
             Play Video  
              </Link>
            </div> */}
            
            </div>
    </div>
    <div className="col-xl-6 pr-0">
    <img
                      src={product.detailimage}
                      className="img-fluid"
                      alt=""
                    />
    </div>
  </div>
</div>
      {/* <div className="sec">
		<img src="images/01.png"/>
		<div className="slide-img-pos">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<p className="slide-img-pos-p1">Experience based search engine.</p>
						<p className="slide-img-pos-p2">AI. Real Estate.<br/>More Possibilities.</p>
						<button>play video</button>
					</div>
					<div className="col-lg-6">
					</div>
				</div>
			</div>	
		</div>
	
	</div> */}
    
      </div>

<div className="container">
<div className="row justify-content-center d-flex my-5 mx-0 py-3">
<p className="slide-img-pos-p1">How it works</p>
<p className="slide-img-pos-p2">It’s easy to get started</p>


				<div class="col-lg-3">
					<p class="slide-img-pos-p3">1. Set your decision criteria</p>
					<p class="slide-img-pos-p4">
						Tell us the key factors that matter
						to your lifestyle, the reason to buy 
						and AI will forecast the properties 
						that match your lifestyle 
						<a>Get Started</a>
					</p>
				</div>
				<div class="col-lg-3">
					<p class="slide-img-pos-p3">2. Smart Offer</p>
					<p class="slide-img-pos-p4">
						We have developed a stress free
						process to make an offer online with 
						minimal paperwork using AI.
					</p>
				</div>
				<div class="col-lg-3">
					<p class="slide-img-pos-p3">3. Mortgage Approval</p>
					<p class="slide-img-pos-p4">
						Using AI, we have automated 
						loan approval, insurance and
						legal review process. Digitally 
						sign contracts and complete 
						closing process		
					</p>
				</div>
					<div class="col-lg-3">
					<p class="slide-img-pos-p3">4. Virtual Neighborhood</p>
					<p class="slide-img-pos-p4">We will send you a <span>welcome packet</span>
						containing all the essentials before 
						and after your move. From moving 
						your cable to updating contact info
						we have it all covered for you.
						
					</p>
				</div>
			
                <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
              <Link
                className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px",textTransform:"uppercase"}}
                to={process.env.PUBLIC_URL + "/"}
              >
                See how it works
              </Link>
            </div>            

</div>
</div>
<div className="container-fluid pb-5" style={{ backgroundImage: `url(${outdoor})`, backgroundRepeat: 'no-repeat', width:'250px' }}>

</div>


<div className="description-review-area bg-light pt-60 pb-100">
<div className="container-fluid pb-5">
        <div className="description-review-wrapper">
        <Tab.Container defaultActiveKey="About">
            
            <Nav variant="pills" className="justify-content-center">
              <div style={{backgroundColor: "#f4f4f4 !important"}}  className="description-review-topbar">
                <Nav.Item>
                  <Nav.Link eventKey="About" style={{padding:"16px 28px"}}>About the program</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="Practitioners" style={{padding:"16px 28px"}}>Practitioners</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                  <Nav.Link eventKey="Schedule" style={{padding:"16px 28px"}}>Schedule</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Review" style={{padding:"16px 28px"}}>Review</Nav.Link>
                </Nav.Item>
              </div>
            </Nav>
            
            <Tab.Content className="description-review-bottom">  
            <Tab.Pane eventKey="About">
            <div className="row bg-light pb-5">
<div className="container">
            <div className="col-xl-12 p-5 justify-content-center align-items-center d-flex">
      <div>
{/* <h2 className="text-left" style={{fontSize: "36px",
  fontWeight: "600"}}>Experience based search engine.

  </h2> */}
<p className="text-left">Self-care interventions are tools which support the ability of individuals, families and communities to promote health, prevent disease, maintain health, and cope with illness and disability with or without the support of a health worker.
               For a long, healthy life, the six key lifestyle behaviors are getting enough sleep, eating a healthy diet, being physically active, maintaining a healthy body weight, not smoking, and limiting alcohol.</p>
               <div style={{display:"flex"}}>
<div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4" style={{marginRight:"10px"}}>
              <Link
                className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px"}}
                to={process.env.PUBLIC_URL + "/"}
              >
            Read More
              </Link>
            </div>
            <div className="video-popup-2" style={{marginTop:"17px"}}>
          <button  style={{ border: "none", backgroundColor: "#f8f9fa"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
        </div>
        </div>

            </div>
    </div>
    {/* <div className="col-xl-6 pr-0">
    <div class="tab-img-pos">
					<p class="slide-img-pos-p1">PREFERENCE BASED SEARCH</p>
					<p class="slide-img-pos-p2">Thinking about buying</p>
					<p class="slide-img-pos-p4">
					Based on your affordability AI will line up mortgage 
					providers and help you get the best rates possible. 
					AI will also help you complete the required contracts 
					and get you pre-appoved instantly.	
					</p>
					<div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
              <Link
                className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px"}}
                to={process.env.PUBLIC_URL + "/"}
              >
             Get Started
              </Link>
            </div>
					
				</div>
    </div> */}
  </div></div>
                </Tab.Pane> 
            <Tab.Pane eventKey="Practitioners">
            <div className="container">
            <div className="row bg-light align-items-center d-flex pb-5 ">

<div className="col-xl-6 p-5 justify-content-center d-flex">
<div>
<img
                      src={profileImage}
                      className="img-fluid"
                      alt=""
                    />
</div>
</div>
<div className="col-xl-6 pr-0">
  <h3>JERMAINE JOHNSON</h3>
<p className="text-left">London born and raised, Jermaine is driven by the belief that you make your own opportunities. From working as a professional dancer through building a brand as a fitness coach and now in his dream role at Rezingo, movement has always been at the heart of everything he does. But this isn’t just going with the flow—this is movement powered by a hunger to hustle. It’s about developing the determination and skill to navigate obstacles and always keep pushing forwards. With his focus and natural warmth, he helps people step out of their comfort zone but in tune with their own bodies—bringing them together to train hard whilst growing in confidence.
</p>
{/* <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
  <Link
    className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px"}}
    to={process.env.PUBLIC_URL + "/"}
  >
 Play Video  
  </Link>
</div> */}
</div>
</div>
</div></Tab.Pane> 
            <Tab.Pane eventKey="Schedule">
              <div className="container">
            {/* <Tab.Container defaultActiveKey="additionalInfo">
            <Nav variant="pills" className="description-review-topbar1">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  Week 1
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productDescription">
                  Week 2
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productReviews">
                  Week 3
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productweek4">
                  Week 4
                  </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo">
                <div className="row product-anotherinfo-wrapper day">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 2</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 3</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 4</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 5</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 6</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 7</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productDescription">
              <div className="row product-anotherinfo-wrapper day">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 8</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 9</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 10</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 11</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 12</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 13</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 14</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productReviews">
              <div className="row product-anotherinfo-wrapper day">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 15</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 16</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 17</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 18</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 19</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 20</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 21</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productweek4">
              <div className="row product-anotherinfo-wrapper day">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 22</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 23</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 24</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 25</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day mt-4">
                  <div className="col-md-2">
                   <h2 className="fs-25"> Day 26</h2>
                  </div>
                  <div className="col-md-6">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 27</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
                <div className="row product-anotherinfo-wrapper day rest bg-gray">
                  <div className="col-md-2 mt-2">
                   <h2 className="fs-25 text-gray"> Day 21</h2>
                  </div>
                  <div className="col-md-6 mt-2">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>                                       
                   </div>
                  </div>                  
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container> */}
          <div className="myaccount-area pb-80 pt-20">
          <div className="container">
            <div className="row">
            {/* <h3 className="text-center" style={{fontWeight:"500",fontSize:"28px"}}>Your Questions about REZINGO Skincare</h3>  */}
              <div className="ms-auto me-auto col-lg-9">
                <div className="myaccount-wrapper">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading">
                      Week 1
                      </Accordion.Header>
                      <Accordion.Body>
                      <Accordion>
                    <Accordion.Item eventKey="3" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 1
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper day align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 2
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper day align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 3
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>  
                    
                   </div>
                  
                  </div>
                  
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 4
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper day align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 5
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper day align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 6
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>  
                    
                   </div>
                  
                  </div>
                  
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 7
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>  
                    
                   </div>
                  
                  </div>
                  
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading">
                      Week 2
                      </Accordion.Header>
                      <Accordion.Body>
                      <Accordion>
                    <Accordion.Item eventKey="11" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 8
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper day align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="13" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 9
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>  
                    
                   </div>
                  
                  </div>
                  
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="15" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 10
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper day align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="16" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 11
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper day align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="17" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 12
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>  
                    
                   </div>
                  
                  </div>
                  
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="18" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 13
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>  
                    
                   </div>
                  
                  </div>
                  
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="12" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 14
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper day align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="19" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading">
                      Week 3
                      </Accordion.Header>
                      <Accordion.Body>
                      <Accordion>
                    <Accordion.Item eventKey="20" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 15
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper day align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="21" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 16
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper day align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="22" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 17
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>  
                    
                   </div>
                  
                  </div>
                  
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="23" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 18
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper day align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="24" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 19
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper day align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="25" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 20
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>  
                    
                   </div>
                  
                  </div>
                  
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="26" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 21
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>  
                    
                   </div>
                  
                  </div>
                  
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="27" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading">
                      Week 4
                      </Accordion.Header>
                      <Accordion.Body>
                      <Accordion>
                    <Accordion.Item eventKey="28" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 22
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper day align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="29" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading accordionborder">
                      Day 23
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper day align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="30" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading">
                      Day 24
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>  
                    
                   </div>
                  
                  </div>
                  
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="31" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading">
                      Day 25
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper day align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="32" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading">
                      Day 26
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper day align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                    <h1 className="fs-25">Lift & Burn </h1>
                    <div className="video-popup-2">
          <button  style={{ border: "none", backgroundColor: "#fff"}}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
              style={{ width: "35px", marginRight: "15px"}}
            />
          </button>  
          <p className="mt-1">50 mins</p>
        </div>
                   </div>
                  <div className="row mt-2"><p>Get ready to activate and mobilise those muscles with coach Nitheesh Ballal. Keep those dumbbells handy and join these sessions to lift and burn with coach Nitheesh.
                    </p> </div>
                  </div>
                  <div className="col-md-4">
                  <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_250,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4d0962a-3bcd-4b69-b699-926ccca93d7f"
                        className="img-fluid"
                        alt=""
                      />
                  </div>
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="33" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading">
                      Day 27
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>  
                    
                   </div>
                  
                  </div>
                  
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="34" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading">
                      Day 28
                      </Accordion.Header>
                      <Accordion.Body>
                      <div className="row product-anotherinfo-wrapper align-items-center d-flex">
                  {/* <div className="col-md-2">
                   <h2 className="fs-25"> Day 1</h2>
                  </div> */}
                  <div className="col-md-8">
                  <div className="row">
                  <h1 className="fs-25 text-gray">Rest Day</h1>  
                    
                   </div>
                  
                  </div>
                  
                </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
            </Tab.Pane> 
            <Tab.Pane eventKey="Review">
              <div className="container mt-3">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="review-wrapper">
                      <div className="single-review">
                        <div className="review-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/testimonial/1.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="review-left">
                              <button>Reply</button>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="single-review child-review">
                        <div className="review-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/testimonial/2.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="review-left">
                              <button>Reply</button>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="ratting-form-wrapper pl-50">
                      <h3>Add a Review</h3>
                      <div className="ratting-form">
                        <form action="#">
                          <div className="star-box">
                            <span>Your rating:</span>
                            <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Name" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Email" type="email" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="rating-form-style form-submit">
                                <textarea
                                  name="Your Review"
                                  placeholder="Message"
                                  defaultValue={""}
                                />
                                {/* <input type="submit" defaultValue="Submit" /> */}
                                <div className="slider-btn btn-hover d-lg-block mt-25">
                                      <button style={{backgroundColor:"#703ca2",color:"#fff",width:"100%",padding:"16px 28px",border:"none"}}> Submit </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </Tab.Pane>
            
            </Tab.Content>
            </Tab.Container></div>
            {/* <div class="tab-sec">
			<div class="container">
			  <ul class="nav nav-pills">
				<li class="active"><a data-toggle="pill" href="#tab1">buying</a></li>
				<li class=""><a data-toggle="pill" href="#tab2">selling</a></li>
				<li class=""><a data-toggle="pill" href="#tab3">renting</a></li>
				<li class=""><a data-toggle="pill" href="#tab4">investing</a></li>
				<li class=""><a data-toggle="pill" href="#tab5">VIRTUAL NEIGHBORHOOD</a></li>
			  </ul>
			</div>
		</div> */}
            </div></div>

            <div className="container-fluid mb-5 d-none d-xl-block">
          <div className="hero1 py-55">
            {/* <h1>This is a crab</h1>
            <p>I want an image of a crab behind this text.</p> */}
            <div class="box inner active">
              <div className="text sub-title">
                {/* <h2 className="wowo fadeInUp animated">Shop Our<br/>Products</h2> */}
                <div className="my-2">
                <Link
                className="animated link-text" 
                to="faq"
                activeClass="active"
                spy={true} 
                smooth={true}
                // to={process.env.PUBLIC_URL + "/"}
              >
                FAQ
              </Link>
              </div>
              <div className="my-2">
              <Link
                className="animated link-text" 
                to="shop"
                activeClass="active"
                spy={true} 
                smooth={true}
                // to={process.env.PUBLIC_URL + "/"}
              >
                Shop Now
              </Link></div><div className="my-2">
              <Link
                className="animated link-text" 
                to="expert"
                activeClass="active"
                spy={true} 
                smooth={true}
                // to={process.env.PUBLIC_URL + "/"}
              >
              Expert Review
              </Link></div>
              <div className="my-2">
              
              <Link
                className="animated link-text" 
                to="video"
                activeClass="active"
                spy={true} 
                smooth={true}
                // to={process.env.PUBLIC_URL + "/"}
              >
                Watch Video
              </Link>

              
              </div>
              <div className="my-2">
              <Link
                className="animated link-text" 
                to="blog"
                activeClass="active"
                spy={true} 
                smooth={true}
                // to={process.env.PUBLIC_URL + "/"}
              >
                Read Blog
              </Link>
              </div>
                {/* <div className="links wowo fadeInUp animated">
                

                <Link
                className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px",textTransform:"uppercase"}}
                to={process.env.PUBLIC_URL + "/shop"}
              >
                Shop Now
              </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        
<div className="container-fluid my-5">
{/* <div class="tab-sec">
			<div class="container">
			  <ul class="nav nav-pills">
				<li class="active"><a data-toggle="pill" href="#tab1">buying</a></li>
				<li class=""><a data-toggle="pill" href="#tab2">selling</a></li>
				<li class=""><a data-toggle="pill" href="#tab3">renting</a></li>
				<li class=""><a data-toggle="pill" href="#tab4">investing</a></li>
				<li class=""><a data-toggle="pill" href="#tab5">VIRTUAL NEIGHBORHOOD</a></li>
			  </ul>
			</div>
		</div> */}
        {/* <div class="tabbable-panel">
				<div class="tabbable-line">
					<ul class="nav nav-tabs ">
						<li class="active">
							<a href="#tab_default_1" data-toggle="tab">
Company or Individual </a>
						</li>
						<li>
							<a href="#tab_default_2" data-toggle="tab">
Report title & Category </a>
						</li>
						<li>
							<a href="#tab_default_3" data-toggle="tab">
Your Reports </a>
						</li>
          <li>
							<a href="#tab_default_4" data-toggle="tab">
Documents </a>
						</li>
            <li>
							<a href="#tab_default_5" data-toggle="tab">
T&C </a>
						</li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane active" id="tab_default_1">
							<p>
 Tab 1.
							</p>
							<p>
								lorem
							</p>
							</div>
						<div class="tab-pane" id="tab_default_2">
							<p>
Tab 2.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</p>

						</div>
						<div class="tab-pane" id="tab_default_3">
							<p>
Tab 3.
							</p>
							<p>
Consectetur deleniti quisquam natus eius commodi.
							</p>

						</div>
           <div class="tab-pane" id="tab_default_4">
							<p>
Tab 4.
							</p>
							<p>
Consectetur deleniti quisquam natus eius commodi.
							</p>

						</div><div class="tab-pane" id="tab_default_5">
							<p>
Tab 5.
							</p>
							<p>
Consectetur deleniti quisquam natus eius commodi.
							</p>

						</div>
					</div>
				</div>
			</div> */}

          </div>
      {/* <div className="justify-content-center d-flex my-5">
                      <img
                        src={"https://lyma.life/assets/images/supplement/hero-sub-health@2x.webp"}
                        style={{width:"60%"}}
                        alt=""
                      /></div> */}



{/* 
<div className="container-fluid">
  
  <div className="row align-items-center d-flex bg-light">
  <div className="col-xl-6 pr-0">
    <img
                      src={outdoor}
                      className="img-fluid"
                      alt=""
                    />
    </div>
    <div className="col-xl-6 p-5 justify-content-center d-flex">
      <div style={{width:"55%"}}>
<h2 className="text-left" style={{fontSize: "36px",
  fontWeight: "600"}}>Experience based search engine.

  </h2>
<p className="text-left">The Rezingo Supplement Starter Kit includes 30-day supply, copper storage vessel and membership that gives access to member pricing and benefits.</p>
<div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
              <Link
                className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px"}}
                to={process.env.PUBLIC_URL + "/"}
              >
             Play Video  
              </Link>
            </div></div>
    </div>
    
  </div>
</div> */}


        <div className="myaccount-area pb-80 pt-20" id="faq">
          <div className="container">
            <div className="row">
            <h3 className="text-center" style={{fontWeight:"500",fontSize:"28px"}}>Your Questions about REZINGO Skincare</h3>
              <div className="ms-auto me-auto col-lg-9">
                <div className="myaccount-wrapper2">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading">
                      <span>1 .</span>What is the difference between Pre-Qualification and Pre-Approval?
                      </Accordion.Header>
                      <Accordion.Body>
                      Self-care interventions are tools which support the ability of individuals, families and communities to promote health, prevent disease, maintain health, and cope with illness and disability with or without the support of a health worker. For a long, healthy life, the six key lifestyle behaviors are getting enough sleep, eating a healthy diet, being physically active, maintaining a healthy body weight, not smoking, and limiting alcohol.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading">
                          <span>2 .</span> How can I get Pre-Approved instantly?
                      </Accordion.Header>
                      <Accordion.Body>
                      Self-care interventions are tools which support the ability of individuals, families and communities to promote health, prevent disease, maintain health, and cope with illness and disability with or without the support of a health worker. For a long, healthy life, the six key lifestyle behaviors are getting enough sleep, eating a healthy diet, being physically active, maintaining a healthy body weight, not smoking, and limiting alcohol.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="single-my-account mb-20">
                      <Accordion.Header className="panel-heading">
                          <span>3 .</span> Can I digitally sign the documents online?
                      </Accordion.Header>
                      <Accordion.Body>
                      Self-care interventions are tools which support the ability of individuals, families and communities to promote health, prevent disease, maintain health, and cope with illness and disability with or without the support of a health worker. For a long, healthy life, the six key lifestyle behaviors are getting enough sleep, eating a healthy diet, being physically active, maintaining a healthy body weight, not smoking, and limiting alcohol.
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
 



        <div className="container-fluid mb-5" id="shop">
          <div className="hero py-55">
            {/* <h1>This is a crab</h1>
            <p>I want an image of a crab behind this text.</p> */}
            <div class="box inner active">
              <div className="text sub-title">
                <h2 className="wowo fadeInUp animated">Shop Our<br/>Products</h2>
                <p className="wowo fadeInUp margin-30 animated">Choose wide range of products </p>
                <div className="links wowo fadeInUp animated">
                {/* <a href="/laser/how-to-use/" className="btn btn-bg-white">Watch Tutorials</a> */}

                <Link
                className="animated" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px",textTransform:"uppercase"}}
                to={process.env.PUBLIC_URL + "/shop"}
              >
                Shop Now
              </Link>
                </div>

                {/* <div className="funfact-btn funfact-btn-violet btn-hover mt-4" style={{marginRight:"10px"}}>
              <Link
                className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px"}}
                to={process.env.PUBLIC_URL + "/"}
              >
            Read More
              </Link>
            </div> */}
              </div>
            </div>
          </div>
        </div>


        <div className="blockquote-block bg-white" id="expert">
          <div className="container wowo fadeInUp animated">
          <div className="blockquote-block__body">
          <div className="blockquote-block__left">
          <h3>Expert Reviews</h3>
          <div className="mobile">
          <blockquote>"Rezingo provides practice techniques in industry standard"</blockquote>
          </div>
          <div className="media__img">
          <img src="https://lyma.life/assets/images/laser/expert-review-graeme_glass@2x.webp" className="img-fluid" alt=""/>
          </div>
          <h4>Joshua Aaron</h4>
          <p>Specialist in Physical fitness</p>
          </div>
          <div className="blockquote-block__right desktop">
          <blockquote>"Rezingo provides practice techniques in industry standard"</blockquote>
          </div>
          </div>
          </div>
        </div>


        <div className="container-fluid bg-gray py-4 mb-5" id="video">
  <h5 className="text-center pt-3">Case Studies</h5>
  <h2 className="text-center pt-3 text-bold video-test">
  How To Cope With Menopause. Emma's Story
  </h2>
  <div className="justify-content-center d-flex iframe">
  <iframe
      width="853"
      height="480"
      src={`http://videos.ctfassets.net/7vk8puwnesgc/3xtIZ0QBOjuucR0zJQBrk9/570ed2a59d8d3477bdff584816b18ac1/230021_WEB_Ungated-content-Banners_2023_Stretching_003_Desktop.mp4`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    </div>
    
    <div className="iframe1"><a href="/wellness" style={{textDecoration: "underline"}}>READ MORE</a></div>
    
        </div>


        <ImageSliderOne />
        
    </div>
  );
};

YogaDetail.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  bgImg: PropTypes.string,
  image: PropTypes.string,
  dateTime: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default YogaDetail;
