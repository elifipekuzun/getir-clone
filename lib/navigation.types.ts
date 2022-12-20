import {
  NavigatorScreenParams,
  CompositeScreenProps,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Main: NavigatorScreenParams<BackToMainTabParamList>;
  Feed: NavigatorScreenParams<BottomTabParamList>;
};

export type BottomTabParamList = {
  Home: {name: string};
  Search: undefined;
  Back: NavigatorScreenParams<BackToMainTabParamList>;
  Account: undefined;
};
export type BackToMainTabParamList = {
  Root: undefined;
};

export type Props = CompositeScreenProps<
  StackScreenProps<RootStackParamList>,
  BottomTabScreenProps<BottomTabParamList, 'Home'>
>;
export type MainProps = StackScreenProps<RootStackParamList>;
export type MainTabScreenProps = BottomTabScreenProps<
  BottomTabParamList,
  'Home'
>;
