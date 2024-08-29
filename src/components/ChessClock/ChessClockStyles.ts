import { StyleSheet } from "react-native";

export const chessClockStyles = StyleSheet.create({
    container: {
        flex: 1,
    },

    buttonBlock: {
        flex: 1,
        padding: 20,
    },

    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    controlButton: {
        fontSize: 24,
    }
});
