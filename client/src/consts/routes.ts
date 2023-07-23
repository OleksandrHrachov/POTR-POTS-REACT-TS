import {
  BASKET_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  PAYMENT_PAGE_ROUTE,
  REGISTRATION_PAGE_ROUTE,
} from './consts';
import { BasketPage } from '../pages/BasketPage';
import { LoginPage } from '../pages/LoginPage';
import { PaymentPage } from '../pages/PaymentPage';
import { RegistrationPage } from '../pages/RegistrationPage';

export const authRoutes = [
  {
    path: PAYMENT_PAGE_ROUTE,
    Component: PaymentPage,
  },
  {
    path: BASKET_PAGE_ROUTE,
    Component: BasketPage,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_PAGE_ROUTE,
    Component: LoginPage,
  },
  {
    path: REGISTRATION_PAGE_ROUTE,
    Component: RegistrationPage,
  },
];
