import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput, Dimensions } from 'react-native';
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home'
import Books from '../Screens/HomeScreens/Books'
import Business from '../Screens/HomeScreens/Business'
import Electronics from '../Screens/HomeScreens/Electronics'
import Fashion from '../Screens/HomeScreens/Fashion'
import Furniture from '../Screens/HomeScreens/Furniture'
import Jobs from '../Screens/HomeScreens/Jobs'
import Kids from '../Screens/HomeScreens/Kids'
import Mobile from '../Screens/HomeScreens/Mobile'
import Pets from '../Screens/HomeScreens/Pets'
import Properties from '../Screens/HomeScreens/Properties'
import Services from '../Screens/HomeScreens/Services'
import Vehicles from '../Screens/HomeScreens/Vehicles'
import CarsForSale from '../Screens/HomeScreens/VehicleScreens/CarsForSale'
import CarSpareParts from '../Screens/HomeScreens/VehicleScreens/CarSpareParts'
import Favorites from './Favorites'
import Messages from '../Screens/Messages'
import MyMazad from '../Screens/MyMazad'
import InsertAd from '../Components/InsertAd'
import Login from './Login'
import SignUp from './SignUp'
import {MaterialCommunityIcons, Entypo, AntDesign, MaterialIcons, EvilIcons, Ionicons} from '@expo/vector-icons'
import {useSelector} from 'react-redux'
import Search from './Search'
import Ad from './Ad'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const IconWithBadge = ( name, badgeCount, color, size ) => {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <MaterialIcons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

function StackNavigation() {

    return (
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Books' component={Books} />
        <Stack.Screen name='Business' component={Business} />
        <Stack.Screen name='Electronics' component={Electronics} />
        <Stack.Screen name='Fashion' component={Fashion} />
        <Stack.Screen name='Furniture' component={Furniture} />
        <Stack.Screen name='Jobs' component={Jobs} />
        <Stack.Screen name='Kids' component={Kids} />
        <Stack.Screen name='Mobile' component={Mobile} />
        <Stack.Screen name='Pets' component={Pets} />
        <Stack.Screen name='Properties' component={Properties} />
        <Stack.Screen name='Services' component={Services} />
        <Stack.Screen name='Vehicles' component={Vehicles} />
        <Stack.Screen name='CarsForSale' component={CarsForSale} />
        <Stack.Screen name='CarSpareParts' component={CarSpareParts} />
        <Stack.Screen name='Search' component={Search} />
        <Stack.Screen name='Ad' component={Ad} />
      </Stack.Navigator>
    )
  }

  function FavoriteNavigation() {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Favorites' component={Favorites} />
        <Stack.Screen name='Ad' component={Ad} />
      </Stack.Navigator>
    )
  }

  function TabNavigation() {
    
    const tabBarIcon = (route, focused, color, size) =>{
      switch(route.name){
        case 'Home':
          return <Ionicons name='md-home' size={size} color={color} />
        case 'Favorites':
          return <MaterialIcons name='favorite' size={size} color={color} />
          case 'InsertAd':
            return <Ionicons name='md-add' size={size} color={color} />
        case 'Messages':
          return IconWithBadge('message', focused ? 0 : 3, color, size)
        case 'MyMazad':
          return <MaterialIcons name='account-circle' size={size} color={color} />
        }
    }

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => tabBarIcon(route, focused, color, size),
            })}
            tabBarOptions={{
              keyboardHidesTabBar:true,
              activeTintColor: 'red',
              inactiveTintColor: 'gray',
            }}>
          <Tab.Screen name="Home" component={StackNavigation} />
          <Tab.Screen name="Favorites" component={FavoriteNavigation}  />
          <Tab.Screen name="InsertAd" component={InsertAd} />
          <Tab.Screen name="Messages" component={Messages} />
          <Tab.Screen name="MyMazad" component={MyMazad} />
        </Tab.Navigator>
    )
  }

  function CombineNavigation() {

    const isSignedout = useSelector(state => state.isSignedout)
    const [value, setValue] = useState('')

    const headerTitle = (route) =>{
      switch (route.name){
        case 'Login':
          return <Text style={{color:'white'}}>login to compete</Text>
        case 'SignUp':
          return <Text style={{color:'white'}}>sign up to login</Text>
        case 'TabNavigation':
          return null
      }
    }
    return(
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={({route}) =>({
            headerTitle:headerTitle(route),
            headerTitleAlign:'center',
            headerStyle:{backgroundColor:'red'},
            headerBackTitleVisible:false,
            })}>
            {!isSignedout ? (
                <>
                <Stack.Screen name='TabNavigation' component={TabNavigation} />
                </>
            ) : (
                <>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='SignUp' component={SignUp} />
                </>
            )}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  export default CombineNavigation

  /*
            screenOptions={({route}) =>({
            headerStyle:{marginTop:Constants.statusBarHeight},
            headerTitle: () => route.name == 'Login' ?  <Text style={{color:'white', alignSelf:'center'}}>login to compete</Text> : <TextInput placeholder='search for a thing' value={value} onChangeText={v => setValue(v)} style={{backgroundColor:'#42b3f5', width:Dimensions.get('screen').width-100, height:30}} />,
            headerStyle:{backgroundColor:'#42a1f5'},
            headerRight: () => route.name == 'Login' ? null : <MaterialIcons name='location-on' size={14} color='#fff' style={{marginRight:20}}/>,
            headerBackTitleVisible:false,
            })}*/