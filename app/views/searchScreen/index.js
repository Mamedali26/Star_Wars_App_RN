import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../services/routes";
import { imgLink } from "../../services/restApi";
import { setChosenCategoryName } from "./redux/action";
import { getCategoriesInfo } from "../../modules/saga/selectors";
import { styles } from "./styles";

const SearchScreen = ({ navigation }) => {

    const categoriesInfo = useSelector(getCategoriesInfo, shallowEqual);
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
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <ScrollView contentContainerStyle={styles.scrollWrapper}>
                    {categoriesInfo?.map((item, index) => {
                        return (
                            <View key={index} style={{marginBottom: 10}}>   
                                <Image  
                                        source={{uri: imgLink + 'categories/' + 
                                            getCategoryImages(item[0]) + '.jpg'}}
                                        style={styles.categoryImage}
                                        resizeMode='contain'
                                />                             
                                <TouchableOpacity 
                                    onPress={() => setCategoryAndNavigate(item[0])}
                                >
                                        <Text style={styles.clickToChooseCategoryText}>
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