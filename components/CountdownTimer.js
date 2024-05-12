import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import useCountdown from './hooks/useCountdown';

const CountdownTimer = ( textStyle, currentTime, targetTime ) => {
    const [days, hours, minutes, seconds] = useCountdown(currentTime, targetTime);

    return (
        <Text style={textStyle}>{hours}h {minutes}m {seconds}s</Text>
    )
}

export default CountdownTimer;