import React, { FC, useContext } from 'react';
import { StoreContext } from '../..';

export const HomePage: FC = () => {
  const { navigationStore, userStore } = useContext(StoreContext);

  const {userId, userEmail, userFirstName, userLastName} = userStore.currentUser
  return (
    <div>
      <h2>Home Page</h2>
      <h3>{`USER is auth => ${userStore.isAuth}`}</h3>
      <p>{userId}</p>
      <p>{userEmail}</p>
      <p>{userFirstName}</p>
      <p>{userLastName}</p>
    </div>
  );
};
