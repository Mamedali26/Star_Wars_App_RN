import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';
import { useDispatch } from 'react-redux';
import { setHomeScreenSaga } from '../homeScreen/saga/action';
import { setCategoriesScreenSaga } from '../searchScreen/saga/action';
import {styles} from "./styles";

const SplashScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        animate();
        dispatch(setHomeScreenSaga());
        dispatch(setCategoriesScreenSaga());
    }, []);

    const logoAppeared = useRef(new Animated.Value(0)).current;
    const logoScaleOut = useRef(new Animated.Value(0)).current;
    const fadeIn = useRef(new Animated.Value(0)).current;

    const createAnimation = (value, duration, easing, delay = 0) => {
        logoAppeared.setValue(0);
        logoScaleOut.setValue(0);
        fadeIn.setValue(0);
        return Animated.timing(
        value,
        {
            toValue: 1,
            duration,
            easing,
            delay,
            useNativeDriver: true
        },
        )
    }

    const animate = () => {
        Animated.sequence([
            createAnimation(fadeIn, 1000, Easing.ease),
            createAnimation(logoAppeared, 1500, Easing.ease),
            createAnimation(logoScaleOut, 2500, Easing.ease),
        ]).start();
    }

    const appereanceLogo = logoAppeared.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0.5, 1]
    });

    const fadeInLogo = fadeIn.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0.5, 1]
    });

    const scaleLogo = logoScaleOut.interpolate({
        inputRange: [0, 0.3, 0.5, 0.8, 1],
        outputRange: [1, 2, 1, 0.5, 0]
    });
    
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Animated.Image 
                    style={[
                        styles.logoImage,
                        {
                        transform: [
                            {scale: scaleLogo},
                            {translateY: appereanceLogo}
                        ],
                        opacity: fadeInLogo
                        }
                    ]} 
                    source={require("../../assets/images/master_Yoda.jpg")}
                    resizeMode="stretch"
                />
                <Animated.Text style={[styles.splashText, {opacity: fadeInLogo}]}>
                    MAY THE FORCE BE WITH YOU!
                </Animated.Text>
            </View>
        </View>
    );
}
export default SplashScreen;