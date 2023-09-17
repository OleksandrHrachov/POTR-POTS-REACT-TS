import React, { FC } from 'react';
import './AboutUsSection.scss';
import teamImg from '../../../images/team__img.png';
import teamImgDesktop from '../../../images/team__img--desktop.png';

export const AboutUsSection: FC = () => {
  return (
    <section className="container about-us__container">
      <section className="about-us">
        <h1 className="title about-us__top-title">Meet the POTR team!</h1>
        {/* image for mobile  */}
        <div className="about-us__img about-us__img--mobile">
          <img src={teamImg} alt="potr team" className="img" />
        </div>

        <div className="container about-us__container-wrapper">
          <span className="border-text about-us__name about-us__name-1">
            Martin
          </span>
          <div className="about-us__wrapper">
            <div className="about-us__description">
              <p>
                Andy and Martin are experienced product designers with a love of
                plants and the environment. They have over ten years combined
                industry experience in bringing products to market at some of
                the worlds largest consumer product companies.
              </p>
              <br />
              <p>
                Having studied Product Design Engineering together at the
                Glasgow School of Art, they have a long history of working as a
                team on a variety of design projects.
              </p>
            </div>

            {/* image for tablet and desktop */}
            <div className="about-us__img about-us__img--desktop">
              <img className="img" src={teamImgDesktop} alt="potr team" />
            </div>
          </div>

          <span className="border-text about-us__name about-us__name-2">
            Andy
          </span>
        </div>
      </section>
    </section>
  );
};
