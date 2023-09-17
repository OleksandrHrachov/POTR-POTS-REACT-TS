import React, { FC } from 'react';
import './Materials.scss';
import materialsImg from '../../../images/materials.png';
import materialsImgDesktop from '../../../images/materials--desktop.png';

export const Materials: FC = () => {
  return (
    <section className="container materials__container">
      <section className="materials">
        <div className="materials__container-inner">
          <h1 className="title materials__top-title">
            Materials and
            <br />
            Features
          </h1>

          <div className="materials__eco-description">
            <p className="materials__eco-description-title">
              Environmentally friendly
            </p>
            <p className="materials__eco-description-text">
              All materials used in our pots are made from
              <span className="materials__eco-description-text--bold">
                100% recycled materials
              </span>
              and are
              <span className="materials__eco-description-text--bold">
                100% recyclable at the end of life
              </span>
              (should you ever choose to get rid of your POTR!). All materials
              have been sourced from within Europe to reduce our carbon
              footprint when transporting the raw materials, and all
              manufacturing is carried out in the UK.
            </p>
          </div>
          <div className="materials-wrapper">
            <div className="materials__img-wrapper">
              <img
                className="img materials-img"
                srcSet={`${materialsImg} 768w, ${materialsImgDesktop} 1024w`}
                src={materialsImg}
                alt="materials"
              />
            </div>

            <div className="materials__description-1">
              <button
                type="button"
                className="materials__description-btn materials__description-btn-1"
              ></button>
              <span className="materials__description-text materials__description-text-1">
                1 We have chosen Bobbiny recycled cotton cord to use as our draw
                string and wicking cord. Not only is it 100% recycled, it looks
                great and works really well at wicking water.
              </span>
            </div>
            <div className="materials__description-2">
              <button
                type="button"
                className="materials__description-btn materials__description-btn-2"
              ></button>
              <span className="materials__description-text materials__description-text-2">
                2 We have chosen Bobbiny recycled cotton cord to use as our draw
                string and wicking cord. Not only is it 100% recycled, it looks
                great and works really well at wicking water.
              </span>
            </div>
            <div className="materials__description-3">
              <button
                type="button"
                className="materials__description-btn materials__description-btn-3"
              ></button>
              <span className="materials__description-text materials__description-text-3">
                3 We have chosen Bobbiny recycled cotton cord to use as our draw
                string and wicking cord. Not only is it 100% recycled, it looks
                great and works really well at wicking water.
              </span>
            </div>
            <div className="materials__description-4">
              <button
                type="button"
                className="materials__description-btn materials__description-btn-4"
              ></button>
              <span className="materials__description-text materials__description-text-4">
                4 We have chosen Bobbiny recycled cotton cord to use as our draw
                string and wicking cord. Not only is it 100% recycled, it looks
                great and works really well at wicking water.
              </span>
            </div>
            <div className="materials__description-5">
              <button
                type="button"
                className="materials__description-btn materials__description-btn-5"
              ></button>
              <span className="materials__description-text materials__description-text-5">
                5 We have chosen Bobbiny recycled cotton cord to use as our draw
                string and wicking cord. Not only is it 100% recycled, it looks
                great and works really well at wicking water.
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
