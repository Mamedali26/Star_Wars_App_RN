import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

const RandomNewsItem = ({ item }) => {

    const imgLink = 'https://starwars-visualguide.com/assets/img/';

    const getRightCategoryForImage = item => {
        let result = '';
        if (item?.title) result = 'films/';
        else if (item?.classification) result = 'species/';
        else if (item?.mass) result = 'characters/';
        else if (item?.vehicle_class) result = 'vehicles/';
        else if (item?.starship_class) result = 'starships/';
        else if (item?.orbital_period) result = 'planets/';
        return result;
    }

    const getNumberForImage = link => {
        let oneToLastChar = 10;
        if (link?.[link?.length - 2] != 0) {
            oneToLastChar = link?.[link?.length - 2];
        }
        return oneToLastChar;
    }

    const getRightImage = (item, url, fn) => {
        let result = '';
        if (item?.starship_class) {
            if (fn(url) == 1 || fn(url) == 2 || fn(url) == 10) {
                result = imgLink + 'placeholder.jpg';
            }
        }
        else if (!item?.starship_class) {
            if (item?.orbital_period) {
                result = imgLink + 'placeholder.jpg';
            }
            else if (!item?.orbital_period) {
                result = imgLink + getRightCategoryForImage(item) + 
                    getNumberForImage(item?.url) + '.jpg';
            }
        }
        return result;
    }

    return (
        <View style={{marginVertical: 5, justifyContent: 'center', alignItems: 'center'}}>
            <Image 
                source={{uri: getRightImage(item, item?.url, getNumberForImage)}} 
                style={{width: '95%', height: 350}}
                resizeMode="stretch"
            />
            <Text style={{fontSize: 20, marginVertical: 5}}>
                {item?.name ? item?.name : item?.title}
            </Text>
            <TouchableOpacity style={{backgroundColor: 'white', width: '70%',
            borderColor: 'green', borderRadius: 20, borderWidth: 2, padding: 10}}>
                <Text style={{color: 'red', fontWeight: 'bold', fontSize: 20,
            textAlign:'center', letterSpacing: 3}}>Click To Read!</Text>
            </TouchableOpacity>
        </View>
    );
}

export default RandomNewsItem;