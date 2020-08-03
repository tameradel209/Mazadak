import React, { Components } from 'react'
import {View, Text, ScrollView} from 'react-native'
import {ListItem} from 'react-native-elements'

function Books ({navigation}){
    const data = [
        {name:'Antique - Collectibles', num:1000, toPage:'AntiqueCollectibles'},
        {name:'Bicycles', num:1000, toPage:'Bicycles'},
        {name:'Books', num:1000, toPage:'Books'},
        {name:'Board - Card Games', num:1000, toPage:'BoardCardGames'},
        {name:'Movies - Music', num:1000, toPage:'MoviesMusic'},
        {name:'Musical Instruments', num:1000, toPage:'MusicalInstruments'},
        {name:'Sports Equipments', num:1000, toPage:'SportsEquipments'},
        {name:'Study Tools', num:1000, toPage:'StudyTools'},
        {name:'Tickets - Vouchers', num:1000, toPage:'TicketsVouchers'},
        {name:'Laggage', num:1000, toPage:'Laggage'},
        {name:'Other Items', num:1000, toPage:'OtherItems'},
    ]

    const path = 'Books/'

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

export default Books