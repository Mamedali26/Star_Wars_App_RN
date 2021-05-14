import { StyleSheet } from "react-native";
import { config } from "../../services/config";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.mainAppColor,
    },
    clearBtnWrapper: {
        alignItems: 'center',
    },
});