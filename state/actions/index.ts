import {ActionTypes} from '../action-types';

interface LoginAction {
  type: ActionTypes.login;
}

interface SignupAction {
  type: ActionTypes.signup;
}

interface AuthSuccessAction {
  type: ActionTypes.authSuccess;
  payload: {
    username: string;
    email: string;
    phoneNumber: string;
    uid: string;
    address: string[];
  };
}

interface AuthErrorAction {
  type: ActionTypes.authError;
  payload: string;
}

interface GetUserDataAction {
  type: ActionTypes.getUser;
  payload: {
    username: string;
    email: string;
    phoneNumber: string;
    uid: string;
    address: string[];
  };
}
interface LogoutAction {
  type: ActionTypes.logout;
}

export type Actions =
  | LoginAction
  | SignupAction
  | AuthSuccessAction
  | AuthErrorAction
  | GetUserDataAction
  | LogoutAction;
