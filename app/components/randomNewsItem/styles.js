import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    itemImage: {
        width: '95%', 
        height: 350,
    },
    itemName: {
        fontSize: 20, 
        marginVertical: 5,
    },
    clickForMoreBtn: {
        backgroundColor: 'white', 
        width: '70%',
        borderColor: 'green', 
        borderRadius: 20, 
        borderWidth: 2, 
        padding: 10
    },
    clickForMoreBtnText: {
        color: 'red', 
        fontWeight: 'bold', 
        fontSize: 20,
        textAlign:'center', 
        letterSpacing: 3
    },
});
