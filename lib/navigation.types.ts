import {
  NavigatorScreenParams,
  CompositeScreenProps,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Main: NavigatorScreenParams<BackToMainTabParamList>;
  Feed: NavigatorScreenParams<BottomTabParamList>;
};

export type BottomTabParamList = {
  Home: {name: string};
  Search: undefined;
  Back: NavigatorScreenParams<BackToMainTabParamList>;
  Person: NavigatorScreenParams<AccountStackParamList>;
};

export type AccountStackParamList = {
  Account: undefined;
  Auth: undefined;
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

export type AccountScreenProps = StackScreenProps<AccountStackParamList>;
export type AccountNavigationProps = StackNavigationProp<AccountStackParamList>;
