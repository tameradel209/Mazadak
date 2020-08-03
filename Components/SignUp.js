import React , {useState} from 'react'
import {View, Image, Text, ScrollView, TextInput, ActivityIndicator, Button, Alert} from 'react-native'
import {HandleSignUp} from '../api'

function SignUp ({navigation}) {

    const [load, setLoad] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = async() =>{
        setLoad(true)
        try{
            const data = {firstName, lastName, email, password}
            const res = await HandleSignUp(data)
            setLoad(false)
            Alert.alert('you signed up successfull')
            navigation.navigate('Login')
        }catch(e){Alert.alert(e)}
    }

    return(
        <View>
            <Image style={{width:400, height:200}} source={require('../assets/mazadak.png')} />
            <TextInput placeholder='first name' value={firstName} onChangeText={text => setFirstName(text)} />
            <TextInput placeholder='last name' value={lastName} onChangeText={text => setLastName(text)} />
            <TextInput placeholder='email' value={email} onChangeText={text => setEmail(text)} />
            <TextInput placeholder='password' value={password} onChangeText={text => setPassword(text)} />
            {load ? <ActivityIndicator/> : null}
            <Button onPress={() => signUp()} title='register you account' />
        </View>
    )
}

export default SignUp