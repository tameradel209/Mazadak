import React, { Components } from 'react'
import {View, Text, ScrollView} from 'react-native'
import {ListItem} from 'react-native-elements'

function Properties ({navigation}){
    const data = [
        {name:'Apartments & Duplex For Sale', num:1000, toPage:'ApartmentsForSale'},
        {name:'Apartments & Duplex For Rent', num:1000, toPage:'ApartmentsForRent'},
        {name:'Villas For Sale', toPage:'VillasForSale', num:1000},
        {name:'Villas For Rent', num:1000, toPage:'VillasForRent'},
        {name:'Vacation Homes For Sale', num:1000, toPage:'VacationHomesForSale'},
        {name:'Vacation Homes For Rent', num:1000, toPage:'VacationHomesForRent'},
        {name:'Commercial For Sale', num:1000, toPage:'CommercialForSale'},
        {name:'Commercial For Rent', num:1000, toPage:'CommercialForRent'},
        {name:'Buildings & Lands', num:1000, toPage:'BuildingsAndLands'},
    ]

    const path = ['Properties'] 

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

export default Properties