import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { ROUTES } from "../../../../services/routes";
import HomeScreen from "../../../../views/homeScreen";
import RandomNewsItemScreen from "../../../../views/randomNewsItemScreen";

const RandomNewsItemNav = createStackNavigator();

export const HomeScreenStack = () => {
    return(
      <RandomNewsItemNav.Navigator>
        <RandomNewsItemNav.Screen name={ROUTES.HomeScreen} component={HomeScreen}/> 
        <RandomNewsItemNav.Screen name={ROUTES.RandomNewsItemScreen} component={RandomNewsItemScreen}/>
      </RandomNewsItemNav.Navigator>
    );
  }