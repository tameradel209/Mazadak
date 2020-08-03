import React, { Components } from 'react'
import {View, Text, ScrollView} from 'react-native'
import {ListItem} from 'react-native-elements'

function Business ({navigation}){
    const data = [
        {name:'Agriculture', num:1000, toPage:'Agriculture'},
        {name:'Construction', num:1000, toPage:'Construction'},
        {name:'Industrial Equipment', num:1000, toPage:'IndustrialEquipment'},
        {name:'Medical Equipment', num:1000, toPage:'MedicalEquipment'},
        {name:'Office Furniture & Equipment', num:1000, toPage:'OfficeFurnitureEquipment'},
        {name:'Restaurant Equipment', num:1000, toPage:'RestaurantEquipment'},
        {name:'Whole Business For Sale', num:1000, toPage:'WholeBusinessForSale'},
        {name:'Other Business, Industrial & Agriculture', num:1000, toPage:'Other'},
    ]

    const path = 'Business'

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

export default Business