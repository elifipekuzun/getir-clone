import {ImageSourcePropType} from 'react-native';

export interface IGetirCardItem {
  title: string;
  imageSource: ImageSourcePropType;
}

export interface User {
  uid: string;
  email: string;
  phoneNumber: string;
  username: string;
  address: string[];
}
