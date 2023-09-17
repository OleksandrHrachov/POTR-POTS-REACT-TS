import React, { FC } from 'react';
import potsSizeImg from '../../../images/pots__size.png';
import potsSizeImgDesktop from '../../../images/pots__size--desktop.png';
import './SizesSection.scss';

export const SizesSection: FC = () => {
  return (
    <section className="container sizes__container">
      <div className="sizes">
        <div className="container-inner">
          <h2 className="title sizes__top-title">
            Which size POTR for my house plant ?
          </h2>

          <div className="sizes__wrapper">
            <p className="sizes__top-content">
              Pre potted plants come in fairly standard sized pots, and can be
              classNameified into one of two categories:
            </p>

            <div className="sizes__inner">
              <div className="sizes__inner-img">
                <img
                  className="img sizes-img"
                  srcSet={`${potsSizeImg} 768w, ${potsSizeImgDesktop} 1024w`}
                  src={potsSizeImg}
                  alt="pots__size"
                />
              </div>

              <div className="sizes__inner-description">
                <h4 className="sizes__inner-description-title">large</h4>
                <p className="sizes__inner-description-content">
                  Large POTR Pot ={' '}
                  <span className="sizes__inner-description-content--bold">
                    14cm diameter
                  </span>{' '}
                  (1.5 litre) house plant pot or less
                </p>

                <h4 className="sizes__inner-description-title">Small</h4>
                <p className="sizes__inner-description-content">
                  Small POTR Pot ={' '}
                  <span className="sizes__inner-description-content--bold">
                    10cm diameter
                  </span>{' '}
                  (0.49 litre) house plant pot or less
                </p>
              </div>
            </div>
          </div>
          <p className="sizes__bottom-content">
            POTR Pots have a little bit of give around the top rim so can fit
            slightly larger sizes than the recommended sizes stated above if
            necessary.
          </p>
        </div>
      </div>
    </section>
  );
};
