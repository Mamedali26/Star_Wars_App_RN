import React from "react";
import { View, Text, ScrollView } from "react-native";
import HeaderText from "../../components/header";
import RandomNewsItem from "../../components/randomNewsItem";

const HomeScreen = () => {
    return(
        <View style={{flex: 1}}>
            <HeaderText />
            <ScrollView style={{paddingVertical: 10, backgroundColor: 'orange'}}>
                <RandomNewsItem />
                <RandomNewsItem />
                <RandomNewsItem />
                <RandomNewsItem />
            </ScrollView>
        </View>
    );
}

export default HomeScreen;