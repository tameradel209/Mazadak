import React, { Components } from 'react'
import {View, Text, ScrollView} from 'react-native'
import {ListItem} from 'react-native-elements'

function Pets ({navigation}){
    const data = [
        {name:'Birds - Pigeons', num:1000, toPage:'BirdsPigeons'},
        {name:'Cats', num:1000, toPage:'Cats'},
        {name:'Dogs', num:1000, toPage:'Dogs'},
        {name:'Other Pets & Animals', num:1000, toPage:'OtherPets'},
        {name:'Accessories - Pet Care Products', num:1000, toPage:'PetProducts'},
    ]

    const path = ['Pets']

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

export default Pets