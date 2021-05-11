import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '../stackNavigation/RootStack';

const RootNavigator = () => (
    <NavigationContainer>
        <RootStack />
    </NavigationContainer>
);

export default RootNavigator;