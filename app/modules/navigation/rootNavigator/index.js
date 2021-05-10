import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from '../bottomTabBar';

const RootNavigator = () => (
    <NavigationContainer>
        <BottomTabNavigator />
    </NavigationContainer>
);

export default RootNavigator;