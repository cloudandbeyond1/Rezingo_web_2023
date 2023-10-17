import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import BrandLogoOneSingle from "../../components/brand-logo/BrandLogoOneSingle";
import Swiper, { SwiperSlide } from "../../components/swiper";
import brandLogoData from "../../data/brand-logos/brand-logo-one.json";
import { useLocation } from "react-router-dom";
import ImageSliderOne from "./ImageSliderOne";
import '../../assets/css/beauty.css';
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
const settings = {

    loop: true,
  
    autoplay: true,
  
    grabCursor: true,
  
    breakpoints: {
  
      320: {
  
        slidesPerView: 2
  
      },
  
      640: {
  
        slidesPerView: 3
  
      },
  
      768: {
  
        slidesPerView: 4
  
      },
  
      1024: {
  
        slidesPerView: 5
  
      }
  
    }
  
  };

  const handleScroll = (e) => {
    
    console.log(e.currentTarget.scrollTop);

    console.log(e.currentTarget.offsetHeight);

  };
const BeautyTopSection = ({
  spaceBottomClass,  
  product
}) => {
  let { pathname } = useLocation();
  return (
    <div className={clsx("product-area")}>
      <div className="container-fluid justify-content-center d-flex mt-5">
      <h2 className="h2-style">When your skin glows, hair bounces and nails are strong, you</h2>
    
      </div>
      <div>
        <h2 className="h2-style">have the confidence of knowing you look your absolute best</h2>
      </div>

      <div className="justify-content-center d-flex my-5">
                      <img
                        src={"/assets/img/slider/beauty2.jpg"}
                        alt=""
                        className="img-style"
                      /></div>
<div className="container my-5">
    <div className="row">
    <div className="col-lg-8">
    <div>
  <h3 className="title">Can I Get Stronger Skin, Hair and Nails Naturally?</h3>
  <p>
  Your hair, skin and nails thrive on being fed with the nutrients they need for healthy growth. Not all of these can be gained from a healthy diet and supplementing with proven ingedients can make a massive difference. With no studies to suggest that ingestible collagen works, we identified a patented beauty ingredient that feeds not just your hair and nails but also your skin. Multiple studies show it can deliver 80% stronger nails, 20% increase in hair structure and growth, 80% smoother skin and a 12% increase in wrinkle reduction.
  </p>
  <h3 className="title">Will Our Proven Keratin Help You?</h3>
  <p>
  Our patented beauty ingredient is a variant of keratin and is the most effective around, derived from sources that match human amino profiles. This means it's easier for the body to absorb. Over time, keratin delivers the triple whammy of restoring hair to its former lustre, strengthening nails, and smoothing out skin, leaving you looking and feeling your best.
  </p>
  <h3 className="title">Gain the Beauty Advantage</h3>
  <p>
  It's not myth, it's fact: REZINGO can help your skin, hair and nails. Proven in independent peer-reviewed scientific papers. REZINGO's proven beauty benefits will give you the advantage you're looking for.
  </p>
  <h3 className="title">How REZINGO Can Help You</h3>
  <p>
  To discover more about looking your best, speak to our Concierge today to arrange a consultation.
  </p></div>
    </div>
    <div className="col-lg-2"></div>
    <div className="col-lg-1"  style={{marginTop:"20px"}}
onScroll={handleScroll}>
    <div className="sidebar__block sidebar__block_style_1">
<aside className="scroll-to-follow" style={{bottom: "inherit",top: "0px",}}>
<div className="media__img make">
<img src="https://lyma.life/assets/images/img-1.png" alt="" className="img-style2"/>
</div>
<div className="sidebar__text make2">
<h4>Make Your Move</h4>
<p>Buy or subscribe.</p>
<div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
                <Link
                  className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px"}}
                  to={process.env.PUBLIC_URL + "/wellness"}
                >
                 Shop Now
                </Link>
              </div>
</div>
</aside>
</div>
    </div>
    </div>
    


  



</div>
<div className="container-fluid bg-gray py-4">
  <h5 className="text-center pt-3">Case Studies</h5>
  <h2 className="text-center pt-3 text-bold video-test">
One Woman's Plan to Retain Thick Hair, Strong Nails and Glowing Skin
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
  <div style={{height: "40px"}}></div>
  <div className="container-fluid">
    <div className="row align-items-center d-flex">
      <div className="col-xl-6 kit" style={{paddingBottom:"30px"}}>
        <div >
<h2 className="text-left" style={{
    fontSize: "28px",
    lineHeight: "1.21",
    marginBottom: "9px",
    fontWeight: "600"}}>The Rezingo Supplement Starter Kit</h2>
<p className="text-left text">The Rezingo Supplement Starter Kit includes 30-day supply, copper storage vessel and membership that gives access to member pricing and benefits.</p>
<p style={{ fontSize: "18px",lineHeight: "1.44",color: "#2e2e2e"}}>Monthly subscription from £149/GBP</p>
<div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4">
                <Link
                  className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px"}}
                  to={process.env.PUBLIC_URL + "/wellness"}
                >
                 Shop Now
                </Link>
              </div></div>
      </div>
      <div className="col-xl-6">
      <img
                        src={"https://lyma.life/assets/images/supplement/supplement-start-kit@2x.webp"}
                        className="img-fluid"
                        alt=""
                      />
      </div>
    </div>
  </div>
  <div style={{height: "60px"}}></div>
  <div className="brand-logo-active BrandLogoOneSingle1">

          {brandLogoData && (

            <Swiper options={settings}>

              {brandLogoData.map((single, key) => (

                <SwiperSlide key={key}>

                  <BrandLogoOneSingle

                    data={single}

                    spaceBottomClass="mb-30"

                  />

                </SwiperSlide>

              ))}

            </Swiper>

          )}

        </div>
        <TestimonialOne

        spaceTopClass="pt-100"

        spaceBottomClass="pb-100"

        />
        <div style={{height: "40px"}}></div>
        <ImageSliderOne />
    </div>
  );
};

BeautyTopSection.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  bgImg: PropTypes.string,
  image: PropTypes.string,
  dateTime: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default BeautyTopSection;



//218*300