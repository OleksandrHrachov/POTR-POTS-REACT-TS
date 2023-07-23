import React, { useContext } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';

import { HOME_PAGE_ROUTE } from './consts/consts';
import { authRoutes, publicRoutes } from './consts/routes';
import { StoreContext } from './';
import { observer } from 'mobx-react';

const App = observer(() => {
  const {userStore} = useContext(StoreContext);

  return (
    <div className="App">
      <Routes>
        <Route path={HOME_PAGE_ROUTE} element={<Layout />}>
          <Route index element={<HomePage />} />
          {userStore.isAuth &&
            authRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          {!userStore.isAuth &&
            publicRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          <Route path='*' element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
});

export default App;
