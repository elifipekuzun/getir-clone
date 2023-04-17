import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {authSuccess, getUserData, logout} from '../state/action-creators';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({authSuccess, getUserData, logout}, dispatch);
};
