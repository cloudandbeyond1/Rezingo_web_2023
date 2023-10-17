import { Fragment } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getPrograms } from "../../helpers/program";
import programs from "../../data/fitness.json";
import { useState } from "react";
import FitnessGridSingle from "../../components/Program/FitnessGridSingle";
import Swiper, { SwiperSlide } from "../../components/swiper";
import { EffectFade } from 'swiper';
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
const FitnessGrid = ({
  spaceBottomClass,
  category,
  type,
  limit
}) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  
  const { products } = useSelector((state) => state.product);
//   const { programs } = useSelector((state) => state.program);
  console.log(programs,"programs")
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const prods = getPrograms(programs, category, type, limit,inputText)

  const handleChangeevent = () => {
  if(inputText.length>0)
  {
    console.log(inputText,"txt");
   prods = () => {
    getPrograms(programs, category, type, limit,inputText)
  };
  console.log(prods,"prods1");
}

  }
console.log(prods,"prods");
  return (
    <Fragment>
          <div className="image-slider-area" style={{backgroundColor:"#fafafa"}}>
         <div style={{height:"50px"}}></div>
      <div className="image-slider-active physicalsliderGrid">
        <Swiper options={settings}>
      {prods?.map(product => {
        return (
            <SwiperSlide>
          <div key={product.id}>
            <FitnessGridSingle
              spaceBottomClass={spaceBottomClass}
              product={product}
              currency={currency}
              cartItem={
                cartItems.find((cartItem) => cartItem.id === product.id)
              }
              wishlistItem={
                wishlistItems.find(
                  (wishlistItem) => wishlistItem.id === product.id
                )
              }
              compareItem={
                compareItems.find(
                  (compareItem) => compareItem.id === product.id
                )
              }
            />
          </div>
          </SwiperSlide>
        );
      })}
      </Swiper>
      </div>
      </div>
    </Fragment>
  );
};

FitnessGrid.propTypes = {
  spaceBottomClass: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number
};



export default FitnessGrid;
