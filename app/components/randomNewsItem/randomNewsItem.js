import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { getRightCategoryForImage, getNumberForImage, getRightImage } from "./logic";
import { styles } from './styles';
import { imgLink } from "../../services/restApi";
import { ROUTES } from "../../services/routes";
import { useDispatch } from "react-redux";
import { setRandomNewsChosenImage, setRandomNewsChosenItem } from "../../views/homeScreen/redux/action";
import FavouritesSVG from "../../assets/svg/favouritesSVG";
import { setItemToFavourites } from "../../views/favouritesScreen/redux/action";

const RandomNewsItem = ({ item, navigation, index }) => {

    const dispatch = useDispatch();

    const [isR, setR] = useState(false);

    const setR2 = () => {
        setR(!isR);
        dispatch(setItemToFavourites(item));
    }

    let chosenItemImage = getRightImage(item, item?.url, getNumberForImage, 
        getRightCategoryForImage, imgLink);

    const chooseItemAndNavigate = () => {
        dispatch(setRandomNewsChosenImage(chosenItemImage));
        dispatch(setRandomNewsChosenItem(item));
        navigation.navigate(ROUTES.RandomNewsItemScreen);
    }

    return (
        <View style={{marginVertical: 5, justifyContent: 'center', alignItems: 'center'}}>
            <Image 
                source={{uri: getRightImage(item, item?.url, getNumberForImage, 
                    getRightCategoryForImage, imgLink)}}
                style={styles.itemImage}
                resizeMode="stretch"
            />
            <Text style={styles.itemName}>
                {item?.name ? item?.name : item?.title}
            </Text>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity 
                    style={{backgroundColor: 'white', borderWidth: 2, marginBottom: 4, padding: 10}}
                    onPress={setR2}
                >
                    <FavouritesSVG color={isR ? 'red' : 'gray'} />
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

export default RandomNewsItem;