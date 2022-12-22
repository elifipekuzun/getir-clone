import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import MainScreen from './screens/main-screen';
import HomeScreen from './screens/home-screen';
import SearchScreen from './screens/search-screen';
import AccountScreen from './screens/account-screen';
import {Layout} from './components/layout/layout';
import {MainTabBar} from './components/main-tabBar';
import AuthScreen from './screens/auth-screen';
import {
  RootStackParamList,
  BottomTabParamList,
  BackToMainTabParamList,
  AccountStackParamList,
} from './lib/navigation.types';
import {Colors} from './lib/colors';
import {store} from './state/store';
import {useActions} from './hooks/useActions';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const MainBottomTab = createBottomTabNavigator<BackToMainTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();
const AccountStack = createStackNavigator<AccountStackParamList>();

const AccountStackNavigator = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: Colors.primary,
        },
      }}>
      <AccountStack.Screen component={AccountScreen} name="Account" />
      <AccountStack.Screen
        component={AuthScreen}
        name="Auth"
        options={{
          title: 'Authentication',
        }}
      />
    </AccountStack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={MainScreen} name="Main" />
      <Stack.Screen component={BottomNavigator} name="Feed" />
    </Stack.Navigator>
  );
};

const BackToMainNavigator = () => {
  return (
    <MainBottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainBottomTab.Screen name="Root" component={MainStack} />
    </MainBottomTab.Navigator>
  );
};

const BottomNavigator = () => {
  const [getirName, setGetirName] = useState('');
  return (
    <BottomTab.Navigator
      screenOptions={() => {
        const imagePath =
          getirName === 'getir'
            ? require('./images/getir-logo.png')
            : require('./images/getir-yemek-logo.png');
        return {
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          tabBarShowLabel: false,
          headerTitle: () => (
            <Image
              source={imagePath}
              style={[
                styles.headerImage,
                getirName === 'getiryemek' && {width: 100, height: 100},
              ]}
              resizeMode="contain"
            />
          ),
        };
      }}>
      <BottomTab.Screen
        component={HomeScreen}
        name="Home"
        options={({route}) => {
          setGetirName(route.params.name);
          return {
            tabBarIcon: ({color, focused}) => (
              <Icon
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? Colors.primary : color}
              />
            ),
          };
        }}
      />
      <BottomTab.Screen
        component={SearchScreen}
        name="Search"
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'search' : 'search-outline'}
              size={24}
              color={focused ? Colors.primary : color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        component={BackToMainNavigator}
        name="Back"
        options={({navigation}) => ({
          tabBarIcon: () => (
            <MainTabBar
              onPress={() => {
                navigation.navigate('Main');
              }}
            />
          ),
          headerShown: false,
        })}
      />
      <BottomTab.Screen
        component={AccountStackNavigator}
        name="Person"
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              size={24}
              color={focused ? Colors.primary : color}
            />
          ),
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

const Navigation = () => {
  const {getUserData} = useActions();
  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={'light-content'} />
        <Layout>
          <Navigation />
        </Layout>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  headerImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
