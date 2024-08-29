import { FC } from "react";
import { Pressable, Text, View } from "react-native";
import { chessClockButtonStyles as styles } from './ChessClockButtonStyles';


type ChessClockButtonProps = {
    time: string;
    reversed?: boolean;
    onPress: () => void;
}

export const ChessClockButton: FC<ChessClockButtonProps> = ({ time, reversed, onPress }) => {
    return (
        <Pressable 
            onPress={onPress} 
            style={{
                ...styles.chessClockButton,
                transform: [{ rotate: reversed ? '180deg' : '0deg' }]
            }}
        >
            <Text style={styles.buttonText}>{time}</Text>
        </Pressable>
    );
}