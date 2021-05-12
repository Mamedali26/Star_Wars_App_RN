import React, { useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setChosenCategoryItemsSaga } from "../searchScreen/saga/action";

const ChosenCategoryScreen = () => {
    const dispatch = useDispatch();
    const chosenCategoryItemsInfo = useSelector(state => state.reducerForSearchCategories.chosenCategoryItems, shallowEqual);
    const chosenCategoryItems = chosenCategoryItemsInfo?.results;

    useEffect(() => {
        console.log(chosenCategoryItems);
        dispatch(setChosenCategoryItemsSaga());
    }, []);

    const renderItems = ({ item }) => (
        <Text>{item?.name ? item?.name : item?.title}</Text>
    );

    return(
        <View style={{flex: 1, backgroundColor: 'yellow'}}>
            <View style={{backgroundColor: 'skyblue', flexDirection: 'row'}}>
                <TextInput 
                    placeholder='Search inside of Star Wars Universe...'
                    placeholderTextColor='white'
                    style={{
                        borderWidth: 2,
                        backgroundColor: 'red',
                        width: '80%',
                        padding: 10,
                        fontSize: 16,
                        color: 'white',
                    }}
                    numberOfLines={1}
                    maxLength={40}
                />
                <TouchableOpacity style={{borderWidth: 2, backgroundColor: 'white', padding: 10}}>
                    <Text style={{textAlign: 'center', fontSize: 20}}>GO!</Text>
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