import { FC } from "react";
import { Pressable, Text, View } from "react-native";
import { chessClockButtonStyles as styles } from './ChessClockButtonStyles';


type ChessClockButtonProps = {
    time: string;
    onPress: () => void;
}

export const ChessClockButton: FC<ChessClockButtonProps> = ({ time, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.chessClockButton}>
            <Text style={styles.buttonText}>{time}</Text>
        </Pressable>
    );
}