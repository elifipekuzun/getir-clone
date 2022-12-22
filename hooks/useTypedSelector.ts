import {ReducersState} from '../state';
import {useSelector, TypedUseSelectorHook} from 'react-redux';

export const useTypedSelector: TypedUseSelectorHook<ReducersState> =
  useSelector;
