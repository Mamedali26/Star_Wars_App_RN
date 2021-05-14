import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

const AddOrRemoveFavBtn = ({ svg, onPress }) => {
    return (
        <>
            <TouchableOpacity 
                style={styles.addToFavBtn}
                onPress={onPress}
            >
                {svg}
            </TouchableOpacity>
        </>
    );
}

export default AddOrRemoveFavBtn;