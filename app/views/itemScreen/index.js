import React from "react";
import { View } from "react-native";
import { shallowEqual, useSelector } from "react-redux";
import DetailedItemInfo from "../../components/detailedItemInfo";
import { getChosenItemImage, getChosenItem } from "../../modules/saga/selectors";

const ItemScreen = () => {

    const chosenItemImage = useSelector(getChosenItemImage, shallowEqual);
    const chosenItem = useSelector(getChosenItem, shallowEqual);

    return (
        <View style={{flex: 1}}>
            <DetailedItemInfo 
                chosenItemImage={chosenItemImage}
                chosenItem={chosenItem}
            />
        </View>
    );
}

export default ItemScreen;