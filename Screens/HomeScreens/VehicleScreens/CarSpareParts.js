import React, { Components } from 'react'
import {View, Text, ScrollView} from 'react-native'
import {ListItem} from 'react-native-elements'

function CarSpareParts ({route, navigation}){
    const data = [
        {name:'All in Car Spare Parts', num:1000},
        {name:'Alfa Romeo', num:1000},
        {name:'Aston Martin', num:1000},
        {name:'Audi', num:1000},
        {name:'BMW', num:1000},
        {name:'BYD', num:1000},
        {name:'Bentley', num:1000},
        {name:'Brilliance', num:1000},
        {name:'Bugatti', num:1000},
        {name:'Buick', num:1000},
        {name:'Cadillac', num:1000},
        {name:'Chana', num:1000},
        {name:'Changan', num:1000},
        {name:'Changhe', num:1000},
        {name:'Chery', num:1000},
        {name:'Chevrolet', num:1000},
        {name:'Chrysler', num:1000},
        {name:'Citroen', num:1000},
        {name:'Daewoo', num:1000},
        {name:'Caihatsu', num:1000},
        {name:'Dodge', num:1000},
        {name:'Faw', num:1000},
        {name:'Ferrari', num:1000},
        {name:'Fiat', num:1000},
        {name:'Ford', num:1000},
        {name:'Geely', num:1000},
        {name:'Great Wall', num:1000},
        {name:'Honda', num:1000},
        {name:'Hummer', num:1000},
        {name:'Hyundai', num:1000},
        {name:'Infinity', num:1000},
        {name:'Isuzu', num:1000},
        {name:'Jac', num:1000},
        {name:'Jaguar', num:1000},
        {name:'Jeep', num:1000},
        {name:'Kia', num:1000},
        {name:'Lada', num:1000},
        {name:'Lamborghini', num:1000},
        {name:'Lancia', num:1000},
        {name:'Land Rover', num:1000},
        {name:'Lexus', num:1000},
        {name:'Lifan', num:1000},
        {name:'Lincoln', num:1000},
        {name:'MG', num:1000},
        {name:'MINI', num:1000},
        {name:'Maserati', num:1000},
        {name:'Mazda', num:1000},
        {name:'Mercedes-Benz', num:1000},
        {name:'Mitsubishi', num:1000},
        {name:'Nissan', num:1000},
        {name:'Opel', num:1000},
        {name:'Other Make', num:1000},
        {name:'Peugeot', num:1000},
        {name:'Porsche', num:1000},
        {name:'Proton', num:1000},
        {name:'Renault', num:1000},
        {name:'Saipa', num:1000},
        {name:'Seat', num:1000},
        {name:'Senova', num:1000},
        {name:'Skoda', num:1000},
        {name:'Speranza', num:1000},
        {name:'Ssang Yong', num:1000},
        {name:'Subaru', num:1000},
        {name:'Suzuki', num:1000},
        {name:'Tesla', num:1000},
        {name:'Toyota', num:1000},
        {name:'Volkswagen', num:1000},
        {name:'Vollvo', num:1000},
        {name:'Zotye', num:1000},
    ]

    const path = 'Vehicles/Car Spare Parts/'

    return (
        <ScrollView>
            {
                data.map( (item, key) => 
                <ListItem 
                    bottomDivider 
                    key={key} 
                    title={item.name} 
                    subtitle={`${item.num} ads`} 
                    onPress={() => navigation.navigate('Search',{search:{category:`${path}${item.name}`}})} 
                    titleStyle={{fontSize:14}}
                    subtitleStyle={{fontSize:9}} />
                    )
            }
        </ScrollView>
    )
}

export default CarSpareParts