import React , {useState} from 'react'
import {View, Text, Image, Dimensions, ScrollView, Button, Alert, FlatList,TextInput, TouchableOpacity, Platform, Animated, Share} from 'react-native'
import {ListItem} from 'react-native-elements'
import {SimpleLineIcons, MaterialIcons, FontAwesome, Feather, EvilIcons, AntDesign} from '@expo/vector-icons'
import Properties from '../Screens/HomeScreens/Properties'
import * as Facebook from 'expo-facebook'
import * as Google from 'expo-google-app-auth'
import Constants from 'expo-constants'
import {useDispatch, useSelector} from 'react-redux'
import * as ActionTypes from '../Redux/ActionTypes'

function ImageSwiper (props){

    const [active, setActive] = useState(0)

    const Images = props.images

    const {width} = Dimensions.get('window')
    const height = width - 200

    const change = ({nativeEvent}) => {
        console.log(Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width))

        const slide = Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width)
        if(slide !== active){
            setActive(slide)
        }
    }

    return(
        <View style={{width, height}} >
            <ScrollView pagingEnabled horizontal onScroll={change} style={{width, height}} >
                {
                    Images.map((image, index) => (
                        <Image 
                            key={index} 
                            source={{ uri: image }}
                            style={{ width, height, resizeMode:'cover'}}
                            />
                    ))
                }
            </ScrollView>
            <View style={{flexDirection:'row', position:'absolute', bottom:0, alignSelf:'center'}}>
                {
                    Images.map((i,k) => (
                        <Text key={k} style={k==active ? {color:'white', fontSize:10} : {color:'#888', fontSize:10}}>⬤</Text>
                    ))
                }
            </View>
            <View style={{position:'absolute', bottom:0 }}>
            <Text style={{fontSize:20,alignSelf:'flex-start', backgroundColor:'#bab8b8'}}>{props.price}</Text>
            <View style={{marginHorizontal:10,marginBottom:5, borderBottomWidth:1, borderBottomColor:'white', width}} >
                <Text style={{fontSize:20}}>{props.header}</Text>
            </View>
            <Text style={{fontSize:16, color:'#bab8b8', marginHorizontal:10}}>{props.publish_time}</Text>
        </View>
        </View>
    )
}

/*
function Header (){
    return(
        <View>
            <Text style={{fontSize:20,alignSelf:'flex-start', backgroundColor:'#bab8b8'}}>200,000 EGP</Text>
            <View style={{marginHorizontal:10, borderBottomWidth:1}} >
                <Text style={{fontSize:20}}>the product</Text>
            </View>
            <Text style={{fontSize:16, color:'#bab8b8', marginHorizontal:10}}>the release time</Text>
        </View>
    )
}
*/


function HeaderIcons (props){

    const dispatch = useDispatch()
    const favorite = props.favorite

    return(
        <View style={{flexDirection:'row', marginTop:10, paddingVertical:5}}>
            <TouchableOpacity onPress={() => dispatch({type:favorite ? ActionTypes.UNFAVORITE : ActionTypes.FAVORITE, payload:props.item})} style={{marginLeft:10}}>
                <FontAwesome name={favorite ? 'star' : 'star-o'} size={24} color='black' style={{marginLeft:10}} />
                <Text>favorite</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:20}}>
                <Feather name='share-2' size={24} color='black' style={{marginLeft:5}}/>
                <Text>Share</Text>
            </TouchableOpacity>
            
            <View style={{flex:1,alignItems:'flex-end', marginRight:10}}>
                <SimpleLineIcons name='flag' size={24} color='black' style={{alignSelf:'flex-end', marginRight:10}} />
                <Text>Report</Text>
            </View>
        </View>
    )
}

function Location (props){
    return(
        <View>
            <Image style={{height:60, width:'100%'}} source={require('../assets/map.jpg')} />
            <View style={{ position:'absolute', width:'95%', height:40, margin:10, backgroundColor:'#fff', alignItems:'center', flexDirection:'row'}}>
                <Text style={{color:'#bab8b8', marginLeft:5}}>Location</Text>
                <View style={{flex:1, marginRight:5,flexDirection:'row', justifyContent:'flex-end'}}>
                    <Text style={{marginRight:5}}>{props.location}</Text>
                    <SimpleLineIcons name='location-pin' size={14} color='red' />
                </View>
            </View>
        </View>
    )
}

function Row (props){
    return(
        <View>
            <View style={{height:45, flexDirection:'row', marginHorizontal:10, borderBottomWidth:0.5, borderBottomColor:'#bab8b8', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={{color:'#bab8b8'}}>{props.type}</Text>
                <Text>{props.value}</Text>
            </View>
        </View>
    )
}

function Body (props){
    return(
        <View>
            <View style={{margin:10}}>
                <Text style={{fontSize:18}}>{props.description}</Text>
            </View>
            <View style={{height:45,width:Dimensions.get('screen').width, flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginRight:50, borderTopWidth:0.5}}>
                <Text style={{color:'#bab8b8'}}>ID: {props._id}  Views: 151</Text>
                <View style={{flexDirection:'row', marginRight:20}}>
                    <Text style={{color:'red', marginRight:10}}>Report</Text>
                    <SimpleLineIcons name='flag' size={20} color='red' />
                </View>
            </View>
        </View>
    )
}

function Account (props){
    return(
        <View style={{backgroundColor:'#bab8b8', height:150, alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity onPress={props.navigation} style={{alignItems:'center', justifyContent:'center'}}>
                <View style={{backgroundColor:'#fff',height:60, width:60, borderRadius:30, margin:5, alignItems:'center', justifyContent:'center'}}>
                    <MaterialIcons name='person-outline' size={40} color='black' />
                </View>
                <Text>{props.user}</Text>
                <Text style={{color:'#42a1f5'}}>ads of this user</Text>                
            </TouchableOpacity>

        </View>
    )
}

function Tips (){
    return(
        <View style={{height:150,margin:10}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Safety tips!</Text>
            <Text style={{fontSize:20}}>.   Never transfer money in advance</Text>
            <Text style={{fontSize:20}}>.   Meet te seller at the public place</Text>
            <Text style={{fontSize:20}}>.   Avoid items with unrealistic prices</Text>
            <Text style={{fontSize:20}}>.   Don't proceed if something seems wrong</Text>
        </View>
    )
}

function Card (props){

    const item = props.item
    const {images, header, price, location, publish_time, description, _id, user} = item
    const imArr = images.split(' ')

    const {favorites} = useSelector(state => state)

    const favorite = favorites.some(i => i._id==_id)

    return(
        <ScrollView>
            <ImageSwiper 
                images={imArr}
                price={price} 
                header={header} 
                publish_time={publish_time} 
                />
            <HeaderIcons item={item} favorite={favorite} />
            <Location location={location} />
            <Row type='year' value='2008' />
            <Row type='year' value='2008' />
            <Row type='year' value='2008' />
            <Row type='year' value='2008' />
            <Row type='year' value='2008' />
            <Body description={description} _id={_id} />
            <Account user={user} navigation={props.navigation} />
            <Tips />
        </ScrollView>
    )
}



export default Card

/*        <ScrollView>
            <Header />
            <HeaderIcons />
            <Location />
            <Row type='year' value='2008' />
            <Row type='year' value='2008' />
            <Row type='year' value='2008' />
            <Row type='year' value='2008' />
            <Row type='year' value='2008' />
            <Body />
            <Account />
            <Tips />
        </ScrollView> */