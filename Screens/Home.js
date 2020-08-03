import React, { Components } from 'react'
import {View, FlatList, ScrollView} from 'react-native'
import {ListItem} from 'react-native-elements'
import { FontAwesome5, FontAwesome, Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 

function Home ({navigation}){

    const data = [
        {name:'Veicles', num:1000, toPage:'Vehicles', icon: <FontAwesome5 name='car' size={30} color='red' />},
        {name:'Properties', num:1000, toPage:'Properties', icon: <FontAwesome name='building' size={30} color='red' />},
        {name:'Mobile Phones, Tablets, & Accessories', toPage:'Mobile', num:1000, icon: <Entypo name='old-mobile' size={30} color='red' />},
        {name:'Electronics & Home Appliances', num:1000, toPage:'Electronics', icon: <FontAwesome5 name='desktop' size={30} color='red' />},
        {name:'Home Furniture - Decor', num:1000, toPage:'Furniture', icon: <MaterialCommunityIcons name='sofa' size={30} color='red' />},
        {name:'Fashion & Beauty', num:1000, toPage:'Fashion', icon: <FontAwesome5 name='tshirt' size={30} color='red' />},
        {name:'Pets - Accessories', num:1000, toPage:'Pets', icon: <MaterialIcons name='pets' size={30} color='red' />},
        {name:'Kids & Babies', num:1000, toPage:'Kids', icon: <FontAwesome5 name='baby-carriage' size={30} color='red' />},
        {name:'Books, Sports & Hobbies', toPage:'Books', num:1000, icon: <FontAwesome name='music' size={30} color='red' />},
        {name:'Jobs', num:1000, toPage:'Jobs', icon: <MaterialIcons name='business-center' size={30} color='red' />},
        {name:'Business - Industrial - Agriculture', toPage:'Business', num:1000, icon:<FontAwesome5 name='industry' size={30} color='red' />},
        {name:'Services', num:1000, toPage:'Services', icon:<MaterialIcons name='build' size={30} color='red' />}
    ]

    return(
        <ScrollView>
            {
                data.map( (item, key) => 
                <ListItem 
                    rightTitle='>' 
                    bottomDivider 
                    key={key} 
                    title={item.name} 
                    subtitle={`${item.num} ads`} 
                    leftIcon={item.icon}
                    onPress={() => navigation.navigate(item.toPage)}
                    titleStyle={{fontSize:14}}
                    subtitleStyle={{fontSize:9}} />
                    
                    )
            }
        </ScrollView>
    )
}

export default Home