import { Pressable, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Screen from '../../../components/Screen';
import questsImage from '../../../assets/images/quests/quests.jpg';
import BackButton from '../../../components/BackButton';

function QuestsScreen({ navigation }) {
    return (
        <Screen>
            <BackButton onPress={navigation.goBack}/>
            <View style={styles.container}>
                <Pressable style={[styles.imageContainer, {marginRight: 'auto'}]} onPress={() => {console.log("temp pressed")}}>
                    <Image source={questsImage} style={styles.image} resizeMode='contain'/>
                    <Text style={styles.iconText}>Temp</Text>
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

export default QuestsScreen;