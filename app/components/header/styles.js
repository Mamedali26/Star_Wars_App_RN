import { StyleSheet } from "react-native";
import { config } from "../../services/config";

export const styles = StyleSheet.create({
    headerView: {
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingVertical: 10,
    },
    headerText: {
        fontSize: 42, 
        fontWeight: 'bold', 
        color: config.COLOR_WHITE,
    },
    subHeaderText: {
        fontSize: 27, 
        fontStyle: 'italic',
        color: config.COLOR_GOLD,
    },
});