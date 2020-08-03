import React, { Components } from 'react'
import {View, Text, ScrollView} from 'react-native'
import {ListItem} from 'react-native-elements'


function Furniture ({navigation}){
    const data = [
        {name:'Bathroom', num:1000, toPage:'Bathroom'},
        {name:'Bedroom', num:1000, toPage:'Bedroom'},
        {name:'Dining Room', num:1000, toPage:'DiningRoom'},
        {name:'Fabrics - Curtains - Carpets', num:1000, toPage:'FabricsCurtainsCarpets'},
        {name:'Garden - Outdoors', num:1000, toPage:'GardenOutdoors'},
        {name:'Home Decoration', num:1000, toPage:'HomeDecorations'},
        {name:'Kitchen - Kitchenware', num:1000, toPage:'Kitchen'},
        {name:'Lighting Tools', num:1000, toPage:'LightingTools'},
        {name:'Living Room', num:1000, toPage:'LivingRoom'},
        {name:'Multiple/Other Furniture', num:1000, toPage:'OtherFurniture'},
    ]

    const path = ['Furniture']

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

export default Furniture