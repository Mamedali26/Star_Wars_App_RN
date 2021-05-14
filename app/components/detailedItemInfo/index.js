import React from "react";
import { View, Text, Image } from "react-native";
import { config } from "../../services/config";
import AddOrRemoveFavBtn from "../addOrRemoveFavBtn";
import FavouritesSVG from "../../assets/svg/favouritesSVG";
import RemoveFromFavouritesSVG from "../../assets/svg/removeFromFavouritesSVG";
import { styles } from "./styles";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getFavourites } from "../../modules/saga/selectors";
import { setItemRemoveFromFavourites, setItemToFavourites } from "../../views/favouritesScreen/redux/action";
import { addToFavourites, removeFromFavourites } from "../randomNewsItem/logic";

const DetailedItemInfo = ({ chosenItem, chosenItemImage }) => {

    const dispatch = useDispatch();
    const favourites = useSelector(getFavourites, shallowEqual);

    return (
        <View style={styles.container}>
            <Image 
                source={{uri: chosenItemImage}} 
                style={styles.itemImage} 
                resizeMode='cover'
            />
            <Text style={styles.itemName}>
                {chosenItem?.name ? chosenItem?.name : chosenItem?.title}
            </Text>
            <View style={styles.btnsWrapper}>
                <AddOrRemoveFavBtn
                    svg={<FavouritesSVG 
                        width={36}
                        height={36}
                        color={config.mainAppColor}
                    />}
                    onPress={() => addToFavourites(chosenItem, favourites, dispatch, setItemToFavourites)}
                />
                <AddOrRemoveFavBtn
                    svg={<RemoveFromFavouritesSVG 
                        width={36}
                        height={36}
                        color={config.COLOR_RED}
                    />}
                    onPress={() => removeFromFavourites(chosenItem, favourites, dispatch, setItemRemoveFromFavourites)}
                />
            </View>
        </View>
    );
}

export default DetailedItemInfo;