import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const MainBtn = ({ fn, title, paddingVertical }) => {
    return (
        <TouchableOpacity 
            style={[styles.mainBtn, {paddingVertical}]}
            onPress={fn}
        >
            <Text style={styles.mainBtnText}>{title}</Text>
        </TouchableOpacity>
    );
}

export default MainBtn;