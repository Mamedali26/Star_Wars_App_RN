import {StyleSheet} from "react-native";
import { config } from "../../services/config";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.mainAppColor,
    },
    logoContainer: {
        alignItems: "center", 
        justifyContent:"center",
        flex: 1,
    },
    logoImage: {
        width: '90%', 
        height: 400,
        borderWidth: 4,
        borderColor: config.COLOR_WHITE,
        borderRadius: 40,
    },
    splashText: {
        color: config.COLOR_WHITE, 
        fontSize: 36, 
        textAlign: 'center',
        fontStyle: 'italic', 
        fontWeight: 'bold',
    },
});