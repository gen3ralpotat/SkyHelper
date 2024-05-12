import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EventsScreen from '../screens/EventsScreen';
import FarmingNavigator from './FarmingNavigator';
import QuestsNavigator from './QuestsNavigator';

const Tab = createMaterialTopTabNavigator();

const MainMenuNavigator = () => (
    <Tab.Navigator initialRouteName="Farming" screenOptions={{ tabBarStyle: styles.tabNavigator } }>
        <Tab.Screen name="Farming" component={FarmingNavigator}/>
        <Tab.Screen name="Events" component={EventsScreen}/>
    </Tab.Navigator>
);

const styles = StyleSheet.create({
    tabNavigator: {
        backgroundColor: 'rgba(255,255,255,0.4)'
    },
});

export default MainMenuNavigator