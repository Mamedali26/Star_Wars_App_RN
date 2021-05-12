import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavouritesScreen from '../../../views/favouritesScreen';
import SearchScreen from '../../../views/searchScreen/index.js';
import HomeSVG from "../../../assets/svg/homeSVG";
import SearchSVG from "../../../assets/svg/searchSVG";
import FavouritesSVG from "../../../assets/svg/favouritesSVG";
import { ROUTES } from "../../../services/routes";
import HomeScreen from '../../../views/homeScreen/index.js';
import { config } from '../../../services/config';

const BottomTabBar = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation }) => (
    <BottomTabBar.Navigator
        tabBarOptions={{
            style: {height: 60, borderTopColor: config.mainAppColor},
            showLabel: false,
            activeBackgroundColor: config.COLOR_WHITE,
            inactiveBackgroundColor: config.mainAppColor,
        }}
    >
        <BottomTabBar.Screen 
            name={ROUTES.HomeScreen}
            options={{
                tabBarIcon: ({focused}) => 
                    <HomeSVG color={focused ? config.mainAppColor : config.COLOR_GRAY} />
            }}
        >
            {() => <HomeScreen navigation={navigation} />}
        </BottomTabBar.Screen>
        <BottomTabBar.Screen 
            name={ROUTES.SearchScreen}
            options={{
                tabBarIcon: ({focused}) => 
                    <SearchSVG color={focused ? config.mainAppColor : config.COLOR_GRAY} />
            }}
        >
            {() => <SearchScreen navigation={navigation} />}
        </BottomTabBar.Screen>
        <BottomTabBar.Screen 
            name={ROUTES.FavouritesScreen}
            options={{
                tabBarIcon: ({focused}) => 
                    <FavouritesSVG 
                        color={focused ? config.mainAppColor : config.COLOR_GRAY} 
                        width={36}
                        height={36}
                    />
            }}
        >
            {() => <FavouritesScreen navigation={navigation} />}
        </BottomTabBar.Screen>
    </BottomTabBar.Navigator>
);

export default BottomTabNavigator;