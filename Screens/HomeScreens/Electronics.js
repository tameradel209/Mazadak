import React, { Components } from 'react'
import {View, Text, ScrollView} from 'react-native'
import {ListItem} from 'react-native-elements'

function Electronics ({navigation}){
    const data = [
        {name:'TV - Audio - Video', num:1000, toPage:'TvAudioVideo'},
        {name:'Computers - Accessories', num:1000, toPage:'CombuterAccessories'},
        {name:'Video games - Consoles', toPage:'VideoGames', num:1000},
        {name:'Cameras - Images', num:1000, toPage:'CamerasImages'},
        {name:'Home Appliances', num:1000, toPage:'HomeAppliances'},
    ]

    const path = 'Electronics'

    return (
        <ScrollView>
            {
                data.map( (item, key) => 
                <ListItem 
                    rightTitle='>' 
                    bottomDivider 
                    key={key} 
                    title={item.name} 
                    subtitle={`${item.num} ads`} 
                    onPress={() => navigation.navigate('Search', {search:{category:`${path}${item.name}`}})} 
                    titleStyle={{fontSize:14}}
                    subtitleStyle={{fontSize:9}} />
                    )
            }
        </ScrollView>
    )
}

export default Electronics