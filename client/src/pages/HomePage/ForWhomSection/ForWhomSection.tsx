import React, { FC } from 'react';
import './ForWhomSection.scss';
import benefit__1 from '../../../images/benefit__img1.png';
import benefit__1Desktop from '../../../images/benefit__img1--desktop.png';
import benefit__2 from '../../../images/benefit__img2.png';
import benefit__3 from '../../../images/benefit__img3.png';
import benefit__3Desktop from '../../../images/benefit__img3--desktop.png';

export const ForWhomSection: FC = () => {
  return (
    <section className="container for-whom__container">
      <div className="for-whom">
        <h2 className="title for-whom__top-title">FOR WHOM?</h2>
        <div className="for-whom-wrapper">
          <article className="for-whom__benefit for-whom__benefit-1">
            <div className="benefit__img benefit__img-el-1">
              <img
                className="img"
                srcSet={`${benefit__1} 768w, ${benefit__1Desktop} 1024w`}
                src={benefit__1}
                alt="benefit-1"
              />
            </div>

            <div className="benefit-inner benefit-inner-1">
              <span className="benefit__title-mark benefit__title-mark-1">
                Robust
              </span>
              <h2 className="title benefit__title benefit__title-number benefit__title-number-1">
                1
              </h2>
              <div className="benefit-inner-1-2">
                <h2 className="title benefit__title benefit__title-text">
                  For those who value durable things<span></span>
                </h2>
                <p className="benefit__description">
                  Don’t worry if you happen to knock your POTR on the floor,
                  unlike a traditional ceramic pot it will take the fall in its
                  stride.
                </p>
              </div>
            </div>
          </article>

          <div className="for-whom-inner">
            <article className="for-whom__benefit for-whom__benefit-2">
              <div className="benefit__img benefit__img-el-2">
                <img className="img" src={benefit__2} alt="benefit__img2" />
              </div>

              <div className="benefit-inner benefit-inner-2">
                <span className="benefit__title-mark benefit__title-mark-2">
                  Beautiful
                </span>
                <h2 className="title benefit__title benefit__title-number benefit__title-number-2">
                  2
                </h2>
                <div className="benefit-inner-2-2">
                  <h2 className="title benefit__title benefit__title-text">
                    For those who love modern design<span></span>
                  </h2>
                  <p className="benefit__description">
                    We strived to achieve something that would look beautiful in
                    your home while being incredibly functional and intuitive to
                    use.
                  </p>
                </div>
              </div>
            </article>

            <article className="for-whom__benefit for-whom__benefit-3">
              <div className="benefit__img benefit__img-el-3">
                <img
                  className="img"
                  srcSet={`${benefit__3} 768w, ${benefit__3Desktop} 1024w`}
                  src={benefit__3}
                  alt="benefit-3"
                />
              </div>
              <div className="benefit-inner benefit-inner-3">
                <span className="benefit__title-mark benefit__title-mark-3">
                  Saves time
                </span>
                <h2 className="title benefit__title benefit__title-number benefit__title-number-3">
                  3
                </h2>
                <div className="benefit-inner-3-2">
                  <h2 className="title benefit__title benefit__title-text">
                    For those who don't have enough time to regular water indoor
                    plants<span></span>
                  </h2>
                  <p className="benefit__description">
                    Water is drawn up through the cotton by the plant using
                    tried and tested wicking technology. It's particularly
                    useful if you aren’t able to water them yourself on a
                    regular basis!
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
