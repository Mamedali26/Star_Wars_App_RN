import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreenStack } from '../stackNavigation/randomNewsItemStack';

const RootNavigator = () => (
    <NavigationContainer>
        <HomeScreenStack />
    </NavigationContainer>
);

export default RootNavigator;