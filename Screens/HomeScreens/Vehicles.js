import React, { Components } from 'react'
import {View, Text, ScrollView} from 'react-native'
import {ListItem} from 'react-native-elements'

function Vehicles ({navigation}){
    const data = [
        {name:'Cars For Sale', num:1000, toPage:'CarsForSale', navigate:true},
        {name:'Cars For Rent', num:1000, toPage:'CarsForRent'},
        {name:'Tyres, Batteries, Oils & Accessories', num:1000, toPage:'Accessories'},
        {name:'Car Spare Parts', num:1000, toPage:'CarSpareParts', navigate:true},
        {name:'Motorcycles & Accessories', num:1000, toPage:'Motorcycles'},
        {name:'Boats - Watercraft', num:1000, toPage:'Boats'},
        {name:'Heavy Trucks, Buses & Other Vehicles', num:1000, toPage:'HeavyTrucks'},
    ]

    const path = 'Vehicles/'

    return (
        <ScrollView>
            {
                data.map( (item, key) =>
                <ListItem 
                    rightTitle= {item.navigate ? '>' : ''}
                    bottomDivider 
                    key={key} 
                    title={item.name} 
                    subtitle={`${item.num} ads`} 
                    onPress={() => key==0 || key==3 ? navigation.navigate(item.toPage) : navigation.navigate('Search', {search:{category:`${path}${item.name}`}})} 
                    titleStyle={{fontSize:14}}
                    subtitleStyle={{fontSize:9}} />
                    )
            }
        </ScrollView>
    )
}

export default Vehicles