import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import MainMenuNavigator from './navigation/MainMenuNavigator';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const navTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent',
    },
  };

  const Stack = createStackNavigator();

  var d = (new Date()).getHours();

  const bg = (d < 7 || d > 19) ? require("./assets/images/backgroundNight.jpg") : require("./assets/images/backgroundDay.jpg");

  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.background}>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator screenOptions={{ title: "Sky Helper", headerStyle: styles.container, headerTitleStyle: styles.title}}>
          <Stack.Screen name="MainMenuNavigator" component={MainMenuNavigator}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,0.5)"
  },
  title: {
    fontSize: 18
  },
  background: {
    flex: 1,
    justifyContent: "center",
  }
});
