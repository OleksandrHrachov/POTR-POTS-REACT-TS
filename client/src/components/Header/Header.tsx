import React, { FC } from 'react';
import { MainNav } from '../MainNav';
import './Header.scss';
import { Logo } from '../shared/Logo';
import { joinClassNames } from '../../helpers/joinClassNames';

export const Header: FC = () => {
  return (
    <header className={'header'}>
      <div className={joinClassNames(['container', 'header__container'])}>
        <Logo />
        <MainNav />
      </div>
    </header>
  );
};
