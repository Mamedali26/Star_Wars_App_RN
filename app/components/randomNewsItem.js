import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

// let r = ['1', '2', "3", '4'];

// let getRandomNewsItem = (array) => {
//     let number = Math.floor(Math.random() * array.length);
//     return array[number];
// }

// getRandomNewsItem(r);


const RandomNewsItem = () => {
    return (
        <View style={{marginVertical: 5, justifyContent: 'center', alignItems: 'center'}}>
            <Image 
                source={require('../assets/images/empty_image.jpg')} 
                style={{width: '95%', height: 320}}
                resizeMode="stretch"
            />
            <Text style={{fontSize: 20, marginVertical: 5}}>ITEM NAME</Text>
            <TouchableOpacity style={{backgroundColor: 'white', width: '70%',
            borderColor: 'green', borderRadius: 20, borderWidth: 2, padding: 10}}>
                <Text style={{color: 'red', fontWeight: 'bold', fontSize: 20,
            textAlign:'center', letterSpacing: 3}}>Click To Read!</Text>
            </TouchableOpacity>
        </View>
    );
}

export default RandomNewsItem;