import { EffectFade } from 'swiper';
import Swiper, { SwiperSlide } from "../../components/swiper";
import WellnessSliderData from "../../data/hero-sliders/hero-slider-wellness.json";
 import HeroSliderWellnessSingle from '../../components/hero-slider/HeroSliderWellnessSingle';
 import sliderData from "../../data/hero-sliders/hero-slider-wellnessnew.json";
 import clsx from "clsx";
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

const HeroSliderWellness = ({ spaceLeftClass, spaceRightClass }) => {
  return (
    <div className={clsx("slider-area", spaceLeftClass, spaceRightClass)}>
      <div className="slider-active nav-style-1">
        {sliderData && (
          <Swiper options={params}>
            {sliderData.map((single, key) => (
              <SwiperSlide key={key}>
                <HeroSliderWellnessSingle
                  data={single}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default HeroSliderWellness;
