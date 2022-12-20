import React, {useState} from 'react';
import {
  ScrollView,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

const {width} = Dimensions.get('window');

export const Slider: React.FC<
  React.PropsWithChildren<{getCurrentPage: (currentPage: number) => void}>
> = ({children, getCurrentPage}) => {
  const [sliderState, setSliderState] = useState({currentPage: 0});

  const setSliderPage = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({...sliderState, currentPage: indexOfNextScreen});
      getCurrentPage(indexOfNextScreen);
    }
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      pagingEnabled
      onScroll={setSliderPage}>
      {children}
    </ScrollView>
  );
};
