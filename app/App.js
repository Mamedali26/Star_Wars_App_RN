import React, { useEffect } from "react";
import { StatusBar, KeyboardAvoidingView, Platform } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RootNavigator from "./modules/navigation/rootNavigator";
import { getIsSplash } from "./modules/saga/selectors";
import { config } from "./services/config";
import SplashScreen from "./views/splashScreen";
import { setIsSplash } from "./views/splashScreen/redux/action";

const App = () => {

  const isSplash = useSelector(getIsSplash, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsSplash(true))
  }, []);

  return(
    <KeyboardAvoidingView style={{flex: 1}} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar 
        backgroundColor={config.mainAppColor}
        barStyle="light-content"      
      />
      {isSplash ? <SplashScreen /> : <RootNavigator />}      
    </KeyboardAvoidingView>
  );
}

export default App;