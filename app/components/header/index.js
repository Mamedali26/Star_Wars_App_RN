import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const HeaderText = () => {
    return(
        <View style={styles.headerView}>
            <Text style={styles.headerText}>
                STAR WARS
            </Text>
            <Text style={styles.subHeaderText}>
                The Galaxy far-far away...
            </Text>
        </View>
    );
}

export default HeaderText;