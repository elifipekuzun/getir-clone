import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Searchbar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon name="search-outline" color={'#663399'} size={24} />
      <TextInput placeholder="Getir'de ara" style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderColor: '#663399',
    borderWidth: 1,
    borderRadius: 6,
  },
  input: {
    padding: 4,
    width: '100%',
    color: '#663399',
    fontWeight: 'bold',
  },
});
