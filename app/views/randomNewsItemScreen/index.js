import React from "react";
import { View, Text, Image } from "react-native";
import { shallowEqual, useSelector } from "react-redux";

const RandomNewsItemScreen = () => {

    const chosenItemImage = useSelector(state => state.reducerHomeScreen.chosenItemImage, shallowEqual);
    const chosenItem = useSelector(state => state.reducerHomeScreen.chosenItem, shallowEqual);

    return (
        <View>
            <Image source={{uri: chosenItemImage}} style={{width: 100, height: 100}} />
            <Text>{chosenItem?.name ? chosenItem?.name : chosenItem?.title}</Text>
        </View>
    );
}

export default RandomNewsItemScreen;