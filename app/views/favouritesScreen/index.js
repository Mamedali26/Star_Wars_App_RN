import React from "react";
import { View, FlatList } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HeaderText from "../../components/header";
import MainBtn from "../../components/mainBtn";
import RandomNewsItem from "../../components/randomNewsItem";
import { getFavourites } from "../../modules/saga/selectors";
import { styles } from "./styles";
import { setFavouritesEmpty } from "./redux/action";

const FavouritesScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const favourites = useSelector(getFavourites, shallowEqual);

    const renderItems = ({ item }) => (
        <RandomNewsItem 
            navigation={navigation}
            item={item}
        />
    );

    const clearFavourites = () => {
        dispatch(setFavouritesEmpty());
    }

    return(
        <View style={styles.container}>
            <HeaderText headerTitle='Favourites' />
            <View style={styles.clearBtnWrapper}>
                <MainBtn
                    title="CLEAR ALL!"
                    fn={clearFavourites}
                    paddingVertical={4}
                />
            </View>
            <FlatList
                data={favourites}
                renderItem={renderItems}
                keyExtractor={item => item?.name ? item?.name : item?.title}
            />
        </View>
    );
}

export default FavouritesScreen;