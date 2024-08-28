import { useEffect, useRef, useState } from "react"

export const useTimer = () => {
    const [ticks, setTicks] = useState(0);
    const timerRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        restart();

        return () =>  {
            clearInterval(timerRef.current);
        }
    }, []);

    const stop = () => {
        clearInterval(timerRef.current);
    }

    const restart = () => {
        stop();

        timerRef.current = setInterval(() => {
            console.log(ticks);
            setTicks((value) => value + 1);
        }, 1100);
    }

    return {
        ticks,
        restart,
        stop,
    };
}
