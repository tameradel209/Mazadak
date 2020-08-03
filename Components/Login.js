import React, {useState, useEffect} from 'react'
import {View, Text, Image, Dimensions, TextInput, TouchableOpacity, Platform, Animated, ActivityIndicator, Alert} from 'react-native'
import { FontAwesome} from '@expo/vector-icons'
import * as Facebook from 'expo-facebook'
import * as Google from 'expo-google-app-auth'
import Constants from 'expo-constants'
import * as ActionTypes from '../Redux/ActionTypes'
import {useSelector, useDispatch} from 'react-redux'
import {Authentication} from '../api'
import AsyncStorage from '@react-native-community/async-storage'

function Login ({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)
    const [loginError, setLoginErr] = useState('')
    const [temp, setTemp] = useState('') 

    const dispatch = useDispatch()

    const face = async () => {
        const permissions = ['public_profile', 'user_birthday', 'user_likes']
        try{
            Facebook.initializeAsync(Constants.manifest.facebookAppId)
            const {type, token} = await Facebook.logInWithReadPermissionsAsync({permissions})
            if(type=='success'){
                const response = await fetch(`https://graph.facebook.com/me?fields=name,email,picture,first_name,birthday,likes&access_token=${token}`)
                const res = await response.json()
                dispatch({type:ActionTypes.RESTORE_TOKEN, payload:res})
                console.log(res)
            }
            else{console.log('erroe')}
        }
        catch(err){console.log(err.message)}

    }


    const google = async () => {
        const permissions = ['profile', 'email']
        try{
            const result = await Google.logInAsync({
                androidClientId: Constants.manifest.extra.googleAppId.android,
                iosClientId: Constants.manifest.extra.googleAppId.ios,
                permissions
            })
            if(result.type=='success'){
                dispatch({type:ActionTypes.RESTORE_TOKEN, payload:result.accessToken})
                console.log(result.accessToken)
            }
            else{console.log('error')}
        }
        catch(err){console.log(err.message)}
    }

    const login = async () => {
       setLoad(true)
       setLoginErr('')
       try{
           const data = {email, password}
        const res = await Authentication(data)
        setLoad(false)
        if(res._id){
            await AsyncStorage.setItem("newToken",res.email+' '+res.firstName+' '+res.lastName)
            dispatch({type:ActionTypes.RESTORE_TOKEN, payload:res.email+' '+res.firstName+' '+res.lastName})
        }
        else{
            setLoginErr(res)
        }
       }catch(e){Alert.alert(e)}
    }

    useEffect(() => {
        const boot = async () => {
            let token = null
            try{
                token = await AsyncStorage.getItem("newToken")
            }catch(e){}
            if(token !== null){
                dispatch({type:ActionTypes.RESTORE_TOKEN, payload:token})
            }
        }
        boot()
        
    }, [])

    const position = new Animated.ValueXY({x:0, y:200})

    useEffect(() => {
        Animated.spring(position,{
            toValue:{x:200, y:-50},
            bounciness:15,
        }).start()
    }, [temp])

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Animated.View style={{transform:[{translateY:position.y}]}}>
                <Image style={{width:400, height:200}} source={require('../assets/mazadak.png')} />
            </Animated.View>
            <TextInput placeholder='enter username' value={email} onChangeText={text => setEmail(text)} style={{height:40,borderColor:'#c2c2c2', borderWidth:1, width:Dimensions.get('screen').width-50, padding:5, margin:10, borderRadius:10}} />
            <TextInput placeholder='enter password' value={password} onChangeText={text => setPassword(text)} secureTextEntry style={{height:40,borderColor:'#c2c2c2', borderWidth:1, width:Dimensions.get('screen').width-50, padding:5, margin:10, borderRadius:10}} />
            {load ? <ActivityIndicator />: null}
            {loginError!=='' ? <Text style={{color:'red'}}>{loginError}</Text> : null }
            <TouchableOpacity onPress={() => login()} style={{height:40, width:Dimensions.get('screen').width-50, backgroundColor:'#ff6666', justifyContent:'center', margin:10, borderRadius:10}}>
                    <Text style={{color:'white', alignSelf:'center',alignContent:'center', fontSize:20}}>signin</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row'}}>
                <Text>by continuing you agree to </Text>
                <TouchableOpacity>
                    <Text style={{color:'blue', textDecorationLine:'underline'}}>terms and conditions</Text>
                </TouchableOpacity>
            </View>
            {Platform.OS === 'ios' ? 
                <TouchableOpacity style={{height:50, width:Dimensions.get('screen').width-50, backgroundColor:'#000', flexDirection:'row', alignItems:'center', margin:10, borderRadius:10}}>
                    <FontAwesome name='apple' size={24} color='white' style={{marginLeft:20}}/>
                    <Text style={{color:'white', marginLeft:60, fontSize:20}}>signin with apple</Text>
                </TouchableOpacity> : null
        }
            <TouchableOpacity onPress={() => face()} style={{height:50, width:Dimensions.get('screen').width-50, backgroundColor:'#4267B2', flexDirection:'row', alignItems:'center', margin:10, borderRadius:10}}>
                    <FontAwesome name='facebook' size={24} color='white' style={{marginLeft:20}} />
                    <Text style={{color:'white', marginLeft:60, fontSize:20}}>signin with facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => google()} style={{height:50, width:Dimensions.get('screen').width-50, backgroundColor:'#db3236', flexDirection:'row', alignItems:'center', margin:10, borderRadius:10}}>
                    <FontAwesome name='google' size={24} color='white' style={{marginLeft:20}} />
                    <Text style={{color:'white', marginLeft:60, fontSize:20}}>signin with google</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
                <Text style={{fontSize:16, color:'blue', textDecorationLine:'underline'}}>create an account</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login