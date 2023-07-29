import { http, authHttp } from './index';
import { AxiosError } from 'axios';
import {
  IServerRegistrationResponse,
  // IServerRegistrationResponseError,
} from './types';
import { REGISTRATION_URL, LOGIN_URL } from './const';

export const registration = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string
): Promise<IServerRegistrationResponse | undefined> => {
  try {
    const response = await http.post<IServerRegistrationResponse>(REGISTRATION_URL, {
      email,
      password,
      firstName,
      lastName,
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      console.log('RESPONSE_ERROR =>', error.response)
    }
  }
};

export const login = async (email: string, password: string) => {
  const response = http.post(LOGIN_URL, {
    email,
    password,
  });

  return response;
};

export const checkAuth = async () => {
  const response = http.post('api/user/auth');

  return response;
};
