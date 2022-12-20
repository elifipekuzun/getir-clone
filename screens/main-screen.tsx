import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {MainCard} from '../components/main-card';
import {Props} from '../lib/navigation.types';
import {ImageSlider} from '../components/image-slider';
import {Searchbar} from '../components/searchbar';
import {Colors} from '../lib/colors';
import {AddressBar} from '../components/address-bar';

const MainScreen = ({navigation}: Props) => {
  return (
    <View style={{paddingTop: 8, flexDirection: 'column', flex: 1}}>
      <AddressBar />
      <ImageSlider />
      <View style={styles.mainContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.text}>Welcome Elif Ipek!</Text>
        </View>
        <View style={styles.itemContainer}>
          <Searchbar />
        </View>
      </View>

      <View style={[styles.mainContainer]}>
        <View style={styles.itemContainer}>
          <MainCard
            showImage
            title="getir"
            onPress={() => {
              navigation.navigate('Feed', {
                screen: 'Home',
                params: {name: 'getir'},
              });
            }}
          />
        </View>
        <View style={styles.itemContainer}>
          <MainCard
            showImage
            title="getiryemek"
            onPress={() => {
              navigation.navigate('Feed', {
                screen: 'Home',
                params: {name: 'getiryemek'},
              });
            }}
          />
        </View>
      </View>
      <View style={[styles.mainContainer, {position: 'absolute', bottom: 50}]}>
        <View style={styles.itemContainer}>
          <MainCard
            title="getirtaksi"
            onPress={() => {
              navigation.navigate('Feed', {
                screen: 'Home',
                params: {name: 'getiryemek'},
              });
            }}
          />
        </View>
        <View style={styles.itemContainer}>
          <MainCard
            title="getiraraç"
            onPress={() => {
              navigation.navigate('Feed', {
                screen: 'Home',
                params: {name: 'getiryemek'},
              });
            }}
          />
        </View>
        <View style={styles.itemContainer}>
          <MainCard
            title="getiriş"
            onPress={() => {
              navigation.navigate('Feed', {
                screen: 'Home',
                params: {name: 'getiryemek'},
              });
            }}
          />
        </View>
        <View style={styles.itemContainer}>
          <MainCard
            title="n11"
            onPress={() => {
              navigation.navigate('Feed', {
                screen: 'Home',
                params: {name: 'getiryemek'},
              });
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.primary,
    marginLeft: 8,
  },
});

export default MainScreen;
