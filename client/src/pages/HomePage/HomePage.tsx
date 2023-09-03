import React, { FC, useContext } from 'react';
import { StoreContext } from '../..';
import './HomePage.scss';
import { joinClassNames } from '../../helpers/joinClassNames';
import potDesktop from '../../images/pot--desktop.png';
import { Button, buttonVariant } from '../../components/shared/Button';

export const HomePage: FC = () => {
  return (
    <div className={'home'}>
      <div className={joinClassNames(['container', 'home__container'])}>
        <div className={'home__top'}>
          <div className={'home__top-content'}>
            <p className={'home__top-content-description'}>
              <span className="border-text">POTR ~ Eco,</span>
              <span className="border-text">self-</span>watering, origami{' '}
              <span className="border-text">plant</span> pots
            </p>

            <div className={'home__top-price'}>
              <div className={'home__top-price-block'}>
                <p className={'home__top-price-number'}>$ 7,50</p>
                <p className={'home__top-price-description'}>
                  Get the second order in half price
                </p>
              </div>
              <div className={'home__top-price-button'}>
                <Button variant={buttonVariant.SUBMIT}>buy now</Button>
              </div>
            </div>
          </div>
          <div className={'home__top-img'}>
            <img src={potDesktop} alt="pot" />
          </div>
        </div>
        {/* for whom */}
      <div>
      <section className={'for-whom'}>
        <div className="container">
          <h2 className="title for-whom__top-title">FOR WHOM?</h2>
          <div className="for-whom-wrapper">

            <article className="for-whom__benefit for-whom__benefit-1">
              <div className="benefit__img benefit__img-el-1">
                <img className="img" srcSet="./images/benefit__img1.png 768w, ./images/benefit__img1--desktop.png 1024w"
                  src="./images/benefit__img1.png"
                  alt="benefit-1"
                />
              </div>

              <div className="benefit-inner benefit-inner-1">
                <span className="benefit__title-mark benefit__title-mark-1">Robust</span>
                <h2 className="title benefit__title benefit__title-number benefit__title-number-1">1</h2>
                <div className="benefit-inner-1-2">
                  <h2 className="title benefit__title benefit__title-text">For those who value durable things<span></span></h2>
                  <p className="benefit__description">
                    Don’t worry if you happen to knock your POTR on the floor, unlike a traditional ceramic pot it will take the fall in its stride.
                  </p>
                </div>
              </div>
            </article>

            <div className="for-whom-inner">

              <article className="for-whom__benefit for-whom__benefit-2">

                <div className="benefit__img benefit__img-el-2">
                  <img
                    className="img"
                    src="./images/benefit__img2.png"
                    alt="benefit__img1"
                  />
                </div>

                <div className="benefit-inner benefit-inner-2">
                  <span className="benefit__title-mark benefit__title-mark-2">Beautiful</span>
                  <h2 className="title benefit__title benefit__title-number benefit__title-number-2">2</h2>
                  <div className="benefit-inner-2-2">
                    <h2 className="title benefit__title benefit__title-text">For those who love modern design<span></span></h2>
                    <p className="benefit__description">
                      We strived to achieve something that would look beautiful in your home while being incredibly functional and intuitive to use.
                    </p>
                  </div>
                </div>
              </article>

              <article className="for-whom__benefit for-whom__benefit-3">
                <div className="benefit__img benefit__img-el-3">
                  <img className="img" srcSet="./images/benefit__img3.png 768w, ./images/benefit__img3--desktop.png 1024w"
                  src="./images/benefit__img3.png"
                  alt="benefit-1"
                  />
                </div>
                <div className="benefit-inner benefit-inner-3">
                  <span className="benefit__title-mark benefit__title-mark-3">Saves time</span>
                  <h2 className="title benefit__title benefit__title-number benefit__title-number-3">3</h2>
                  <div className="benefit-inner-3-2">
                    <h2 className="title benefit__title benefit__title-text">For those who don't have enough time to regular water indoor plants<span></span></h2>
                    <p className="benefit__description">
                      Water is drawn up through the cotton by the plant using tried and tested wicking technology. It's particularly useful if you aren’t able to water them yourself on a regular basis!
                    </p>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </div>
      </section>
      </div>

      </div>
    </div>
  );
};
