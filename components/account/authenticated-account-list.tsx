import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {AccountItem} from './account-item';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {Colors} from '../../lib/colors';
import {NotificationAlert} from '../notification-alert';

export const AuthenticatedAccountList: React.FC = () => {
  const {email, phoneNumber, username} = useTypedSelector(state => state.auth);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  return (
    <>
      <ScrollView>
        <View style={styles.listContainer}>
          <View style={styles.editIcon}>
            <Icon
              name="create-outline"
              color={Colors.primary}
              size={24}
              onPress={() => {}}
            />
          </View>
          <AccountItem
            iconName="person"
            iconSize={54}
            title={username}
            isChevronIcon={false}
            isDisabled
          />
          <AccountItem
            iconName="mail"
            title={email}
            isChevronIcon={false}
            isDisabled
            isDisabledFont
          />
          <AccountItem
            iconName="phone-portrait"
            title={`+90 ${phoneNumber}`}
            isChevronIcon={false}
            isDisabled
          />
        </View>
        <View style={styles.listContainer}>
          <AccountItem title="Adreslerim" iconName="location" />
          <AccountItem title="Favori Ürünlerim" iconName="heart" />
          <AccountItem title="Ödeme Yöntemlerim" iconName="card" />
          <AccountItem title="İletişim Tercihleri" iconName="notifications" />
          <AccountItem title="Hesap Ayarları" iconName="lock-closed" />
          <AccountItem title="Yardım" iconName="help-circle-outline" />
          <AccountItem
            title="Çıkış Yap"
            iconName="log-out"
            onPress={() => setIsAlertVisible(!isAlertVisible)}
          />
        </View>
      </ScrollView>
      {isAlertVisible && (
        <NotificationAlert
          onCancel={() => setIsAlertVisible(!isAlertVisible)}
          message="Çıkış yapmak istediğinizden emin misiniz?"
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 8,
    position: 'relative',
  },
  editIcon: {
    position: 'absolute',
    top: -10,
    right: 30,
    zIndex: 20,
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 6,
  },
});
