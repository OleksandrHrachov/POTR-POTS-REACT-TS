import { http, authHttp } from './index';
import { AxiosError } from 'axios';
import { IServerRegistrationResponse } from './types';
import { REGISTRATION_URL, LOGIN_URL } from './const';

export const registration = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string
): Promise<IServerRegistrationResponse | undefined> => {
  try {
    const response = await http.post<IServerRegistrationResponse>(
      REGISTRATION_URL,
      {
        email,
        password,
        firstName,
        lastName,
      }
    );

    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      console.log('RESPONSE_ERROR =>', error.response);
    } else {
      console.log('RESPONSE_ERROR =>', error);
    }
  }
};

export const login = async (
  email: string,
  password: string
): Promise<IServerRegistrationResponse | undefined> => {
  try {
    const response = await http.post(LOGIN_URL, {
      email,
      password,
    });

    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      console.log('RESPONSE_ERROR =>', error.response);
    } else {
      console.log('RESPONSE_ERROR =>', error);
    }
  }
};

export const checkAuth = async (): Promise<IServerRegistrationResponse | undefined> => {
  try {
    const response = await authHttp.get('api/user/auth');

    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      console.log('RESPONSE_ERROR =>', error.response);
    } else {
      console.log('RESPONSE_ERROR =>', error);
    }
  }
  
};
