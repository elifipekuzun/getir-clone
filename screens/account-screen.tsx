import React from 'react';
import {View, StyleSheet} from 'react-native';

import {UnauthAccountList} from '../components/account/unauth-account-list';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {AuthenticatedAccountList} from '../components/account/authenticated-account-list';

const AccountScreen = () => {
  const {uid} = useTypedSelector(state => state.auth);
  return (
    <View style={styles.screen}>
      {uid.length === 0 ? <UnauthAccountList /> : <AuthenticatedAccountList />}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 16,
  },
});

export default AccountScreen;
