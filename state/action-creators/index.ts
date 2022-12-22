import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dispatch} from 'redux';
import {Actions} from '../actions';
import {ActionTypes} from '../action-types';
import {User} from '../../lib/types';

export const authSuccess = (
  username: string,
  email: string,
  phoneNumber: string,
  uid: string,
  isNewUser: boolean,
) => {
  return async (dispatch: Dispatch<Actions>) => {
    try {
      if (isNewUser) {
        const newUser: User = {username, email, phoneNumber, uid, address: []};
        await firestore().collection('Users').add(newUser);

        await AsyncStorage.setItem('user', JSON.stringify(newUser));
        dispatch({
          type: ActionTypes.authSuccess,
          payload: newUser,
        });
      } else {
        firestore()
          .collection('Users')
          .doc(uid)
          .onSnapshot(async documantSnapshot => {
            const data = documantSnapshot.data();
            if (data) {
              dispatch({
                type: ActionTypes.authSuccess,
                payload: {
                  username: data.username,
                  email: data.email,
                  phoneNumber: data.phoneNumber,
                  uid,
                  address: data.address,
                },
              });
              await AsyncStorage.setItem('user', JSON.stringify(data));
            }
          });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };
};

export const getUserData = () => {
  return async (dispatch: Dispatch<Actions>) => {
    const userData = await AsyncStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      dispatch({type: ActionTypes.getUser, payload: user});
    }
  };
};
