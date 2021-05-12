import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { ROUTES } from "../../../../services/routes";
import RandomNewsItemScreen from "../../../../views/randomNewsItemScreen";
import BottomTabNavigator from "../../bottomTabBar";
import ChosenCategoryScreen from "../../../../views/chosenCategoryScreen";
import { useSelector } from "react-redux";

const RootStackNav = createStackNavigator();

export const RootStack = () => {

    let chosenCategory = useSelector(state => state.reducerForSearchCategories.chosenCategoryName);

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
          options={{
            headerTitle: chosenCategory[0].toUpperCase() + chosenCategory.substring(1),
          }}
        />
      </RootStackNav.Navigator>
    );
  }