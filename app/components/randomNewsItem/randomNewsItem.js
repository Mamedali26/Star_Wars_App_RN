import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { getRightCategoryForImage, getNumberForImage, getRightImage } from "./logic";
import { styles } from './styles';
import { imgLink } from "../../services/restApi";
import { ROUTES } from "../../services/routes";

const RandomNewsItem = ({ item, navigation }) => {

    return (
        <View style={{marginVertical: 5, justifyContent: 'center', alignItems: 'center'}}>
            <Image 
                source={{uri: getRightImage(item, item?.url, getNumberForImage, 
                    getRightCategoryForImage, imgLink)}}
                style={styles.itemImage}
                resizeMode="stretch"
            />
            <Text style={styles.itemName}>
                {item?.name ? item?.name : item?.title}
            </Text>
            <TouchableOpacity 
                style={styles.clickForMoreBtn}
                onPress={() => navigation.navigate(ROUTES.RandomNewsItemScreen)}
            >
                <Text style={styles.clickForMoreBtnText}>Click To See More!</Text>
            </TouchableOpacity>
        </View>
    );
}

export default RandomNewsItem;