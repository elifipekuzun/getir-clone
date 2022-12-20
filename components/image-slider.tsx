import React, {useState} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

import {Slider} from './slider';
import {PaginationDot} from './pagination-dot';

const images = [
  {path: require('../images/getir.png')},
  {path: require('../images/getiryemek.jpeg')},
];
const {width} = Dimensions.get('window');

export const ImageSlider: React.FC = () => {
  const [sliderState, setSliderState] = useState({currentPage: 0});
  const {currentPage: pageIndex} = sliderState;
  return (
    <View style={styles.mainContainer}>
      <Slider getCurrentPage={index => setSliderState({currentPage: index})}>
        {images.map((img, i) => {
          return (
            <View key={i} style={styles.imgContainer}>
              <Image
                style={styles.img}
                source={img.path}
                resizeMode="contain"
              />
            </View>
          );
        })}
      </Slider>
      <View style={styles.dotsWrapper}>
        {Array(images.length)
          .fill(0)
          .map((_, index) => {
            return (
              <PaginationDot
                style={{opacity: index === pageIndex ? 1 : 0.4}}
                key={index}
              />
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
  },
  imgContainer: {
    width: width,
    height: 200,
    backgroundColor: 'white',
  },
  img: {
    height: '100%',
  },
  dotsWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 16,
  },
});
