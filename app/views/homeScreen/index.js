import React, { useEffect } from "react";
import { View, ScrollView, BackHandler, ActivityIndicator } from "react-native";
import { shallowEqual, useSelector } from "react-redux";
import HeaderText from "../../components/header";
import StarWarsItem from "../../components/randomNewsItem";
import { getIsLoading, getRandomNewsItems } from "../../modules/saga/selectors";
import { styles } from "./styles";
import { config } from "../../services/config";

const HomeScreen = ({ navigation }) => {
    const randomNewsItems = useSelector(getRandomNewsItems, shallowEqual);
    const isLoading = useSelector(getIsLoading, shallowEqual);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
        return () =>
          BackHandler.removeEventListener('hardwareBackPress', () => true)
      }, []);

    return(
        <View style={styles.container}>
            <HeaderText 
                headerTitle='STAR WARS'
                subHeader="The Galaxy far-far away..."
            />
            <ScrollView>
                {isLoading ? <ActivityIndicator color={config.COLOR_GOLD} size={40} /> :
                randomNewsItems.map((item, index) => {
                    return <StarWarsItem 
                        key={index}
                        item={item}
                        navigation={navigation}
                        index={index}
                    />
                })}
            </ScrollView>
        </View>
    );
}

export default HomeScreen;