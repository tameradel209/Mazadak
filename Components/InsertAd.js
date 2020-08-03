import React , {useState} from 'react'
import {View,Text, StyleSheet, Modal,Image,TextInput,ScrollView,  Alert, KeyboardAvoidingView, Platform, ActivityIndicator, Button, TouchableOpacity, TouchableWithoutFeedback, Dimensions} from 'react-native'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import {Icon} from 'react-native-elements'
import {HandleImageUpload, HandleAdUpload} from '../api'
import {Entypo} from '@expo/vector-icons'

function InsertAd () {

    const [load, setLoad]= useState(false)
    const [Images, setImages] = useState([
        'https://res.cloudinary.com/gallarycloud/image/upload/v1596292004/enfeuut7dxkolzgozozo.png',
        'https://res.cloudinary.com/gallarycloud/image/upload/v1596292004/enfeuut7dxkolzgozozo.png',
        'https://res.cloudinary.com/gallarycloud/image/upload/v1596292004/enfeuut7dxkolzgozozo.png', 
        'https://res.cloudinary.com/gallarycloud/image/upload/v1596292004/enfeuut7dxkolzgozozo.png', 
        'https://res.cloudinary.com/gallarycloud/image/upload/v1596292004/enfeuut7dxkolzgozozo.png',
        'https://res.cloudinary.com/gallarycloud/image/upload/v1596292004/enfeuut7dxkolzgozozo.png',
        'https://res.cloudinary.com/gallarycloud/image/upload/v1596292004/enfeuut7dxkolzgozozo.png',
        'https://res.cloudinary.com/gallarycloud/image/upload/v1596292004/enfeuut7dxkolzgozozo.png'
    ])
    const [urls, setUrls] = useState([])
    const [index, setIndex] = useState(0)

    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [header, setHeader] = useState('')
    const [location, setLocation] = useState('')
    const [brand, setBrand] = useState('')
    const [condition, setCondition] = useState('')
    const [warranty, setWarranty] = useState('')
    const [ad_type, setAd_Type] = useState('')
    const [payment_option, setPayment_Option] = useState('')
    const [description, setDescription] = useState('')
    const [user, setUser]= useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const pickFromGallary = async () =>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(status === 'granted'){
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                aspect:[1,1],
                qualityity:0.5
            })
            if(!data.cancelled){
                Images[index] = data.uri
                setImages([...Images])
                if(index==7){setIndex(0)}
                else{setIndex(index+1)}
                let sep = data.uri.split(".")
                let newFile = {
                    uri:data.uri,
                    type:`test/${sep[sep.length-1]}`,
                    name:`test.${sep[sep.length-1]}`
                }
                console.log(Images)
                imageUpload(newFile)
            }
        }
        else{
            Alert.alert('you should give a permission')
        }
    }

    const pickFromCamera = async () =>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        if(status === 'granted'){
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                aspect:[1,1],
                qualityity:0.5
            })
            if(!data.cancelled){
                Images[index] = data.uri
                setImages([...Images])
                if(index==7){setIndex(0)}
                else{setIndex(index+1)}
                let sep = data.uri.split(".")
                let newFile = {
                    uri:data.uri,
                    type:`test/${sep[sep.length-1]}`,
                    name:`test.${sep[sep.length-1]}`
                }
                console.log(Images)
                imageUpload(newFile)
            }
        }
        else{
            Alert.alert('you should give a permission')
        }
    }

    const imageUpload = async (image) =>{
        setLoad(true)
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'MAZADAK')
        data.append('cloud_name', 'gallarycloud')
        try{
            const url = await HandleImageUpload(data)
            setUrls([...urls, url])
            setLoad(false)
        }catch(e){Alert.alert(e)}
    }

    const adUpload = async () => {
        const urlSum = urls.join(' ')
        const data = {
            images:urlSum,
            category,
            price,
            header,
            location,
            brand,
            condition,
            warranty, 
            ad_type, 
            payment_option, 
            description, 
            user,
            phone,
            email
        }
        try{
            const res = await HandleAdUpload(data)
            Alert.alert('ad uploaded successfully .')
        }catch(e){Alert.alert(e)}
    }

    const size = Dimensions.get('window').width

    return(
        <ScrollView>
            <View>
                <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
                    <TouchableWithoutFeedback onPress={() => pickFromGallary()}>
                        <View style={{justifyContent:'center', alignItems: "center", alignSelf:'center', width:100,height:100, backgroundColor: "#DDDDDD"}}>
                            <Text>select photos </Text>
                            <Text style={{fontSize:30}}>+</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => pickFromCamera()}>
                        <View style={{justifyContent:'center', alignItems: "center", alignSelf:'center', width:100,height:100, backgroundColor: "#DDDDDD"}}>
                            <Text>take photo </Text>
                            <Entypo name='camera' size={28} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
            {Images.map((image, i) => (
                <View key={i}>
                    {load && index-1 == i ? 
                        <View style={{width:size/4, height:size/4, alignItems:'center', justifyContent:'center'}}>
                            <ActivityIndicator/>
                        </View>
                         : 
                        <Image style={{width:size/4, height:size/4}} source={{uri:image}} />}
                </View>
            ))}
            </View>
            <TextInput placeholder='Category' value={category} onChangeText={text => setCategory(text)} style={{borderWidth:1, marginTop:5}} />
            <TextInput placeholder='Price' value={price} onChangeText={text => setPrice(text)} style={{borderWidth:1, marginTop:5}} />
            <TextInput placeholder='Header' value={header} onChangeText={text => setHeader(text)} style={{borderWidth:1, marginTop:5}} />
            <TextInput placeholder='Location' value={location} onChangeText={text => setLocation(text)} style={{borderWidth:1, marginTop:5}} />
            <TextInput placeholder='Brand' value={brand} onChangeText={text => setBrand(text)} style={{borderWidth:1, marginTop:5}} />
            <TextInput placeholder='Condition' value={condition} onChangeText={text => setCondition(text)} style={{borderWidth:1, marginTop:5}} />
            <TextInput placeholder='Warranty' value={warranty} onChangeText={text => setWarranty(text)} style={{borderWidth:1, marginTop:5}} />
            <TextInput placeholder='Ad Type' value={ad_type} onChangeText={text => setAd_Type(text)} style={{borderWidth:1, marginTop:5}} />
            <TextInput placeholder='Payment Option' value={payment_option} onChangeText={text => setPayment_Option(text)} style={{borderWidth:1, marginTop:5}} />
            <TextInput placeholder='Description' value={description} onChangeText={text => setDescription(text)} style={{borderWidth:1, marginTop:5}} />
            <TextInput placeholder='User' value={user} onChangeText={text => setUser(text)} style={{borderWidth:1, marginTop:5}} />
            <TextInput placeholder='Phone Number' value={phone} onChangeText={text => setPhone(text)} style={{borderWidth:1, marginTop:5}} />
            <TextInput placeholder='Email' value={email} onChangeText={text => setEmail(text)} style={{borderWidth:1, marginTop:5}} />
            <Button onPress={() => adUpload()} title='Publish Ad' />
            </View>
        </ScrollView>
    )
}

export default InsertAd