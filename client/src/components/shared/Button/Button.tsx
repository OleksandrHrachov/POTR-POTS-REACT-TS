import React, { FC, ReactNode } from 'react';
import { joinClassNames } from '../../../helpers/joinClassNames';
import './Button.scss';

export enum buttonVariant {
  SUBMIT = 'submit',
  CLOSE = 'close',
}

interface IProps {
  title?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant: buttonVariant;
  isDisabled?: boolean;
  onClick?: () => void;
  className?: string;
  children?: ReactNode
}

export const Button: FC<IProps> = ({
  title,
  type = 'button',
  variant,
  isDisabled,
  onClick,
  className,
  children
}) => {
  return variant === buttonVariant.CLOSE ? (
    <div className="button__close" onClick={() => onClick && onClick()}>{children}</div>
  ) : (
    <button
      type={type}
      className={joinClassNames([
        'button',
        `button__${variant}`,
        isDisabled && 'button__disabled',
        className
      ])}
      disabled={isDisabled}
      onClick={() => onClick && onClick()}
    >
      {title}
      {children}
    </button>
  );
};
