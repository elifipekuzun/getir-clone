import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';

export const PaginationDot: React.FC<{style?: StyleProp<ViewStyle>}> = ({
  style,
}) => {
  return <View style={[styles.dot, style]} />;
};

const styles = StyleSheet.create({
  dot: {
    height: 6,
    width: 6,
    borderWidth: 2,
    borderColor: '#663399',
    borderRadius: 6,
    backgroundColor: '#663399',
    marginLeft: 6,
  },
});
