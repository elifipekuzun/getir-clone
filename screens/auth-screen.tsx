import React, {useEffect} from 'react';
import {View} from 'react-native';

import {AuthForm} from '../components/account/auth-form';
import {AccountScreenProps} from '../lib/navigation.types';
import {useTypedSelector} from '../hooks/useTypedSelector';

const AuthScreen = ({navigation}: AccountScreenProps) => {
  const {uid} = useTypedSelector(state => state.auth);
  useEffect(() => {
    if (uid.length > 0) {
      navigation.navigate('Account');
    }
  }, [uid, navigation]);
  return (
    <View>
      <AuthForm formType="login" />
    </View>
  );
};

export default AuthScreen;
