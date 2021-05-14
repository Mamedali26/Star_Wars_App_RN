import React, { useEffect, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Keyboard } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setChosenCategoryItemsSaga, setSearchItemsSaga } from "../searchScreen/saga/action";
import RandomNewsItem from "../../components/randomNewsItem";
import { getChosenCategoryItemsInfo } from "../../modules/saga/selectors";
import { config } from "../../services/config";
import { styles } from "./styles";
import { setIsSearch, setSearchText } from "../searchScreen/redux/action";

const ChosenCategoryScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const chosenCategoryItemsInfo = useSelector(getChosenCategoryItemsInfo, shallowEqual);
    const chosenCategoryItems = chosenCategoryItemsInfo?.results;

    const textInput = useRef();

    let searchText = '';

    useEffect(() => {
        dispatch(setChosenCategoryItemsSaga());
    }, []);

    const renderItems = ({ item }) => (
        <RandomNewsItem 
            navigation={navigation}
            item={item}
        />
    );

    const makeSearch = () => {
        dispatch(setIsSearch(true));
        dispatch(setSearchText(searchText));
        dispatch(setSearchItemsSaga());
        Keyboard.dismiss();
        textInput.current.clear();
    }

    return(
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput 
                    placeholder='Search inside of Star Wars Universe...'
                    placeholderTextColor={config.mainAppColor}
                    style={styles.searchInput}
                    numberOfLines={1}
                    maxLength={40}
                    onChangeText={text => searchText = text}
                    ref={text => textInput.current = text}
                />
                <TouchableOpacity 
                    style={styles.searchBtn}
                    onPress={makeSearch}
                >
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