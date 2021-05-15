import React, { useEffect, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Keyboard, 
    ActivityIndicator } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setSearchItemsSaga } from "../searchScreen/saga/action";
import RandomNewsItem from "../../components/randomNewsItem";
import { getChosenCategoryItemsInfo, getSearchResults, getIsSearch, getIsLoading } from "../../modules/saga/selectors";
import { config } from "../../services/config";
import { styles } from "./styles";
import { setIsSearch, setPageCount, setSearchText } from "../searchScreen/redux/action";
import { setChosenCategoryItemsSaga } from "./saga/action";

const ChosenCategoryScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const searchResults = useSelector(getSearchResults, shallowEqual);
    const isSearch = useSelector(getIsSearch, shallowEqual);
    const isLoading = useSelector(getIsLoading, shallowEqual);
    const chosenCategoryItems = useSelector(getChosenCategoryItemsInfo, shallowEqual);
    const nextPages = useSelector(state => state.reducerForSearchCategories.nextPageUrls, shallowEqual);
    const textInput = useRef();
    let searchText = '';

    useEffect(() => {
        dispatch(setChosenCategoryItemsSaga());
    }, []);

    const renderItems = ({ item }) => {
        return <RandomNewsItem 
            navigation={navigation}
            item={item}
        />
    };

    const makeSearch = () => {
        dispatch(setIsSearch(true));
        dispatch(setSearchText(searchText));
        dispatch(setSearchItemsSaga());
        Keyboard.dismiss();
        textInput.current.clear();
    }

    const loadMoreContent = () => {
        if (nextPages?.[nextPages?.length - 1]) {
            let lastUrl = nextPages?.[nextPages?.length - 1];
            let pageNumber = lastUrl?.substring(lastUrl?.lastIndexOf('=') + 1);
            dispatch(setPageCount(pageNumber));
            dispatch(setChosenCategoryItemsSaga());            
        }
    }

    return(
        console.log(nextPages),
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
            {isSearch && <Text style={styles.searchResultsFound}>
                Found {searchResults?.count} search results
            </Text>}
            {isLoading ? <ActivityIndicator color={config.COLOR_GOLD} size={40} /> :
            <FlatList
                data={isSearch ? searchResults?.results : chosenCategoryItems}
                renderItem={renderItems}
                keyExtractor={item => item?.name ? item?.name : item?.title}
                onEndReached={loadMoreContent}
                ListFooterComponent={nextPages?.[nextPages?.length - 1] ? 
                    <ActivityIndicator color={config.COLOR_GOLD} size={40} 
                /> : <></>}
            />}
        </View>        
    );
}

export default ChosenCategoryScreen;