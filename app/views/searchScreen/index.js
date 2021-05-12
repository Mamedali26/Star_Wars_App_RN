import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../services/routes";
import { imgLink } from "../../services/restApi";
import { setChosenCategoryName } from "./redux/action";

const SearchScreen = ({ navigation }) => {

    const categoriesInfo = useSelector(state => state.reducerForSearchCategories.categoriesInfo);
    const dispatch = useDispatch();

    const getCategoryImages = item => {
        let result = item;
        if (item === 'people') {
            result = 'character';
        }
        return result;
    }

    const setCategoryAndNavigate = item => {
        dispatch(setChosenCategoryName(item));
        navigation.navigate(ROUTES.ChosenCategoryScreen);
    }

    return(
        <View style={{backgroundColor: 'skyblue', flex: 1}}>
            <View style={{marginHorizontal: 15}}>
                <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                    {categoriesInfo?.map((item, index) => {
                        return (
                            <View key={index}>   
                                <Image  
                                        source={{uri: imgLink + 'categories/' + 
                                            getCategoryImages(item[0]) + '.jpg'}}
                                        style={{width: '100%', height: 200}}
                                        resizeMode='contain'
                                />                             
                                <TouchableOpacity 
                                    onPress={() => setCategoryAndNavigate(item[0])}
                                >
                                        <Text style={{textAlign: 'center', fontSize: 27, fontStyle: 'italic'}}>
                                            {item[0].toUpperCase()}
                                        </Text>
                                </TouchableOpacity>                                
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    );
}

export default SearchScreen;