import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';

import {GetirCardItem} from './getir-card-item';
import {IGetirCardItem} from '../../lib/types';
import {ImageSlider} from '../image-slider';

const getirCardList: IGetirCardItem[] = [
  {
    title: 'Su & İçecek',
    imageSource: require('../../images/getir/su-icecek.jpeg'),
  },
  {title: 'Fırından', imageSource: require('../../images/getir/fırından.jpeg')},

  {
    title: 'Temel Gıda',
    imageSource: require('../../images/getir/temel.jpeg'),
  },
  {
    title: 'Süt Ürünleri',
    imageSource: require('../../images/getir/sut-urunleri.jpeg'),
  },
  {
    title: 'Kahvaltılık',
    imageSource: require('../../images/getir/kahvaltılık.jpeg'),
  },
  {
    title: 'Atıştırmalık',
    imageSource: require('../../images/getir/atistirmalik.jpeg'),
  },
  {
    title: 'Meyve & Sebze',
    imageSource: require('../../images/getir/meyve-sebze.jpeg'),
  },
  {title: 'Dondurma', imageSource: require('../../images/getir/dondurma.jpeg')},

  {title: 'Yiyecek', imageSource: require('../../images/getir/yiyecek.jpeg')},
  {
    title: 'Ev Bakım',
    imageSource: require('../../images/getir/ev-bakım.jpeg'),
  },
  {
    title: 'Ev Yaşam',
    imageSource: require('../../images/getir/ev-yasam.jpeg'),
  },
];

export const GetirCardList: React.FC = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <ImageSlider />
        </View>
      }
      numColumns={4}
      data={getirCardList}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => {
        return <GetirCardItem item={item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 2,
  },
});
