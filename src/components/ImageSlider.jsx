import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import images from "../data/images";
import { TbArrowBigRightLines, TbArrowBigLeftLines } from "react-icons/tb";
const ImageSlider = ({ english, setEnglish }) => {
  const [width, setWidth] = useState(0);
  const slider = useRef();
  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);
  return (
    <div>
      <motion.div ref={slider} className="slider">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="slider__inner"
        >
          {images.map((image, index) => {
            return (
              <motion.div className="slider__items" key={index}>
                <div className="slider__item">
                  <img src={image.src} alt="" />
                  <p className="slider__text">
                    {!english ? image.textPl : image.textEn}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <div className="slider__icon-wrapper">
        <TbArrowBigLeftLines className="slider__icon slider__icon-left" />
        <TbArrowBigRightLines className="slider__icon slider__icon-right" />
      </div>
    </div>
  );
};

export default ImageSlider;
