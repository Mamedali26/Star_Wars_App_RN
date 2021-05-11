import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavouritesScreen from '../../../views/favouritesScreen';
import SearchScreen from '../../../views/searchScreen/index.js';
import HomeSVG from "../../../assets/svg/homeSVG";
import SearchSVG from "../../../assets/svg/searchSVG";
import FavouritesSVG from "../../../assets/svg/favouritesSVG";
import { ROUTES } from "../../../services/routes";
import HomeScreen from '../../../views/homeScreen/index.js';

const BottomTabBar = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation }) => (
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
            {() => <HomeScreen navigation={navigation} />}
        </BottomTabBar.Screen>
        <BottomTabBar.Screen 
            name={ROUTES.SearchScreen}
            options={{
                tabBarIcon: ({focused}) => <SearchSVG color={focused ? 'black' : 'gray'} />
            }}
        >
            {() => <SearchScreen navigation={navigation} />}
        </BottomTabBar.Screen>
        <BottomTabBar.Screen 
            name={ROUTES.FavouritesScreen}
            options={{
                tabBarIcon: ({focused}) => <FavouritesSVG color={focused ? 'black' : 'gray'} />
            }}
        >
            {() => <FavouritesScreen />}
        </BottomTabBar.Screen>
    </BottomTabBar.Navigator>
);

export default BottomTabNavigator;