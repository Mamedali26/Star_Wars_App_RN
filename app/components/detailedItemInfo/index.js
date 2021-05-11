import React from "react";
import { View, Text, Image } from "react-native";

const DetailedItemInfo = ({ chosenItemImage, chosenItem }) => {

    return (
        <View style={{backgroundColor: 'green', flex: 1}}>
            <Image source={{uri: chosenItemImage}} style={{width: 200, height: 200}} />
            <Text>{chosenItem?.name ? chosenItem?.name : chosenItem?.title}</Text>
        </View>
    );
}

export default DetailedItemInfo;