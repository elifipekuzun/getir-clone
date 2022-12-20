import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export const MainCard: React.FC<{
  title: string;
  onPress: () => void;
  showImage?: boolean;
}> = ({title, onPress, showImage}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [imagePath, setImagePath] = useState(
    title === 'getir'
      ? require('../images/getir.png')
      : require('../images/getiryemek.jpeg'),
  );
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={[styles.text, !showImage && {fontSize: 14}]}>{title}</Text>
        {showImage ? (
          <Image resizeMode="cover" style={styles.img} source={imagePath} />
        ) : (
          <View style={styles.img} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingTop: 8,
    paddingLeft: 12,
    borderWidth: 2,
    borderColor: '#dcdcdc',
    marginHorizontal: 2,
    position: 'relative',
    backgroundColor: 'white',
    height: 60,
    overflow: 'hidden',
  },
  text: {
    fontWeight: 'bold',
    color: '#663399',
    fontSize: 18,
    zIndex: 20,
  },
  img: {
    position: 'absolute',
    width: 60,
    height: 60,
    right: -5,
    bottom: -10,
  },
});
