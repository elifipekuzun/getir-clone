import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import {IGetirCardItem} from '../../lib/types';

export const GetirCardItem: React.FC<{item: IGetirCardItem}> = ({item}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            style={styles.img}
            source={item.imageSource}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 4,
    margin: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 70,
    height: 70,
    shadowColor: '#654094',
    shadowOffset: {
      width: 1.2,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 10,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  title: {
    marginTop: 4,
    color: '#696969',
  },
});
