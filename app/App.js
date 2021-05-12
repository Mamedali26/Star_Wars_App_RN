import React from "react";
import { StatusBar, KeyboardAvoidingView, Platform } from "react-native";
import RootNavigator from "./modules/navigation/rootNavigator";
import { config } from "./services/config";

const App = () => (
  <KeyboardAvoidingView style={{flex: 1}} 
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
  >
    <StatusBar 
      backgroundColor={config.mainAppColor}
      barStyle="light-content"      
    />
    <RootNavigator />
  </KeyboardAvoidingView>
);

export default App;