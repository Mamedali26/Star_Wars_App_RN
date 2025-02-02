import { StyleSheet } from 'react-native';
import { config } from '../../services/config';

export const styles = StyleSheet.create({
    itemContainer: {
        marginVertical: 5, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    itemImage: {
        width: '95%', 
        height: 400,
        borderRadius: 30,
        marginBottom: 10,
        alignItems: 'center',
    },
    itemName: {
        fontSize: 27, 
        backgroundColor: config.COLOR_BLACK,
        width: '88%',
        borderBottomEndRadius: 50,
        color: config.COLOR_WHITE,
        textAlign: 'center',
        position: 'absolute',
        zIndex: 1,
        bottom: 118,
        fontWeight: 'bold',
        fontStyle: 'italic',
        opacity: 0.6,
    },
    btnWrapper: {
        flexDirection: 'row', 
        backgroundColor: config.COLOR_WHITE, 
        paddingHorizontal: 2,
        marginBottom: 5,
    },
    addToFavBtn: {
        alignItems: 'center',
        marginBottom: 4, 
        marginRight: 5, 
        padding: 6,
    },
});
