import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/HomeScreen";
import OverviewScreen from "./screens/OverviewScreen";
import TimeToStudy from "./screens/TimeToStudy";
import TimerScreen from "./screens/TimerScreen";
import CreateNewEvent from "./screens/CreateNewEvent";
import CalendarDisplay from "./screens/CalendarDisplay";
import * as Calendar from 'expo-calendar';

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          'rock-salt': require('./assets/fonts/RockSalt-Regular.ttf'),
        });

        const {status} = await Calendar.requestCalendarPermissionsAsync();
        if (status === 'granted') {
          console.log("Permission granted!")
        }
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <NavigationContainer>
          <Stack.Navigator
              initalRouteName={"home"}
              headerMode={'none'}
          >
            <Stack.Screen name={"home"} component={HomeScreen} />
            <Stack.Screen name={"OverviewScreen"} component={OverviewScreen} />
            <Stack.Screen name={"TimeToStudy"} component={TimeToStudy} />
            <Stack.Screen name={"TimerScreen"} component={TimerScreen} />
            <Stack.Screen name={"CreateNewEvent"} component={CreateNewEvent} />
            <Stack.Screen name={"CalendarDisplay"} component={CalendarDisplay} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
