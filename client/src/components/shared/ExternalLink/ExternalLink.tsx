import React, { FC, ReactNode } from 'react';

interface IProps {
  href: string;
  target: string;
  children: ReactNode
}

export const ExternalLink: FC<IProps> = ({ href, target, children }) => {
  return (
    <a href={href} target={target}>{children}</a>
  )
};
