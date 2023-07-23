import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { RootStore } from './store';
import { UserStore } from './store/userStore';
import { NavigationStore } from './store/navigationStore';

export const StoreContext = createContext({} as RootStore);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreContext.Provider value={{
      userStore: new UserStore(),
      navigationStore: new NavigationStore()
    }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
