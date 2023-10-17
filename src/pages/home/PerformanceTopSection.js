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
const PerformanceTopSection = ({
  spaceBottomClass,  
  product
}) => {
  let { pathname } = useLocation();
  return (
    <div className={clsx("product-area")}>
      <div className="container-fluid justify-content-center d-flex mt-5">
      <h2 className="h2-style">The joy of being on point. How clarity, focus and mental dexterity </h2>
    
      </div>
      <div>
        <h2 className="h2-style">can help you excel at the things you care about</h2>
      </div>

      <div className="justify-content-center d-flex my-5">
                      <img
                        src={"/assets/img/slider/performance2.jpg"}
                        alt=""
                        className="img-style"
                      /></div>
<div className="container my-5">
    <div className="row">
    <div className="col-lg-8">
    <div>
  <h3 className="title">Sharpen Up</h3>
  <p>
  Our mental and physical performance are inextricably entwined. It's hard to feel at our peak if our attention span, memory or ability to focus are out of step. These abilities vary over the course of our lives as age, stress, sleep and hormones impact our brain's activity.
  </p>
  <h3 className="title">Feed Your Brain</h3>
  <p>
  Our brain is just like every other organ in our body: it needs a supply of good nutrients. Actually, your brain is your most hungry organ, consuming 20% of your energy, so it is vital it is well fed. Stimulants like caffeine help in the short term, but operate by borrowing Peter to pay Paul: increasing dopamine while simultaneously depleting reserves.
  </p>
  <h3 className="title">Gain Your Advantage</h3>
  <p>
  When we think about the factors that contribute to performance, we rarely give much consideration to food. Food has a direct impact on our cognitive performance, which is why a poor decision at lunch can derail an entire afternoon. Research indicates that eating fruits and vegetables throughout the day isn't simply good for the body, it's also beneficial for the mind. Good fats are also essential to stimulate productivity. Choosing a proven supplement will give you the advantage.
  </p>
  <h3 className="title">How REZINGO Can Help You</h3>
  <p>
  Everyone can reach their peak performance. To improve your mental acuity and fulfil your physical potential, speak to our Concierge today to arrange a consultation.
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
  How To Operate At Peak Performance. James's Story
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

PerformanceTopSection.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  bgImg: PropTypes.string,
  image: PropTypes.string,
  dateTime: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default PerformanceTopSection;



//218*300