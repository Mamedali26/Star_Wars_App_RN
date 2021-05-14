import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const HeaderText = ({ headerTitle, subHeader }) => {
    return(
        <View style={styles.headerView}>
            <Text style={styles.headerText}>
                {headerTitle}
            </Text>
            {subHeader ? 
            <Text style={styles.subHeaderText}>
                {subHeader}
            </Text> : <></>}
        </View>
    );
}

export default HeaderText;