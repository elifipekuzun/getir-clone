import React from 'react';
import {View} from 'react-native';

import {MainTabScreenProps} from '../lib/navigation.types';
import {AddressBar} from '../components/address-bar';
import {GetirCardList} from '../components/getir/getir-card-list';

const HomeScreen = ({route}: MainTabScreenProps) => {
  const name = route.params.name;
  return (
    <View>
      <AddressBar />
      {name === 'getir' && <GetirCardList />}
    </View>
  );
};

export default HomeScreen;
