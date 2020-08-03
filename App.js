import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput, Dimensions } from 'react-native';
import CombineNavigation from './Components/Navigation'
import ConfigureStore from './Redux/Stores'
import {Provider} from 'react-redux'

export default function App() {

  const Store = ConfigureStore()

  return (
    <Provider store={Store} >
    <CombineNavigation />
    </Provider>
  )
}