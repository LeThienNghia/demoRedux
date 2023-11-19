import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, Pressable} from 'react-native';

import { useState } from 'react';

import {store} from './Redux/Store'
import { Provider } from 'react-redux';
import Counter from './Counter';

export default function App() {
 
  
  
  
  return (
    <Provider store = {store}>
        <Counter/>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
});
