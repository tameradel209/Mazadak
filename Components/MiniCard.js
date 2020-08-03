import React from 'react'
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import {ListItem} from 'react-native-elements'
import {SimpleLineIcons, MaterialIcons} from '@expo/vector-icons'

function MiniCard(props){

    return(
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <View style={styles.innerView1}>
                <Image style={styles.image} source={{uri:props.image}} /> 
            </View>
            <View style={styles.innerView2}>
                <View style={styles.innerView21}>
                <Text style={styles.text211}>{props.header}</Text>
                <Text style={styles.text212}>{props.price}</Text>
                    <SimpleLineIcons name='flag' size={24} color='red' style={styles.iconView21} />
                </View>
                <View style={styles.innerView22}>
                    <View style={styles.innerView221}>
                        <MaterialIcons name='location-on' size={14} color='#bab8b8' style={styles.iconView221}/>
                        <Text style={styles.text221}>{props.location}</Text>
                    </View>
                    <Text style={styles.text22}>{props.publish_time}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles =StyleSheet.create({
    container:{
        height:140, 
        width:Dimensions.get('window').width, 
        flexDirection:'row', 
        borderWidth:1,
        borderRadius:10,
        margin:1
    },
    innerView1:{
        flex:2,
    },
    innerView2:{
        flex:5,
    },
    image:{
        height:'100%',
        width:'100%',
    },
    innerView21:{
        height:'70%', 
        marginLeft:5,
    },
    innerView22:{
        marginHorizontal:5, 
        height:'30%', 
        borderTopWidth:0.5, 
        borderTopColor:'#bab8b8',
    },
    text211:{
        fontSize:20,
    },
    text212:{
        fontSize:20, 
        color:'#42a1f5',
    },
    iconView21:{
        position:'absolute',
        bottom:3,
        right:-6 , 
        marginRight:10, 
        marginTop:10,
    },
    innerView221:{
        flex:1,
        flexDirection:'row',
    },
    iconView221:{
        marginTop:3,
    },
    text221:{
        color:'#bab8b8',
    },
    text22:{
        color:'#bab8b8', 
        marginLeft:5,
    },
})

export default MiniCard