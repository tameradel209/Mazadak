import React, { Components } from 'react'
import {View, Text, ScrollView} from 'react-native'
import {ListItem} from 'react-native-elements'

function Services ({navigation}){
    const data = [
        {name:'Business', num:1000, toPage:'Business'},
        {name:'Car', num:1000, toPage:'Car'},
        {name:'Events', num:1000, toPage:'Events'},
        {name:'Health & Beauty', num:1000, toPage:'HealthBeauty'},
        {name:'Home', num:1000, toPage:'Home'},
        {name:'Medical', num:1000, toPage:'Medical'},
        {name:'Movers', num:1000, toPage:'Movers'},
        {name:'Pets', num:1000, toPage:'Pets'},
        {name:'Education', num:1000, toPage:'Education'},
        {name:'Other Services', num:1000, toPage:'OtherServices'},
    ]

    const path = ['Services']

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

export default Services