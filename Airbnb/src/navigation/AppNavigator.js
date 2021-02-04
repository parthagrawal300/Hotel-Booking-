import React from 'react';
import {View, Image, SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ActivityScreen from './ActivityScreen';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {ProfileTabLandingScreen} from '../screens/profile/index';
import {DEVICE_HEIGHT} from '../utils';
import LoginAndSignUpScreen from '../screens/profile/LoginAndSignUpScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ExploreTabStack = createStackNavigator();
const SavedTabStack = createStackNavigator();
const TripsTabStack = createStackNavigator();
const InboxTabStack = createStackNavigator();
const ProfileTabStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const TabBarIcon = (source) => {
  return <Image source={source} style={{height: 30, width: 30}} />;
};

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{width: '100%'}}
      drawerContent={(props) => <View {...props} />}>
      <Drawer.Screen
        name={'TabNavigator'}
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

const ActivityTab = () => {
  return (
    //change this
    <ExploreTabStack.Navigator>
      <ExploreTabStack.Screen
        name="Activity"
        component={ActivityScreen}
        options={{headerShown: false}}
      />
    </ExploreTabStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{
        activeTintColor: 'black',
        labelStyle: {fontSize: 12},
        style: {paddingVertical: 8, height: DEVICE_HEIGHT * 0.086},
      }}>
      <Tab.Screen
        name="Explore"
        component={ActivityTab}
        options={{
          tabBarIcon: ({focused}) => (
            <Fontisto
              name="search"
              size={25}
              color={focused ? 'red' : 'grey'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Saved"
        component={JourneyTab}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="heart-o"
              size={25}
              color={focused ? 'red' : 'grey'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Trips"
        component={CameraTab}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name="airbnb"
              size={25}
              color={focused ? 'red' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={LocationTab}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="message-square"
              size={25}
              color={focused ? 'red' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={GalleryTab}
        options={{
          tabBarIcon: ({focused}) => (
            <EvilIcons name="user" size={35} color={focused ? 'red' : 'grey'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const JourneyTab = () => {
  return (
    <SavedTabStack.Navigator>
      <SavedTabStack.Screen
        name="Journey"
        component={ActivityScreen}
        options={{headerShown: false}}
      />
    </SavedTabStack.Navigator>
  );
};

const CameraTab = () => {
  return (
    <InboxTabStack.Navigator>
      <InboxTabStack.Screen
        name="Camera"
        component={ActivityScreen}
        options={{headerShown: false}}
      />
    </InboxTabStack.Navigator>
  );
};

const LocationTab = () => {
  return (
    <ProfileTabStack.Navigator>
      <ProfileTabStack.Screen
        name="Location"
        component={ActivityScreen}
        options={{headerShown: false}}
      />
    </ProfileTabStack.Navigator>
  );
};

const GalleryTab = () => {
  return (
    <TripsTabStack.Navigator>
      <TripsTabStack.Screen
        name="Profile"
        component={ProfileTabLandingScreen}
        options={{headerShown: false}}
      />
    </TripsTabStack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'AppDrawer'}>
      <Stack.Screen
        name={'AppDrawer'}
        component={AppDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="galleryScreen"
        component={ProfileTabLandingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="loginSignUpScreen"
        component={LoginAndSignUpScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
