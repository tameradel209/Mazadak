import React, {useState, useEffect} from 'react'
import {View, ScrollView, Text, Alert, Button, FlatList, ActivityIndicator} from 'react-native'
import {HandleGettingAds} from '../api'
import MiniCard from './MiniCard'
import {useSelector } from 'react-redux'

function Favorites ({route, navigation}) {

    const {favorites} = useSelector(state => state)

    const [load, setLoad] = useState(false)
    
    const renderItem = (item) => {
        const {images, header, price, location, publish_time} = item
        const imArr = images.split(' ')
        return(
            <MiniCard 
                onPress={() => navigation.push('Ad', {item})}
                image={imArr[0]}
                header={header}
                price={price}
                location={location}
                publish_time={publish_time}
                />
        )
    }

    return(
        load ? 
        <ActivityIndicator size={40}/> :
        <FlatList
            data={favorites}
            renderItem={({item, index, separators}) => renderItem(item)}
            keyExtractor={item => item._id}
        />
    )
}

export default Favorites