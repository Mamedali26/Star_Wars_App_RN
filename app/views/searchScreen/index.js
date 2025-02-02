import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../services/routes";
import { imgLink } from "../../services/restApi";
import { setChosenCategoryItemsEmpty, setChosenCategoryName, setIsSearch, setNextPageUrlsEmpty, 
    setPageCount } from "./redux/action";
import { getCategoriesInfo } from "../../modules/saga/selectors";
import { styles } from "./styles";
import { getCategoryImages } from "./logic";

const SearchScreen = ({ navigation }) => {

    const categoriesInfo = useSelector(getCategoriesInfo, shallowEqual);
    const dispatch = useDispatch();    

    const setCategoryAndNavigate = item => {
        dispatch(setChosenCategoryName(item));
        dispatch(setIsSearch(false));
        dispatch(setChosenCategoryItemsEmpty());
        dispatch(setPageCount(1));
        dispatch(setNextPageUrlsEmpty());
        navigation.navigate(ROUTES.ChosenCategoryScreen);
    }

    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <ScrollView contentContainerStyle={styles.scrollWrapper}>
                    {categoriesInfo?.map((item, index) => {
                        return (
                            <View key={index} style={styles.categoryWrapper}>  
                                <TouchableOpacity 
                                    onPress={() => setCategoryAndNavigate(item[0])}
                                > 
                                    <Image  
                                            source={{uri: imgLink + 'categories/' + 
                                                getCategoryImages(item[0]) + '.jpg'}}
                                            style={styles.categoryImage}
                                            resizeMode='contain'
                                    />                          
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