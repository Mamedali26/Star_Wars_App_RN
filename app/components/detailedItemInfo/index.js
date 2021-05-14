import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
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
    const chosenItemInfo = Object.entries(chosenItem);
    const infoToShow = chosenItemInfo.filter(item => !Array.isArray(item[1]));

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image 
                    source={{uri: chosenItemImage}} 
                    style={styles.itemImage} 
                    resizeMode='contain'
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
                <View style={styles.infoContainer}>
                    {infoToShow.map(el => (
                        <Text key={el} style={styles.textInfo}>
                            {el[0]}: {el[1]}
                        </Text>
                    ))}
                </View>
            </ScrollView>
            
        </View>
    );
}

export default DetailedItemInfo;