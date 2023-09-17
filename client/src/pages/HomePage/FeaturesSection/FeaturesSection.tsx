import React, { FC } from 'react';
import './FeaturesSection.scss';
import feature__1 from '../../../images/feature__img-1.png';
import feature__1Desktop from '../../../images/feature__img-1--desktop.png';
import feature__2 from '../../../images/feature__img-2.png';
import feature__2Desktop from '../../../images/feature__img-2--desktop.png';
import feature__3 from '../../../images/feature__img-3.png';
import feature__3Desktop from '../../../images/feature__img-3--desktop.png';

export const FeaturesSection: FC = () => {
  return (
    <section className="container features__container">
      <div className="features">
        <h1 className="title features__top-title">
          POTR Pots <span className="border-text">Features</span>
        </h1>

        <div className="features-wrapper">
          <article className="feature feature-1">
            <div className="feature__img feature-1__img">
              <img
                className="img"
                srcSet={`${feature__1} 768w, ${feature__1Desktop} 1024w`}
                src={feature__1}
                alt="feature-1__img"
              />
            </div>
            <div className="feature__content">
              <h3 className="feature__content-title">Flat pack postage</h3>
              <p className="feature__content-description">
                The pots will be shipped flat packed so they can be slipped
                through your letter box
              </p>
            </div>
          </article>

          <article className="feature feature-2">
            <div className="feature__img feature-2__img">
              <img
                className="img"
                srcSet={`${feature__2} 768w, ${feature__2Desktop} 1024w`}
                src={feature__2}
                alt="feature-2__img"
              />
            </div>
            <div className="feature__content">
              <h3 className="feature__content-title">Easy assembly</h3>
              <p className="feature__content-description">
                POTR Pots are super easy (and super satisfying) to assemble
                using the quick draw cotton cord
              </p>
            </div>
          </article>

          <article className="feature feature-3">
            <div className="feature__img feature-3__img">
              <img
                className="img"
                srcSet={`${feature__3} 768w, ${feature__3Desktop} 1024w`}
                src={feature__3}
                alt="feature-3__img"
              />
            </div>
            <div className="feature__content">
              <h3 className="feature__content-title">Self-watering</h3>
              <p className="feature__content-description">
                Simply add water into the pot - if your plant is thirsty it will
                automatically start drinking the water through the cotton cord.
                Magic!
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
