import React, { FC, useContext } from 'react';
import { StoreContext } from '../..';
import './HomePage.scss';
import { TopSection } from './TopSection';
import { ForWhomSection } from './ForWhomSection';
import { FeaturesSection } from './FeaturesSection';
import { AboutUsSection } from './AboutUsSection';
import { Materials } from './Materials';
import { SizesSection } from './SizesSection';
import { AdvantagesSection } from './AdvantagesSection';
import { Contacts } from './Contacts';

export const HomePage: FC = () => {
  return (
    <div className={'home'}>
      <TopSection />
      <ForWhomSection /> 
      <FeaturesSection />
      <AboutUsSection />
      <Materials />
      <SizesSection />
      <AdvantagesSection />
      <Contacts />
    </div>
  );
};
