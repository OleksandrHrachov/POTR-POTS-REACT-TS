import React, { useContext, useEffect, useState } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { MutatingDots } from 'react-loader-spinner';
import { authRoutes, publicRoutes } from './consts/routes';
import { StoreContext } from './';
import { observer } from 'mobx-react';
import { checkAuth } from './http/userApi';
import { ErrorPage } from './pages/ErrorPage';
import { HOME_PAGE_ROUTE } from './consts/consts';

const App = observer(() => {
  const { userStore } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth()
      .then((data) => {
        if (data?.userData) {
          const { id, email, firstName, lastName } = data?.userData;
          userStore.setUser(id, email, firstName, lastName);
          userStore.setIsAuth(true);
          
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <MutatingDots
        height="100"
        width="100"
        color="var(--color-turquoise)"
        secondaryColor="var(--color-yellow-light"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass="registration__form-loader"
        visible={true}
      />
    );
  }

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
          {userStore.isAuth &&
            authRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          {!userStore.isAuth &&
            publicRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          <Route path="*" element={<ErrorPage/>} />
        </Route>
      </Routes>
    </div>
  );
});

export default App;
