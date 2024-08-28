import { Button, View } from "react-native"
import { chessClockStyles as styles } from './ChessClockStyles';
import { ChessClockButton } from "../ChessClockButton/ChessClockButton";
import { useEffect, useRef, useState } from "react";
import { useTimer } from "../../hooks/useTimer";

const INITIAL_SECONDS = 10;

export const ChessClock = () => {
    const { ticks, stop, restart } = useTimer();
    const [currenTimer, setCurrenTimer] = useState<'first' | 'second'>();
    const [firstTimerSeconds, setFirstTimerSeconds] = useState(INITIAL_SECONDS);
    const [secondTimerSeconds, setSecondTimerSeconds] = useState(INITIAL_SECONDS);
    
    const handleMinusSecond = (seconds: number) => {
        if (seconds === 0) {
            stop();
            setCurrenTimer(undefined);
            return 0;
        }
        return seconds - 1
    }

    const restartTimers = () => {
        setFirstTimerSeconds(INITIAL_SECONDS);
        setSecondTimerSeconds(INITIAL_SECONDS);
        restart();
    }

    useEffect(() => {
        if (currenTimer === 'first') {
            setFirstTimerSeconds(handleMinusSecond);
        } 

        if (currenTimer === 'second') {
            setSecondTimerSeconds(handleMinusSecond);
        }
    }, [ticks, currenTimer])

    return (
        <View style={styles.container}>
            <View style={styles.buttonBlock}>
                <ChessClockButton time={`${firstTimerSeconds}`} onPress={() => setCurrenTimer('second')} />
            </View>
            <Button title="restart" onPress={restartTimers} />
            <View style={styles.buttonBlock}>
                <ChessClockButton time={`${secondTimerSeconds}`} onPress={() => setCurrenTimer('first')} />
            </View>
        </View>
    )
}