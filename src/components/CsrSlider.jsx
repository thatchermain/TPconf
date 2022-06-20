import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import cards from "../data/csr";
import { TbArrowBigRightLines, TbArrowBigLeftLines } from "react-icons/tb";

const CsrSlider = ({ english, setEnglish }) => {
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
          {cards.map((card, index) => {
            return (
              <motion.div className="slider__items" key={index}>
                <div className="slider__item--csr">
                  <h6 className="slider__title">
                    {!english ? card.titlePl : card.titleEn}
                  </h6>
                  <p className="slider__info">
                    {" "}
                    {!english ? card.infoPl : card.infoEn}
                  </p>
                  <p className="slider__hashtag text-gradient">{card.hash}</p>
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

export default CsrSlider;
