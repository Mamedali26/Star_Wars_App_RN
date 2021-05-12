import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { getRightCategoryForImage, getNumberForImage, getRightImage } from "./logic";
import { styles } from './styles';
import { imgLink } from "../../services/restApi";
import { ROUTES } from "../../services/routes";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setRandomNewsChosenImage, setRandomNewsChosenItem } from "../../views/homeScreen/redux/action";
import FavouritesSVG from "../../assets/svg/favouritesSVG";
import { setItemToFavourites } from "../../views/favouritesScreen/redux/action";
import { config } from "../../services/config";

const StarWarsItem = ({ item, navigation }) => {

    const dispatch = useDispatch();

    const [isR, setR] = useState(false);

    const favourites = useSelector(state => state.reducerFavouritesScreen.favourites, shallowEqual);

    const setR2 = () => {
        setR(!isR);
        dispatch(setItemToFavourites(item));
    }

    let chosenItemImage = getRightImage(item, item?.url, getNumberForImage, 
        getRightCategoryForImage, imgLink);

    const chooseItemAndNavigate = () => {
        dispatch(setRandomNewsChosenImage(chosenItemImage));
        dispatch(setRandomNewsChosenItem(item));
        navigation.navigate(ROUTES.ItemScreen);
    }

    return (
        <View style={styles.itemContainer}>
            <Image 
                source={{uri: getRightImage(item, item?.url, getNumberForImage, 
                    getRightCategoryForImage, imgLink)}}
                style={styles.itemImage}
                resizeMode="stretch"
            />
            <Text style={styles.itemName}>
                {item?.name ? item?.name : item?.title}
            </Text>
            <View style={styles.btnWrapper}>
                <TouchableOpacity 
                    style={styles.addToFavBtn}
                    onPress={setR2}
                >
                    <FavouritesSVG 
                        color={isR ? config.COLOR_RED : config.COLOR_GRAY} 
                        width={24} 
                        height={24} 
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.clickForMoreBtn}
                    onPress={chooseItemAndNavigate}
                >
                    <Text style={styles.clickForMoreBtnText}>Click To See More!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default StarWarsItem;