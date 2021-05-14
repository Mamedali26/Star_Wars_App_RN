import React, { useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setChosenCategoryItemsSaga } from "../searchScreen/saga/action";
import RandomNewsItem from "../../components/randomNewsItem";
import { getChosenCategoryItemsInfo } from "../../modules/saga/selectors";
import { config } from "../../services/config";
import { styles } from "./styles";

const ChosenCategoryScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const chosenCategoryItemsInfo = useSelector(getChosenCategoryItemsInfo, shallowEqual);
    const chosenCategoryItems = chosenCategoryItemsInfo?.results;

    useEffect(() => {
        dispatch(setChosenCategoryItemsSaga());
    }, []);

    const renderItems = ({ item }) => (
        <RandomNewsItem 
            navigation={navigation}
            item={item}
        />
    );

    return(
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput 
                    placeholder='Search inside of Star Wars Universe...'
                    placeholderTextColor={config.mainAppColor}
                    style={styles.searchInput}
                    numberOfLines={1}
                    maxLength={40}
                />
                <TouchableOpacity style={styles.searchBtn}>
                    <Text style={styles.searchBtnText}>GO!</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={chosenCategoryItems}
                renderItem={renderItems}
                keyExtractor={item => item?.name ? item?.name : item?.title}
            />
        </View>        
    );
}

export default ChosenCategoryScreen;