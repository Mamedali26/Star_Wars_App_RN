import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../views/homeScreen/index.js';
import FavourtesScreen from '../../../views/favouritesScreen.js';
import SearchScreen from '../../../views/searchScreen/index.js';

const BottomTabBar = createBottomTabNavigator();

const BottomTabNavigator = () => (
    <BottomTabBar.Navigator
        tabBarOptions={{
            activeTintColor: 'red',
            safeAreaInsets: {bottom: 10},
            style: {backgroundColor: 'pink', height: 60},
        }}
    >
        <BottomTabBar.Screen 
            name={'4'}
            options={{
                tabBarLabel: 'Home',
            }}
        >
            {() => <HomeScreen />}
        </BottomTabBar.Screen>
        <BottomTabBar.Screen 
            name={'5'}
            options={{
                tabBarLabel: 'Second',
            }}
        >
            {() => <SearchScreen />}
        </BottomTabBar.Screen>
        <BottomTabBar.Screen 
            name={'6'}
            options={{
                tabBarLabel: '45454',
            }}
        >
            {() => <FavourtesScreen />}
        </BottomTabBar.Screen>
    </BottomTabBar.Navigator>
);

export default BottomTabNavigator;