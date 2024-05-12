import { Pressable, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Screen from '../components/Screen';
import treasureCandlesImage from '../assets/images/treasureCandles/treasureCandles.jpg';
import seasonalCandlesImage from '../assets/images/seasonalCandles/seasonalCandles.jpg';
import shardsImage from '../assets/images/shards/shards.jpg';
import questsImage from '../assets/images/quests/quests.jpg';

function FarmingScreen({ navigation }) {
    return (
        <Screen>
            <View style={styles.container}>
                <Pressable style={[styles.imageContainer, {marginRight: 'auto'}]} onPress={() => {navigation.navigate("TreasureCandles")}}>
                    <Image source={treasureCandlesImage} style={styles.image} resizeMode='contain'/>
                    <Text style={styles.iconText}>Treasure Candles</Text>
                </Pressable>
                <Pressable style={[styles.imageContainer, {marginLeft: 'auto'}]} onPress={() => {navigation.navigate("SeasonalCandles")}}>
                    <Image source={seasonalCandlesImage} style={styles.image} resizeMode='contain'/>
                    <Text style={styles.iconText}>Seasonal Candles</Text>
                </Pressable>
                <Pressable style={[styles.imageContainer, {marginRight: 'auto'}]} onPress={() => {navigation.navigate("Shards")}}>
                    <Image source={shardsImage} style={styles.image} resizeMode='contain'/>
                    <Text style={styles.iconText}>Shards</Text>
                </Pressable>
                <Pressable style={[styles.imageContainer, {marginLeft: 'auto'}]} onPress={() => navigation.navigate("Quests", {screen: "QuestsMenu"})}>
                    <Image source={questsImage} style={styles.image} resizeMode='contain'/>
                    <Text style={styles.iconText}>Dailies Help</Text>
                </Pressable>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
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
        marginHorizontal: 7,
        marginTop: 15
    },
    iconText: {
        color: 'white',
        fontSize: 18,
        margin: 10
    }
});

export default FarmingScreen;