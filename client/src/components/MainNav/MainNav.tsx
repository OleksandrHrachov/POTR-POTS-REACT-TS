import React, { FC, useContext, useEffect } from 'react';
import {
  BASKET_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  REGISTRATION_PAGE_ROUTE
} from '../../consts/consts';
import { InternalLink } from '../shared/InternalLink';
import { StoreContext } from '../../index';
import './MainNav.scss';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';

export const MainNav: FC = observer(() => {
  const { userStore, navigationStore } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userStore.isAuth) {
      navigationStore.setCurrentRoute(HOME_PAGE_ROUTE);
      navigate(HOME_PAGE_ROUTE);
    }
  }, [userStore.isAuth]);

  const logOut = () => {
    userStore.setIsAuth(false);
    userStore.resetUser();
    localStorage.removeItem('token');
  };

  return (
    <nav className={'main-nav'}>
      <InternalLink to={HOME_PAGE_ROUTE}>HOME</InternalLink>
      {userStore.isAuth ? (
        <>
          <InternalLink to={BASKET_PAGE_ROUTE}>BASKET</InternalLink>
          <InternalLink onClick={logOut}>LOG OUT</InternalLink>
        </>
      ) : (
        <>
          <InternalLink to={LOGIN_PAGE_ROUTE}>LOG IN</InternalLink>
          <InternalLink to={REGISTRATION_PAGE_ROUTE}>REGISTRATION</InternalLink>
        </>
      )}
    </nav>
  );
});
