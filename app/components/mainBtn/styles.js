import { StyleSheet } from "react-native"
import { config } from "../../services/config"

export const styles = StyleSheet.create({
    mainBtn: {
        width: '60%',
        marginBottom: 10,
        justifyContent: 'center',
        backgroundColor: config.COLOR_WHITE,
    },
    mainBtnText: {
        color: config.mainAppColor, 
        fontWeight: 'bold', 
        fontSize: 20,
        textAlign:'center', 
        letterSpacing: 3,
        marginTop: 4,
    },
});
