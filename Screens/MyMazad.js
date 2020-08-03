import React, { Components } from 'react'
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {useDispatch, useSelector} from 'react-redux'
import * as ActionTypes from '../Redux/ActionTypes'

function MyMazad (){

    const dispatch = useDispatch()
    const token = useSelector(state => state.userToken)
    const data = token.split(' ')
    const logout = async () =>{
        await AsyncStorage.removeItem("newToken")
        dispatch({type:ActionTypes.SIGN_OUT, payload:''})
    }

    return (
        <View>
            <Image style={{width:100, height:100, borderRadius:100, alignSelf:'center', margin:10}} source={require('../assets/mazadak.png')} />
            <Text style={{borderWidth:1, borderRadius:10, fontSize:22, alignSelf:'center',paddingHorizontal:10, borderColor:'red'}}>{data[0]}</Text>
            <Text style={{alignSelf:'center', margin:10, fontSize:24}}>my name : {data[1]} {data[2]}</Text>
            <TouchableOpacity onPress={() => logout()} style={{height:40, alignSelf:'center', width:Dimensions.get('screen').width-50, backgroundColor:'#ff6666', justifyContent:'center', margin:10, borderRadius:10}}>
                    <Text style={{color:'white', alignSelf:'center',alignContent:'center', fontSize:20}}>log out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MyMazad