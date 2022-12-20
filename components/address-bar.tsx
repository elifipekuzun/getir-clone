import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors} from '../lib/colors';

export const AddressBar: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.highlightedText}>Address Type, </Text>
          <TextInput
            placeholder="User address here"
            placeholderTextColor={'black'}
            editable={false}
          />
        </View>
        <Icon name="chevron-down-outline" size={24} color="black" />
      </View>
      <View style={styles.durationContainer}>
        <Text style={styles.highlightedText}>9 mins</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
    width: '100%',
    zIndex: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '80%',
    height: '100%',
    padding: 8,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  durationContainer: {
    paddingLeft: 10,
    width: '100%',
  },
  highlightedText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
