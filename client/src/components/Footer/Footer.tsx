import React from 'react';
import './Footer.scss';
import { Logo } from '../shared/Logo';
import { joinClassNames } from '../../helpers/joinClassNames';
import { ExternalLink } from '../shared/ExternalLink';
import twIcon from '../../images/twitter-icon.svg';
import instIcon from '../../images/inst-icon.svg';
import fbIcon from '../../images/fb-icon.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className={joinClassNames(['container', 'footer__container'])}>
        <div className="footer__block">
          <p className="footer__title">Adrress</p>
          <p className="footer__adrress-text">
            United Kingdom 99 Staple Hill Road, Bristol, BS16 5AD
          </p>
        </div>
        <div className="footer__logo">
          <Logo />
        </div>

        <div className="footer__block">
          <p className="footer__title">about us</p>
          <div className="footer__links-items">
            <ExternalLink href="https://twitter.com" target="_blank">
              <img className="icon icon-soc" src={twIcon} alt="twitter-icon" />
            </ExternalLink>
            <ExternalLink href="https://www.instagram.com" target="_blank">
              <img className="icon icon-soc" src={instIcon} alt="inst-icon" />
            </ExternalLink>
            <ExternalLink href="https://www.facebook.com" target="_blank">
              <img className="icon icon-soc" src={fbIcon} alt="fb-icon" />
            </ExternalLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
