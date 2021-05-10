import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../views/homeScreen/index.js';
import FavourtesScreen from '../../../views/favouritesScreen.js';
import SearchScreen from '../../../views/searchScreen/index.js';
import HomeSVG from "../../../assets/svg/homeSVG";
import SearchSVG from "../../../assets/svg/seachSVG";
import FavouritesSVG from "../../../assets/svg/favouritesSVG";
import { ROUTES } from "../../../services/routes";

const BottomTabBar = createBottomTabNavigator();

const BottomTabNavigator = () => (
    <BottomTabBar.Navigator
        tabBarOptions={{
            style: {backgroundColor: 'pink', height: 60},
            showLabel: false,
            activeBackgroundColor: 'yellow',
            inactiveBackgroundColor: 'white'
        }}
    >
        <BottomTabBar.Screen 
            name={ROUTES.HomeScreen}
            options={{
                tabBarIcon: ({focused}) => <HomeSVG color={focused ? 'black' : 'gray'} />
            }}
        >
            {() => <HomeScreen />}
        </BottomTabBar.Screen>
        <BottomTabBar.Screen 
            name={ROUTES.SearchScreen}
            options={{
                tabBarIcon: ({focused}) => <SearchSVG color={focused ? 'black' : 'gray'} />
            }}
        >
            {() => <SearchScreen />}
        </BottomTabBar.Screen>
        <BottomTabBar.Screen 
            name={ROUTES.FavourtesScreen}
            options={{
                tabBarIcon: ({focused}) => <FavouritesSVG color={focused ? 'black' : 'gray'} />
            }}
        >
            {() => <FavourtesScreen />}
        </BottomTabBar.Screen>
    </BottomTabBar.Navigator>
);

export default BottomTabNavigator;