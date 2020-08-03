import React, { Components } from 'react'
import {View, Text, ScrollView} from 'react-native'
import {ListItem} from 'react-native-elements'

function Fashion ({navigation}){
    const data = [
        {name:`Women's Clothing`, num:1000, toPage:'WomenClothing'},
        {name:`Men's Clothing`, num:1000, toPage:'MenClothing'},
        {name:`Women's Accessories - Cosmetics - Personal Care`, toPage:'WomenAccessories', num:1000},
        {name:`Men's Accessories - Personal Care`, num:1000, toPage:'MenAccessories'},
    ]

    const path = ['Fashion']

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

export default Fashion