import React, { FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Logo.scss';
import { HOME_PAGE_ROUTE } from '../../../consts/consts';
import { StoreContext } from '../../..';

export const Logo: FC = () => {
  const { navigationStore } = useContext(StoreContext);

  return (
    <NavLink
      to={HOME_PAGE_ROUTE}
      className={'logo'}
      onClick={() => navigationStore.setCurrentRoute(HOME_PAGE_ROUTE)}
    >
      POTR POTS
    </NavLink>
  );
};
