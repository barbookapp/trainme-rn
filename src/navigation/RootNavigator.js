import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';

import TrainersListScreen from '../screens/train/TrainersListScreen';
import TrainerDetailScreen from '../screens/train/TrainerDetailScreen';
import SpecialtiesScreen from '../screens/train/SpecialtiesScreen';
import SpecialtyTrainersScreen from '../screens/train/SpecialtyTrainersScreen';
import HomeScreen from '../screens/home/HomeScreen';
import TrainerScreen from '../screens/train/trainer/TrainerScreen';
import SearchScreen from '../screens/train/search/SearchScreen';
import AgendaScreen from '../screens/train/trainer/AgendaScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabBarOptions = {
  // showLabel: false,
  activeTintColor: '#9381ff',
  style: {
    height: '10%',
  },
};

const TabScreens = () => {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="house" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Trainers"
        component={TrainersListScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="sports" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Specialties"
        component={SpecialtiesScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="search" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="search" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Trainers" component={TabScreens} />
        <Stack.Screen
          name="Trainer Detail"
          component={TrainerDetailScreen}
          options={({route}) => ({title: route.params.firstName})}
        />
        <Stack.Screen
          name="Specialty Trainers"
          component={SpecialtyTrainersScreen}
        />
        <Stack.Screen
          name="Trainer"
          component={TrainerScreen}
          options={({route}) => ({
            title: route.params.trainerName,
          })}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="search" color={color} size={size} />
            ),
          }}
        />
        <Stack.Screen name="Agenda" component={AgendaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
