import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Screen from '../../components/Screen';
import BackButton from '../../components/BackButton';
import shardsImages from '../../assets/images/shards/shardsImages';
import shardsData from '../../assets/data/shards.json'
import ShardDisplay from '../../components/ShardDisplay';

"use strict";
function ShardsScreen ({ navigation }){

    //console.log(weekdayNumber);
    //console.log(dayNumber);
    //console.log(date + (parseInt(shardsData[dayNumber]['times']['start'][2].slice(0,2)) * 60 * 60 * 1000));
    //console.log(targetTime - currentTime);
    //console.log(parseInt(shardsData[dayNumber]['times']['start'][2].split(':')[1]));

    return (
        <Screen>
            <BackButton onPress={navigation.goBack}/>
            <ShardDisplay/>
        </Screen>
    )
};

export default ShardsScreen;