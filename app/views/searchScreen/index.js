import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { ROUTES } from "../../services/routes";

const SearchScreen = ({ navigation }) => {

    const categoriesInfo = useSelector(state => state.reducerForSearchCategories.categoriesInfo);
    return(
        <View style={{backgroundColor: 'skyblue', flex: 1}}>
            <View style={{alignItems: 'center', width: '100%', marginHorizontal: 15}}>
                {/* <TextInput 
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
                </TouchableOpacity> */}
                {categoriesInfo?.map((item, index) => {
                    return (
                        <View key={index}>
                            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.ChosenCategoryScreen)}>
                                <Text>{item[0]}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
                {console.log(categoriesInfo)}
            </View>
        </View>
    );
}

export default SearchScreen;