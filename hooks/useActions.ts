import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {authSuccess, getUserData} from '../state/action-creators';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({authSuccess, getUserData}, dispatch);
};
