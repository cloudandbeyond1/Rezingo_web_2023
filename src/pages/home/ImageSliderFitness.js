import Swiper, { SwiperSlide } from "../../components/swiper";
import { EffectFade } from 'swiper';
import imageData from "../../data/image-slider/image-slider-fitness.json";
import ImageSliderFitnessSingle from "../../components/image-slider/ImageSliderFitnessSingle";
const params = {
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    modules: [EffectFade],
    loop: true,
    speed: 1000,
    navigation: true,
    autoHeight: false
  };
const settings = {
  loop: false,
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

const ImageSliderFitness = () => {
  return (
    <div className="image-slider-area" style={{backgroundColor:"#fafafa",marginBottom:"50px"}}>
      <div style={{height:"50px"}}></div>
      {/* <div>
        <h2 style={{fontSize: "12px",lineHeight: "16px",textAlign:"center", letterSpacing: "1px", marginBottom: "30px"}}>RELATED ARTICLES</h2>
      </div> */}
      <div className="image-slider-active" style={{marginBottom:"100px"}}>
        {imageData && (
          <Swiper options={settings}>
            {imageData.map((single, key) => (
                <SwiperSlide key={key}>
                  <ImageSliderFitnessSingle
                    data={single}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
      <div style={{height:"1px"}}></div>
    </div>
  );
};

export default ImageSliderFitness;
