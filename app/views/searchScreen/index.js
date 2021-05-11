import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const SearchScreen = () => {
    return(
        <View style={{backgroundColor: 'skyblue', flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', marginHorizontal: 15}}>
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
        </View>
    );
}

export default SearchScreen;