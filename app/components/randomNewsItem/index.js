import React from "react";
import { View, Image, Text } from "react-native";
import { getRightCategoryForImage, getNumberForImage, getRightImage, addToFavourites, 
    removeFromFavourites } from "./logic";
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
import AddOrRemoveFavBtn from "../addOrRemoveFavBtn";

const StarWarsItem = ({ item, navigation }) => {

    const dispatch = useDispatch();

    const favourites = useSelector(getFavourites, shallowEqual);   

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
                <AddOrRemoveFavBtn 
                    svg={<FavouritesSVG color={config.mainAppColor} 
                        width={24} height={24} />}
                    onPress={() => addToFavourites(item, favourites, dispatch, setItemToFavourites)}
                />
                <AddOrRemoveFavBtn 
                    svg={<RemoveFromFavouritesSVG color={config.COLOR_RED} 
                        width={24} height={24} />}
                    onPress={() => removeFromFavourites(item, favourites, dispatch, setItemRemoveFromFavourites)}
                />
                <MainBtn 
                    title="Click To See More!"
                    fn={chooseItemAndNavigate}
                />
            </View>
        </View>
    );
}

export default StarWarsItem;