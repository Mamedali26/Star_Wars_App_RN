import React from "react";
import { View, Text, StatusBar } from "react-native";
import RootNavigator from "./modules/navigation/rootNavigator";

const App = () => (
  <>
    <StatusBar backgroundColor='skyblue'/>
    <RootNavigator />
  </>
);

export default App;