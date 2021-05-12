import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const FavouritesScreen = () => {

    //const isFavourite = useSelector();
    const favourites = useSelector(state => state.reducerFavouritesScreen.favourites);

    useEffect(() => {
        console.log(favourites);
    });

    return(
        <View style={{backgroundColor: 'skyblue'}}>
            <Text style={{fontSize: 42}}>SOME OTHER TEXT HERE.....</Text>
        </View>
    );
}

export default FavouritesScreen;