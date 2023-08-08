import { Pressable, StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const BackButton = ({ onPress }) => {
    const backArrow = require("../assets/icons/backArrow.png");

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image source={backArrow} style={styles.icon} resizeMode='contain'/>
            <Text style={styles.text}>Back</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: Dimensions.get('window').width * 0.12,
        height: Dimensions.get('window').width * 0.09,
        marginRight: 'auto',
        marginLeft: 5,
    },
    container: {
        width: '100%',
        height: Dimensions.get('window').width * 0.10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text: {
        position: 'absolute',
        fontSize: 15,
        color: "black"
    }
});

export default BackButton