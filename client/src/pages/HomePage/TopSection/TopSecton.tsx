import React, { FC } from 'react';
import { Button, buttonVariant } from '../../../components/shared/Button';
import pot from '../../../images/pot.png';
import potDesktop from '../../../images/pot--desktop.png';
import './TopSection.scss';

export const TopSection: FC = () => {
  return (
    <section className='container top-section__container'>
      {/* image for mobile */}
      <div className="top-section__content-img-container top-section__content-img-container--mobile">
        <img className="img" src={pot} alt="pot" />
      </div>

      <div className="top-section__content">
        <div className="top-section__content-main">
          <div className="top-section__content-main-center">
            <p className="top-section__content-description">
              <span className="border-text">POTR ~ Eco,</span>
              <br />
              <span className="border-text">self-</span>watering,
              <br />
              origami <span className="border-text">plant</span>
              <br />
              pots
            </p>
          </div>

          <div className="top-section__content-main-bottom">
            <div className="top-section__content-main-bottom-inner">
              <div className="top-section__content-price">
                <p className="top-section__content-price-number">$ 7,50</p>
                <p className="top-section__content-price-description">
                  Get the second order in half price
                </p>
              </div>
              <Button variant={buttonVariant.SUBMIT}>buy now</Button>
            </div>
          </div>
        </div>

        {/* image for tablet and desktop */}
        <div className="top-section__content-img-container top-section__content-img-container--tablet-desktop">
          <img className="img" src={potDesktop} alt="pot" />
        </div>
      </div>
    </section>
  );
};
