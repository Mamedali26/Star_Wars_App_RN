import React from "react";
import { View, Text, Image } from "react-native";
import { config } from "../../services/config";

const DetailedItemInfo = ({ chosenItemImage, chosenItem }) => {

    return (
        <View style={{backgroundColor: config.mainAppColor, flex: 1, alignItems: 'center'}}>
            <Image 
                source={{uri: chosenItemImage}} 
                style={{width: '95%', height: 400}} 
                resizeMode='cover'
            />
            <Text style={{fontSize: 30, color: config.COLOR_WHITE}}
            >{chosenItem?.name ? chosenItem?.name : chosenItem?.title}</Text>
        </View>
    );
}

export default DetailedItemInfo;