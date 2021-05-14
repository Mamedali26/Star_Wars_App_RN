import { StyleSheet } from "react-native";
import { config } from "../../services/config";

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: config.mainAppColor,
    },
    searchBar: {
        flexDirection: 'row', 
        margin: 10, 
        borderWidth: 2,
    },
    searchInput: {
        backgroundColor: config.COLOR_WHITE,
        width: '85%',
        padding: 10,
        fontSize: 16,
        color: config.mainAppColor,
    },
    searchBtn: {
        backgroundColor: config.COLOR_WHITE, 
        padding: 10,
        borderLeftWidth: 2
    },
    searchBtnText: {
        textAlign: 'center', 
        fontSize: 20, 
        color: config.mainAppColor,
        fontWeight: 'bold',
    },
});