import React, { FC } from 'react';
import { Button, buttonVariant } from '../../../components/shared/Button';
import advantag1 from '../../../images/advantage-img-1.png';
import advantag2 from '../../../images/advantage-img-2.png';
import advantag3 from '../../../images/advantage-img-3.png';
import advantag4 from '../../../images/advantage-img-4.png';
import advantag5 from '../../../images/advantage-img-5.png';
import advantag6 from '../../../images/advantage-img-6.png';
import './AdvantagesSection.scss';

export const AdvantagesSection: FC = () => {
  return (
    <section className="container advantages__container">
      <div className="advantages__wrapper">
        <div className="advantages__photos">
          <div className="advantages__photos-block-1">
            <div className="advantages__photos-item advantages__photos-block-1-item-1">
              <img
                src={advantag1}
                alt="advantage-1"
                className="advantages__photo-img"
              />
            </div>

            <div className="advantages__photos-item advantages__photos-block-1-item-2">
              <img
                src={advantag2}
                alt="advantage-2"
                className="advantages__photo-img"
              />
            </div>
          </div>

          <div className="advantages__photos-block-2">
            <div className="advantages__photos-item advantages__photos-block-2-item-1">
              <img
                src={advantag3}
                alt="advantage-3"
                className="advantages__photo-img"
              />
            </div>

            <div className="advantages__photos-item advantages__photos-block-2-item-2">
              <img
                src={advantag4}
                alt="advantage-4"
                className="advantages__photo-img"
              />
            </div>
          </div>

          <div className="advantages__photos-block-3">
            <div className="advantages__photos-item advantages__photos-block-3-item-1">
              <img
                src={advantag5}
                alt="advantage-5"
                className="advantages__photo-img"
              />
            </div>

            <div className="advantages__photos-item advantages__photos-block-3-item-2">
              <img
                src={advantag6}
                alt="advantage-6"
                className="advantages__photo-img"
              />
            </div>
          </div>
        </div>

        <div className="advantages__inner">
          <div className="advantages__list">
            <div className="advantages__list-item advantages__list-item-1">
              <h4 className="advantages__list-item-title">Easy assembly</h4>
              <p className="advantages__list-item-description">
                Pull the draw string to assemble!
              </p>
            </div>

            <div className="advantages__list-item advantages__list-item-2">
              <h4 className="advantages__list-item-title">
                Flat pack postage{' '}
              </h4>
              <p className="advantages__list-item-description">
                POTR pots arrive flat packed in an envelope!
              </p>
            </div>

            <div className="advantages__list-item advantages__list-item-3">
              <h4 className="advantages__list-item-title">Self-watering</h4>
              <p className="advantages__list-item-description">
                Add water to POTR and watch your plant drink!
              </p>
            </div>
          </div>

          <div className="advantages__spesial-price">
            <Button variant={buttonVariant.SUBMIT}>buy now</Button>

            <div className="advantages__price-description">
              <h2 className="advantages__price-description-sale">50% off</h2>
              <p className="advantages__price-description-text">
                Get the second order in half price
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
