import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RandomNewsItem from "../../components/randomNewsItem";
import { getFavourites } from "../../modules/saga/selectors";
import { setFavouritesEmpty } from "./redux/action";

const FavouritesScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const favourites = useSelector(getFavourites, shallowEqual);

    useEffect(() => {
        console.log(favourites);
    });

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
        <View style={{backgroundColor: 'skyblue'}}>
            <Text style={{fontSize: 42}}>Favourites...</Text>
            <TouchableOpacity onPress={clearFavourites}>
                <Text>CLEAR ALL!</Text>
            </TouchableOpacity>
            <FlatList
                data={favourites}
                renderItem={renderItems}
                keyExtractor={item => item?.name ? item?.name : item?.title}
            />
        </View>
    );
}

export default FavouritesScreen;