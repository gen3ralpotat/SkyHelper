import { Pressable, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Screen from '../components/Screen';
import treasureCandlesImage from '../assets/images/treasureCandles/treasureCandles.jpg';
import seasonalCandlesImage from '../assets/images/seasonalCandles/seasonalCandles.jpg';

function FarmingScreen({ navigation }) {

    return (
        <Screen>
            <View style={styles.container}>
                <Pressable style={[styles.imageContainer, {marginRight: 'auto'}]} onPress={() => {navigation.navigate("TreasureCandles")}}>
                    <Image source={treasureCandlesImage} style={styles.image} resizeMode='contain'/>
                    <Text style={styles.iconText}>Treasure Candles</Text>
                </Pressable>
                <Pressable style={[styles.imageContainer, {marginLeft: 'auto'}]} onPress={() => {console.log("Seasonal Pressed")}}>
                    <Image source={seasonalCandlesImage} style={styles.image} resizeMode='contain'/>
                    <Text style={styles.iconText}>Seasonal Candles</Text>
                </Pressable>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    image: {
        width: Dimensions.get('window').width * 0.43,
        height: Dimensions.get('window').width * 0.43,
        margin: Dimensions.get('window').width * 0.02, 
        borderWidth: 2,
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: 'black'
    },
    imageContainer: {
        backgroundColor: 'rgba(34, 34, 34, 0.70)',
        alignItems: 'center',
        borderRadius: 10,
        margin: 7,
        marginTop: 15
    },
    iconText: {
        color: 'white',
        fontSize: 18,
        margin: 10
    }
});

export default FarmingScreen