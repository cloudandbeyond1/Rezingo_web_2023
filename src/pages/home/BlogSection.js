import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import BrandLogoOneSingle from "../../components/brand-logo/BrandLogoOneSingle";
import Swiper, { SwiperSlide } from "../../components/swiper";
import brandLogoData from "../../data/brand-logos/brand-logo-one.json";
import { useLocation } from "react-router-dom";
import ImageSliderOne from "./ImageSliderOne";
import '../../assets/css/blog.css';
import Accordion from "react-bootstrap/Accordion";
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
const BlogSection = ({
  spaceBottomClass,  
  product
}) => {
  let { pathname } = useLocation();
  return (
    <div className={clsx("product-area")} style={{paddingTop: "5px", background: "#fff", position: "relative", zIndex: "2",paddingBottom: "1px"}}>
  <div className="container my-5">
    <div className="row">
    <div className="col-lg-8">
    <div>
    <h2 className="h2-style">Taking skin from lacklustre to luminous is all in a day’s work for A-list aesthetician, Joanna Czech</h2> 
    <div style={{height: "42px"}}></div>
     <div style={{display: "flex",justifyContent: "space-between", padding: "19px 0 14px", borderBottom: "1px solid #979797", borderTop: "1px solid #979797"}}>
        <p style={{fontSize: "14px",
    lineHeight: "1.43",
    marginBottom:" 0"}}>
            <span style={{display: "inline-block", minWidth: "111px", paddingRight: "10px"}}>
            4 Minute Read
            </span>
            How To by
            <Link>Jessica Lacey</Link>
        </p>
        <p>11.03.23</p>
     </div>
     <div style={{height: "42px"}}></div>
       <div className="div">
       <p style={{textAlign:"justify"}}>
        When it comes to red carpet skin confidence, Joanna Czech is the only number on the A-list’s speed dial. Her universal success at transforming the overtreated, stressed, sensitive skins of her dedicated elite, makes her much beloved. But after decades of using every skincare formulation and beauty device in existence, she’s pushing the needle by developing a brand new bespoke Joanna Czech facial using the REZINGO Laser. In true Joanna style, she’s launching this exclusive laser facial treatment this Oscars weekend from her pop-up skin studio in a secluded suite of L’Ermitage Beverly Hills, so that Hollywood’s finest faces can get first dibs.
        </p>
       </div>
       
  <h3 className="title">Woman at work: the best tools in the business</h3>
  <div className="div">
  <p style={{textAlign:"justify"}}>
  Those who haven’t experienced the eponymous Joanna Czech facial technique firsthand, will likely have purchased the Joanna Czech Facial Massager in a bid to recreate her skin wizardry. Massage is a major part of how Czech creates that sculpted, sumptuous skin. Czech loves a skin skin gadget too and will switch seamlessly from ultrasound to microcurrent, slathering on a bespoke serum in-between. But it’s the REZINGO Laser that’s achieving remarkable results for both her A-list and in-clinic clients. “The REZINGO Laser is the most effective skin tool I know of that’s suitable for at-home use. In my 37 years of experience, I have never seen anything so powerful, or able to deliver such amazing results. With it, you can bring salon skin treatments into your home.”
  </p>
  <p style={{textAlign:"justify"}}>
  Rather than traditional laser skin rejuvenation which strictly forbids other aesthetic techniques or skincare, the REZINGO Laser enhances every other effort you make with your skin. “For technologies, I love using the REZINGO Laser because not only does it tackle all skin issues, helping my clients achieve their skin goals, but it also improves the performance of other products used by pushing other products deeper into the skin. I have seen huge benefits from using the REZINGO Laser in combination with my C+ Serum and Soothing Serum,” lauds Czech.
  </p>
  <p style={{textAlign:"justify"}}>
  Ahead of the imminent Joanna Czech X REZINGO facial we grilled Czech on how to use your REZINGO Laser to recreate her results in your own at-home treatment.
  </p>
  </div>
  <div className="justify-content-center d-flex my-5">
                      <img
                        src={"/assets/img/blog/Secondary_Facial.jpg"}
                        alt=""
                      style={{width:"100%"}}
                      /></div>
  <h3 className="title" >Q. When you start a facial, what are you looking at?</h3>
  <div className="div">
  <p style={{textAlign:"justify"}}>
  “What we address in my facials are skin conditions, which are what we acquire through external factors such as UV exposure, climate, and lifestyle. These conditions can be dehydration, premature aging, blemishes, hyperpigmentation, skin redness, etc. Every single facial that I perform is different because not everyone needs the same treatment. I analyze the client's skin on the day of their treatment and then plan my course of action from there. Every client experiences a completely customized facial unique to their skin concerns and goals on any given day.”
  </p>
  </div>
  <h3 className="title" >Q. How much improvement can facials have on our skin’s appearance?</h3>
  <div className="div">
  <p style={{textAlign:"justify"}}>
  “I truly believe that good skin is based on 70% of your lifestyle and 30% of your skincare. I like using The REZINGO laser because it tackles all major skin concerns and helps my clients achieve their skin goals. There are billions of cells in the dermis which degenerate over time and the REZINGO Laser reverses this process by repairing the cells. It reaches the deepest layers of the skin, including fat and muscle, which is why I recommend it for all my clients no matter their age.”
  </p>
  </div>
  <h3 className="title" >Q. What’s a golden rule of the Joanna Czech facial technique?</h3>
  <div className="div">
  <p style={{textAlign:"justify"}}>
  “Don’t ever forget to care for your neck, chest and hands. The lipidic layer on the neck and chest is reduced by 30-40 percent, which means these areas have fewer sebaceous glands and will show aging before the face. So, when you take care of your body, always treat your neck, décolleté and hands. Then again, when you take care of your face, include those areas, too. This way, the weaker places get double treatment.” Used consistently over just a few months, the REZINGO Laser fades out neck wrinkles and smoothes out any signs of crepey decolletage from sun damage.
  </p>
  </div>
  <div className="justify-content-center d-flex my-5">
     <img src={"/assets/img/blog/Secondary_Kate.jpg"} alt="" style={{width:"100%"}}/>
  </div>
<h3 className="title" >JOANNA CZECH X REZINGO OSCARS FACIAL</h3>
  <div className="div">
  <p style={{textAlign:"justify"}}>
  Our customized REZINGO treatment begins with sculpting and lifting manual massage, followed by exfoliation and a combination of targeted serums chosen for your skin's needs on that day. Afterwards, REZINGO Laser is used to improve skin elasticity, reduce pigmentation, brighten and push products more deeply into the skin. Each facial will incorporate one or more modalities, which may include various forms of microcurrent, ultrasound, cryotherapy, oxygen infusion, serums as well as masks. Every facial finishes with powerful rejuvenating LED therapy with negative ions.
  </p>
  </div>              
  <h3 className="title" >Joanna Czech’s guide to Oscar worthy skin at home</h3>
  <div className="div">
  <p style={{textAlign:"justify"}}>
  In search of more guidance? Joanna Czech gives us her step by step guide to getting the most from the REZINGO Laser at home.
  </p>
 
  <ul>
    <li className="lidot">
        <p style={{marginBottom:"16px",marginTop:"-40px"}}>
        Always start with the 
        <Link style={{textDecoration:"underline",marginRight:"5px",marginLeft:"5px"}}>REZINGO Oxygen Mist</Link>
        . I use about six sprays.
        </p>
    </li>
    <li className="lidot">
        <p style={{marginBottom:"16px",marginTop:"-40px",textAlign:"justify"}}>
        Follow with two pumps of
        <Link style={{textDecoration:"underline",marginRight:"5px",marginLeft:"5px"}}>REZINGO Oxygen Glide</Link>
        . Apply with a nice press and release motion.
        </p>
    </li>

    <li className="lidot">
        <p style={{marginBottom:"16px",marginTop:"-40px",textAlign:"justify"}}>
        <Link style={{textDecoration:"underline",marginRight:"5px",marginLeft:"5px"}}>Turn the laser on.</Link>
        I use very slow movements - 10 minutes on one side of my face, 10 minutes on the other and a final 10 minutes on my neck.
        </p>
    </li>

    <li className="lidot">
        <p style={{marginBottom:"16px",marginTop:"-40px",textAlign:"justify"}}>
        To treat a particular area, for instance crow's feet, make sure you’re holding the Laser directly at the area that you are addressing and hold it right there for about 5 minutes.
        </p>
    </li>
  </ul>
  </div> 
  <div className="pad1">
  <p style={{marginBottom:"16px",textAlign:"justify"}}>Be consistent. Do it every single day for about three months. This is what professionals call the cumulative
        <Link style={{textDecoration:"underline",marginRight:"5px",marginLeft:"5px"}}>results of a treatment.</Link>
        </p>
    </div> 
    <div style={{height: "42px"}}></div>
    <div className="slider-btn  funfact-btn funfact-btn-violet btn-hover mt-4 pad2">
                <Link
                  className="animated px-5" style={{backgroundColor:"#703ca2",color:"#fff",padding:"10px"}}
                  to={process.env.PUBLIC_URL + "/wellness"}
                >
                THE REZINGO LASER
                </Link>
              </div>
              <div style={{height: "70px"}}></div>
              <div className="pad1">
                <h2 style={{fontSize: "18px", lineHeight: "1.44", marginBottom: "16px"}}>Share This Page</h2>
                <div style={{display:"flex"}}>
                <div class="contact-icon"><i class="fa fa-twitter icon1"></i></div>
                <div class="contact-icon"><i class="fa fa-facebook icon1"></i></div>
                <div class="contact-icon"><i class="fa fa-pinterest icon1"></i></div>
                <div class="contact-icon"><i class="fa fa-linkedin icon1"></i></div>
                </div>
              
              </div>
  </div>
    </div>
    <div className="col-lg-2"></div>
    <div className="col-lg-1"  style={{marginTop:"20px"}}
onScroll={handleScroll}>
    <div className="sidebar__block sidebar__block_style_1">
{/* <aside className="scroll-to-follow" style={{bottom: "inherit",top: "0px",}}>
<div className="media__img make">
<img src="https://REZINGO.life/assets/images/img-1.png" alt="" className="img-style2"/>
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
</aside> */}
<div className="myaccount-area pb-80 pt-20 hide1" >
          <div className="container">
            <div className="row">
            <h3 className="text-center" style={{fontWeight:"500",fontSize:"28px"}}>Glossary</h3>
            <div style={{borderBottom: "1px solid #979797", borderTop: "1px solid #979797"}}>

           
              <div className="ms-auto me-auto col-lg-9">
                <div className="myaccount-wrapper1">
                  <Accordion>
                    <Accordion.Item eventKey="0" className="single-my-account mb-20" style={{border:"none",marginBottom:"0px"}}>
                      <Accordion.Header className="panel-heading">
                      Joanna Czech
                      </Accordion.Header>
                      <Accordion.Body style={{textAlign:"justify"}}>
                      An industry leading beautician with high profile clients, offering luxurious aesthetic services that include highly innovative technologies and timeless techniques.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
</div>
    </div>
    </div>
</div>
      <div style={{height: "40px"}}></div>
        <ImageSliderOne />
    </div>
  );
};

BlogSection.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  bgImg: PropTypes.string,
  image: PropTypes.string,
  dateTime: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default BlogSection;



