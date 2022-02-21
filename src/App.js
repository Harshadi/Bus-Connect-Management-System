import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from './config/router';

function App() {
  return (
   <NavigationContainer>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
