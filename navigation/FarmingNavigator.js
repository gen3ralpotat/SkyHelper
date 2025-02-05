import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FarmingScreen from '../screens/FarmingScreen';
import TreasureCandlesScreen from '../screens/Farming/TreasureCandlesScreen';
import ShardsScreen from '../screens/Farming/ShardsScreen';
import SeasonalCandlesScreen from '../screens/Farming/SeasonalCandlesScreen';
import QuestsNavigator from './QuestsNavigator';
import QuestsScreen from '../screens/Farming/Quests/QuestsScreen';

const Tab = createMaterialTopTabNavigator();

const FarmingNavigator = () => (
    <Tab.Navigator initialRouteName='FarmingMenu' screenOptions={{ swipeEnabled: false, tabBarStyle: { display: 'none' } }}>
        <Tab.Screen name="FarmingMenu" component={FarmingScreen}/>
        <Tab.Screen name="TreasureCandles" component={TreasureCandlesScreen}/>
        <Tab.Screen name="SeasonalCandles" component={SeasonalCandlesScreen}/>
        <Tab.Screen name="Shards" component={ShardsScreen}/>
        <Tab.Screen name="Quests" component={QuestsNavigator}/>
    </Tab.Navigator>
);

const styles = StyleSheet.create({
    temp: {
        backgroundColor: 'rgba(255,255,255,0.4)'
    },
});

export default FarmingNavigator;