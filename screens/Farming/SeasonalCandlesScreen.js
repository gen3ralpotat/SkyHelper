import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Screen from '../../components/Screen';
import BackButton from '../../components/BackButton';
import treasureCandlesImages from '../../assets/images/treasureCandles/treasureCandlesImages';

"use strict";
function SeasonalCandlesScreen({ navigation }) {

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
            rotation = Math.floor(Math.floor(date/86400000)/5) % 2 + 1;
            break;
        case 0:
        case 1:
        case 3:
            rotation = Math.floor(Math.floor(date/86400000)/5) % 3 + 1;
            break;
        default:
            console.log("realmNumber out of range");
            rotation = 1;
    };
//
    //console.log(realmNumber);
    //console.log(rotation);
    //console.log(Math.floor(Math.floor(date/86400000)/5) % 2);

    const treasureCandlesImage = treasureCandlesImages[`${realms[realmNumber]}`][`Rotation${rotation}`];

    return (
        <Screen>
            <BackButton onPress={navigation.goBack}/>
            <View style={styles.container}>
                <Image source={treasureCandlesImage} style={styles.image} resizeMode='contain'/>
            </View>
        </Screen>
    );
};

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

export default SeasonalCandlesScreen;