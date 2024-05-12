import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { useState, useEffect } from 'react';
import CountdownTimer from "./CountdownTimer";
import shardsImages from "../assets/images/shards/shardsImages";
import shardsData from "../assets/data/shards.json";
import useCurrentTime from "./hooks/useCurrentTime";

const ShardDisplay = () => {
    const weekday = {
        'Sun': 0,
        'Mon': 1,
        'Tue': 2,
        'Wed': 3,
        'Thu': 4,
        'Fri': 5,
        'Sat': 6
    }

    const dateString = new Date().toLocaleString( "en-US", { timeZone: "America/Los_Angeles", weekday: 'short' } ).split(/[/, ]/);

    const time = dateString[6].split(':')

    //let date = Date.parse(`${dateString[4]}-${dateString[2]}-${dateString[3]}`);
    const date = 0;

    const weekdayNumber = weekday[dateString[0]];

    const dayNumber = dateString[3];

    const currentTime = useCurrentTime( date, time, dateString );

    return (
        <GetDisplay 
            shardsData={shardsData}
            dayNumber={dayNumber}
            weekdayNumber={weekdayNumber}
            currentTime={currentTime}
            date = {date}
        />
    );
};

export default ShardDisplay;

const GetDisplay = ( {shardsData, dayNumber, weekdayNumber, currentTime, date} ) => {

    const startTimes = shardsData[dayNumber]['times']['start'].map((time) => date + getMilliseconds(time));

    const endTimes = shardsData[dayNumber]['times']['end'].map((time) => date + getMilliseconds(time));

    const textOptions = {
        noShards: "No shards today :(",
        nextShard: "Next shard in: ",
        shardEnds: "Shard ends in: ",
        shardsDone: "No shards left today :("
    };

    const shardImage = shardsImages[shardsData[dayNumber]['realm']][shardsData[dayNumber]['location']];

    let option = textOptions.noShards;

    let image = 
        <View style={styles.container}>
            <Image source={shardImage} style={styles.image} resizeMode='contain'/>
        </View>;

    let timer = <Text></Text>;

    if (shardsData[dayNumber]['weekdaysExcluded'].includes(weekdayNumber)) 
        option = textOptions.noShards;
    else if (currentTime > endTimes[2]) option = textOptions.shardsDone;
    else {
        let between = 0;
        startTimes.forEach((element, index) => (currentTime > element && currentTime < endTimes[index]) ? between = index + 1 : between *= 1);
        switch (between) {
            case 0:
                option = textOptions.nextShard;
                timer = CountdownTimer(styles.text, currentTime, startTimes[startTimes.findIndex((element) => element > currentTime)]);
                break;
            case 1:
            case 2:
            case 3:
                option = textOptions.shardEnds;
                timer = CountdownTimer(styles.text, currentTime, endTimes[between-1]);
                break;
            default:
                console.log("ShardsDisplay error");
        };
    };

    return (
        <View style={styles.container}>
            {option === textOptions.noShards ? <View></View> : image}
            <View style={[styles.subContainer, {marginTop: (option === textOptions.noShards) * (Dimensions.get('window').width * 0.02 + 7) }]}>
                <Text style={styles.text}>{option}</Text>
                {timer}
            </View>
        </View>
    );
};

const getMilliseconds = ( timeString ) => {
    return (parseInt(timeString.split(':')[0]) * 60 * 60 * 1000) +
        (parseInt(timeString.split(':')[1]) * 60 * 1000);
};

const isBetween = ( min, max, value ) => {
    return (value > min && value < max);
};

const styles = StyleSheet.create({
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
    },
    subContainer: {
        width: '96%',
        backgroundColor: 'rgba(34, 34, 34, 0.70)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 7,
        padding: 10,
        flexDirection: 'row'
    },
    text: {
        color: 'white',
        fontSize: 18,
    }
});