export interface IServerRegistrationResponse {
  token?: string;
  userData?: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  message?: string;
  status?: number;
}
