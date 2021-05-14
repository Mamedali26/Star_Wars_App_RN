import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import DetailedItemInfo from "../../components/detailedItemInfo";
import { getChosenItemImage, getChosenItem } from "../../modules/saga/selectors";

const ItemScreen = () => {

    const chosenItemImage = useSelector(getChosenItemImage, shallowEqual);
    const chosenItem = useSelector(getChosenItem, shallowEqual);

    return (
        <DetailedItemInfo 
            chosenItemImage={chosenItemImage}
            chosenItem={chosenItem}
        />
    );
}

export default ItemScreen;