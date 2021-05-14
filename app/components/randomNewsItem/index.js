import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { getRightCategoryForImage, getNumberForImage, getRightImage } from "./logic";
import { styles } from './styles';
import { imgLink } from "../../services/restApi";
import { ROUTES } from "../../services/routes";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setRandomNewsChosenImage, setRandomNewsChosenItem } from "../../views/homeScreen/redux/action";
import FavouritesSVG from "../../assets/svg/favouritesSVG";
import { setItemToFavourites, setItemRemoveFromFavourites } from "../../views/favouritesScreen/redux/action";
import { config } from "../../services/config";
import { getFavourites } from "../../modules/saga/selectors";
import RemoveFromFavouritesSVG from "../../assets/svg/removeFromFavouritesSVG";
import MainBtn from "../mainBtn";

const StarWarsItem = ({ item, navigation }) => {

    const dispatch = useDispatch();

    const favourites = useSelector(getFavourites, shallowEqual);

    const addToFavourites = () => {
        const checkForFav = favourites?.filter(element => element?.name === item?.name);
        if (checkForFav?.length === 0) {            
            dispatch(setItemToFavourites(item));
        }
    }

    const removeFromFavourites = () => {
        const newFavsWithoutRemovedItem = favourites?.filter(element => element?.name !== item?.name);
        dispatch(setItemRemoveFromFavourites(newFavsWithoutRemovedItem))
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
                    onPress={addToFavourites}
                >
                    <FavouritesSVG 
                        color={config.mainAppColor} 
                        width={24} 
                        height={24} 
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.addToFavBtn}
                    onPress={removeFromFavourites}
                >
                    <RemoveFromFavouritesSVG 
                        color={config.COLOR_RED} 
                        width={24} 
                        height={24} 
                    />
                </TouchableOpacity>
                <MainBtn 
                    title="Click To See More!"
                    fn={chooseItemAndNavigate}
                />
            </View>
        </View>
    );
}

export default StarWarsItem;