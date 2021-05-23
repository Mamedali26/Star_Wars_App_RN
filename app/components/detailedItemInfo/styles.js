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
        alignSelf: 'center',
    },
    itemName: {
        fontSize: 30, 
        color: config.COLOR_WHITE, 
        marginVertical: 4, 
        fontStyle: 'italic',
        textAlign: 'center',
    },
    btnsWrapper: {
        backgroundColor: config.COLOR_WHITE, 
        flexDirection: 'row',
        alignSelf:'center',
        width: '27%',
        borderWidth: 2,
    },
    infoContainer: {
        marginVertical: 10, 
        width: '85%', 
        alignSelf: 'center',
    },
    textInfo: {
        fontSize: 24, 
        color: config.COLOR_WHITE,
        borderBottomWidth: 1,
        lineHeight: 36,
    },
});
