import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors} from '../../lib/colors';

export const AccountItem: React.FC<{
  iconName: string;
  title: string;
  iconSize?: number;
  onPress?: () => void;
  isChevronIcon?: boolean;
  isDisabled?: boolean;
  isDisabledFont?: boolean;
}> = ({
  iconName,
  title,
  onPress,
  iconSize = 22,
  isChevronIcon = true,
  isDisabled = false,
  isDisabledFont = false,
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={isDisabled}>
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
          <Icon name={iconName} size={iconSize} color={Colors.primary} />
          <Text style={[styles.title, isDisabledFont && styles.disabled]}>
            {title}
          </Text>
        </View>
        {isChevronIcon && (
          <Icon
            name="chevron-forward-outline"
            size={24}
            color={Colors.primary}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'white',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 12,
  },
  disabled: {
    opacity: 0.4,
  },
});
