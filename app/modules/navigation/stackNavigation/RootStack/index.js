import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { ROUTES } from "../../../../services/routes";
import RandomNewsItemScreen from "../../../../views/randomNewsItemScreen";
import BottomTabNavigator from "../../bottomTabBar";
import ChosenCategoryScreen from "../../../../views/chosenCategoryScreen";

const RootStackNav = createStackNavigator();

export const RootStack = () => {
    return(
      <RootStackNav.Navigator>
        <RootStackNav.Screen 
          name={ROUTES.HomeScreen} 
          component={BottomTabNavigator}
          options={{headerShown: false}}
        /> 
        <RootStackNav.Screen 
          name={ROUTES.RandomNewsItemScreen} 
          component={RandomNewsItemScreen}
          options={{
            headerTitle: false, 
            headerStyle: {
              backgroundColor: 'white',
            },
          }}
        />
        <RootStackNav.Screen
          name={ROUTES.ChosenCategoryScreen}
          component={ChosenCategoryScreen}
        />
      </RootStackNav.Navigator>
    );
  }