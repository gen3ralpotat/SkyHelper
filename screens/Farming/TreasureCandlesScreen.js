import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Screen from '../../components/Screen';
import BackButton from '../../components/BackButton';
import treasureCandlesImages from '../../assets/images/treasureCandles/treasureCandlesImages';

"use strict";
function TreasureCandlesScreen({ navigation }) {

    let dateString = new Date().toLocaleString( "en-US", { timeZone: "America/Los_Angeles" } ).split(/[/,]/);
    let date = Date.parse(`${dateString[2]}-${dateString[0]}-${dateString[1]}`);

    const realms = {
        0: "prairie",
        1: "forest",
        2: "valley",
        3: "wasteland",
        4: "vault"
    };

    let rotation = 0;

    switch (realmNumber = Math.floor(date/86400000) % 5) {
        case 2:
        case 4:
            rotation = Math.floor(Math.floor(date/86400000)/5) % 2;
            break;
        case 0:
            rotation = 1;
            break;
        case 1:
            rotation = 1;
            break;
        case 3:
            rotation = 1;
            break;
        default:
            console.log("realmNumber out of range");
            rotation = 1;
    };

    console.log(realmNumber);
    console.log(rotation);

    const treasureCandlesImage = treasureCandlesImages[`${realms[realmNumber]}`][`Rotation${rotation}`];

    return (
        <Screen>
            <BackButton onPress={navigation.goBack}/>
            <View style={styles.container}>
                <Image source={treasureCandlesImage} style={styles.image} resizeMode='contain'/>
            </View>
        </Screen>
    );
}

const styles=StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    image: {
        width: '96%',
        height: Dimensions.get('window').width * 0.96,
        margin: Dimensions.get('window').width * 0.02 + 7, 
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2,
        overflow: 'hidden'
    }
});

export default TreasureCandlesScreen;
