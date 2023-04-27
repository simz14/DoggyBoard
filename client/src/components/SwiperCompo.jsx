import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Swiper, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import PropTypes from "prop-types";

const BckWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #00000078;
  z-index: 99999999;
`;

const SwiperWrap = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;
  ${({ swiperName }) =>
    swiperName
      ? `.${swiperName} {height:100%;width:100%;position:relative}`
      : null}
  .swiper-button-next,.swiper-button-prev {
    color: #edebe7;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: medium;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.mediumPurple};
    background-color: white;
    padding: 1rem 1.2rem;
    border-radius: 100px;
  }
  img {
    height: 100%;
    object-fit: cover;
    max-height: 30rem;
    justify-self: center;
    align-self: center;
  }
  .swiper-slide {
    display: grid;
  }
`;

const SwiperComp = ({ images, swiperName, imageIndex }) => {
  const [swiper, setSwiper] = useState();
  const refImg = useRef(null);
  const refBcg = useRef(null);
  console.log(images);
  useEffect(() => {
    setSwiper(
      new Swiper(refImg.current, {
        loop: true,
        slidesPerView: "1",
        centeredSlides: true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        modules: [Navigation],
      })
    );
  }, []);

  const handleClickAway = (e) => {
    console.log(e.target, refImg.current, refBcg.current);
  };

  return (
    <BckWrap>
      <SwiperWrap
        ref={refBcg}
        onClick={(e) => handleClickAway(e)}
        swiperName={swiperName}
      >
        <div ref={refImg} className={swiperName}>
          <div className="swiper-wrapper">
            {images?.map((image) => {
              return (
                <div key={image.id} className="swiper-slide">
                  <img src={image.src} alt="" />
                </div>
              );
            })}
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </SwiperWrap>
    </BckWrap>
  );
};

SwiperComp.propTypes = {
  images: PropTypes.array,
  swiperName: PropTypes.string.isRequired,
};

export default SwiperComp;
