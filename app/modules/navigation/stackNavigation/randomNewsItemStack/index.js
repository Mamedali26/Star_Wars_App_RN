import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { ROUTES } from "../../../../services/routes";
import RandomNewsItemScreen from "../../../../views/randomNewsItemScreen";
import BottomTabNavigator from "../../../navigation/bottomTabBar";

const RandomNewsItemNav = createStackNavigator();

export const HomeScreenStack = () => {
    return(
      <RandomNewsItemNav.Navigator>
        <RandomNewsItemNav.Screen 
          name={ROUTES.HomeScreen} 
          component={BottomTabNavigator}
          options={{headerShown: false}}
        /> 
        <RandomNewsItemNav.Screen 
          name={ROUTES.RandomNewsItemScreen} 
          component={RandomNewsItemScreen}
          options={{
            headerTitle: false, 
            headerStyle: {
              backgroundColor: 'white',
            },
          }}
        />
      </RandomNewsItemNav.Navigator>
    );
  }