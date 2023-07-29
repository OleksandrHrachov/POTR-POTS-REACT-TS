import React, { FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { joinClassNames } from '../../../helpers/joinClassNames';
import './InternalLink.scss';
import { StoreContext } from '../../../index';

interface IProps {
  children?: React.ReactNode;
  to?: string;
  name?: string;
  onClick?: () => void;
  className?: string;
}

export const InternalLink: FC<IProps> = ({
  children,
  to = '',
  name = '',
  onClick,
  className,
}) => {
  const { navigationStore } = useContext(StoreContext);

  return (
    <>
      {to ? (
        <NavLink
          onClick={() => {
            navigationStore.setCurrentRoute(to);
            onClick && onClick();
          }}
          to={to}
          className={joinClassNames([
            'internal-link',
            navigationStore.currentRoute === to && 'internal-link--selected',
            className,
          ])}
        >
          {children}
        </NavLink>
      ) : (
        <button
          type="button"
          className={joinClassNames([
            'internal-link',
            navigationStore.currentRoute === name && 'internal-link--selected',
            className,
          ])}
          onClick={() => {
            console.log('LOG IN');
            navigationStore.setCurrentRoute(name);
            onClick && onClick();
          }}
        >
          {children}
        </button>
      )}
    </>
  );
};
