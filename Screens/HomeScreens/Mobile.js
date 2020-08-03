import React, { Components } from 'react'
import {View, Text, ScrollView} from 'react-native'
import {ListItem} from 'react-native-elements'

function Mobile ({navigation}){
    const data = [
        {name:'Mobile Phones', num:1000, toPage:'MobilePhones'},
        {name:'Tablets', num:1000, toPage:'Tablets'},
        {name:'Mobile & Tablet Accessories', toPage:'MobileAndTabletAccessories', num:1000},
        {name:'Mobile Numbers', num:1000, toPage:'MobileNumbers'},
    ]

    const path = ['Mobile']

    return (
        <ScrollView>
            {
                data.map( (item, key) => 
                <ListItem 
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

export default Mobile