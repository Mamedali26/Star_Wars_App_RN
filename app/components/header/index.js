import React from "react";
import { View, Text } from "react-native";

const HeaderText = () => {
    return(
        <View style={{alignItems: 'center', 
        justifyContent: 'center', paddingVertical: 10, backgroundColor: 'skyblue'}}>
            <Text style={{fontSize: 42, fontWeight: 'bold', 
            color: 'darkred'}}>
                STAR WARS
            </Text>
            <Text style={{fontSize: 27, 
                fontStyle: 'italic'}}>
                    The Galaxy far-far away...
            </Text>
        </View>
    );
}

export default HeaderText;