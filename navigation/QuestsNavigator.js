import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import QuestsScreen from '../screens/Farming/Quests/QuestsScreen';

const Tab = createMaterialTopTabNavigator();

const QuestsNavigator = () => (
    <Tab.Navigator initialRouteName='QuestsMenu' screenOptions={{ swipeEnabled: false, tabBarStyle: { display: 'none' } }}>
        <Tab.Screen name="QuestsMenu" component={QuestsScreen}/>
    </Tab.Navigator>
);

export default QuestsNavigator;