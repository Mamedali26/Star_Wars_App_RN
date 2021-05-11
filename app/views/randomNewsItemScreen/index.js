import React from "react";
import { View, Text, Image } from "react-native";
import { shallowEqual, useSelector } from "react-redux";
import DetailedItemInfo from "../../components/detailedItemInfo";

const RandomNewsItemScreen = () => {

    const chosenItemImage = useSelector(state => state.reducerHomeScreen.chosenItemImage, shallowEqual);
    const chosenItem = useSelector(state => state.reducerHomeScreen.chosenItem, shallowEqual);

    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <DetailedItemInfo 
                chosenItemImage={chosenItemImage}
                chosenItem={chosenItem}
            />
        </View>
    );
}

export default RandomNewsItemScreen;