import React, { Components } from 'react'
import {View, Text, ScrollView} from 'react-native'
import {ListItem} from 'react-native-elements'

function Kids ({navigation}){
    const data = [
        {name:'Baby & Mom HealthCare', num:1000, toPage:'MomHealthCare'},
        {name:'Baby Clothing', num:1000, toPage:'BabyClothing'},
        {name:'Baby Feeding Tools', num:1000, toPage:'BabyFeedingTools'},
        {name:'Cribs - Strollers - Carriers', num:1000, toPage:'CribtsScrollersCarriers'},
        {name:'Toys', num:1000, toPage:'Toys'},
        {name:'Other Baby Items', num:1000, toPage:'OtherBabyItems'},
    ]

    const path = ['Kids']

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

export default Kids