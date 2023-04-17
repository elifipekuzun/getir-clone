import {Actions} from '../actions';
import {ActionTypes} from '../action-types';

interface AuthState {
  isAuthenticated: boolean;
  username: string;
  phoneNumber: string;
  email: string;
  uid: string;
  error: string | null;
}

const initialState = {
  isAuthenticated: false,
  username: '',
  phoneNumber: '',
  email: '',
  uid: '',
  error: null,
};

const authReducer = (
  state: AuthState = initialState,
  action: Actions,
): AuthState => {
  switch (action.type) {
    case ActionTypes.authSuccess:
      return {
        isAuthenticated: true,
        phoneNumber: action.payload.phoneNumber,
        email: action.payload.email,
        username: action.payload.username,
        uid: action.payload.uid,
        error: null,
      };
    case ActionTypes.authError:
      return {
        isAuthenticated: false,
        username: '',
        phoneNumber: '',
        email: '',
        uid: '',
        error: action.payload,
      };
    case ActionTypes.getUser:
      return {
        isAuthenticated: true,
        phoneNumber: action.payload.phoneNumber,
        email: action.payload.email,
        username: action.payload.username,
        uid: action.payload.uid,
        error: null,
      };
    case ActionTypes.logout:
      return {
        isAuthenticated: false,
        phoneNumber: '',
        email: '',
        username: '',
        uid: '',
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
