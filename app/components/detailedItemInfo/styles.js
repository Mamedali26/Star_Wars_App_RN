import { StyleSheet } from 'react-native';
import { config } from "../../services/config";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: config.mainAppColor, 
        flex: 1,
    },
    itemImage: {
        width: '95%', 
        height: 400,
    },
    itemName: {
        fontSize: 30, 
        color: config.COLOR_WHITE, 
        marginVertical: 4, 
        fontStyle: 'italic',
    },
    btnsWrapper: {
        backgroundColor: config.COLOR_WHITE, 
        flexDirection: 'row',
    },
});
