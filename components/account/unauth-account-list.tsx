import React from 'react';
import {View, StyleSheet} from 'react-native';

import {AccountItem} from './account-item';
import {useNavigation} from '@react-navigation/native';
import {AccountNavigationProps} from '../../lib/navigation.types';

export const UnauthAccountList: React.FC = () => {
  const navigation = useNavigation<AccountNavigationProps>();
  return (
    <View>
      <View style={styles.container}>
        <AccountItem
          iconName="person"
          title="Giriş Yap"
          onPress={() => navigation.navigate('Auth')}
        />
      </View>
      <View style={styles.container}>
        <AccountItem iconName="location" title="Adreslerim" />
        <AccountItem iconName="heart" title="Favori Ürünlerim" />
        <AccountItem iconName="chatbubbles" title="Canlı Destek" />
        <AccountItem iconName="help-circle" title="Yardım" />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
