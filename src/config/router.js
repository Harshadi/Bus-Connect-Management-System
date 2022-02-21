import * as React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import SearchResults from '../screens/SearchResults';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return <Stack.Navigator initialRouteName="landingScreen" screenOptions={{ headerShown: false }} >
    <Stack.Screen name="landingScreen" component={LandingScreen} />
  </Stack.Navigator>
}

function Router() {
  return (
  <Stack.Navigator initialRouteName="app" screenOptions={{ headerShown: false }} >
 <Stack.Screen name="login" component={LandingScreen} />
<Stack.Screen name="app" component={LandingScreen} />
<Stack.Screen name="searchResults" component={SearchResults} />
  </Stack.Navigator>
  );
}

export default Router;
