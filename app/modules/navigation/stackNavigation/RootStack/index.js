import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "../../../../services/routes";
import ItemScreen from "../../../../views/itemScreen";
import BottomTabNavigator from "../../bottomTabBar";
import ChosenCategoryScreen from "../../../../views/chosenCategoryScreen";
import { useSelector, shallowEqual } from "react-redux";
import { getChosenCategory, getChosenItem } from "../../../saga/selectors";
import { config } from "../../../../services/config";

const RootStackNav = createStackNavigator();

export const RootStack = () => {

    let chosenCategory = useSelector(getChosenCategory, shallowEqual);
    const chosenItem = useSelector(getChosenItem, shallowEqual);

    return(
      <RootStackNav.Navigator>
        <RootStackNav.Screen 
          name={ROUTES.HomeScreen} 
          component={BottomTabNavigator}
          options={{headerShown: false}}
        /> 
        <RootStackNav.Screen 
          name={ROUTES.ItemScreen} 
          component={ItemScreen}
          options={{
            headerTitle: false, 
            headerStyle: {
              backgroundColor: config.mainAppColor,
            },
            headerTintColor: config.COLOR_WHITE,
            headerTitle: chosenItem?.name ? chosenItem?.name : chosenItem?.title,
          }}
        />
        <RootStackNav.Screen
          name={ROUTES.ChosenCategoryScreen}
          component={ChosenCategoryScreen}
          options={{
            headerStyle: {
              backgroundColor: config.mainAppColor,
            },
            headerTintColor: config.COLOR_WHITE,
            headerTitle: chosenCategory ? chosenCategory?.[0].toUpperCase() + chosenCategory?.substring(1) : '',
          }}
        />
      </RootStackNav.Navigator>
    );
  }