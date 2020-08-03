import React, {useState, useEffect} from 'react'
import {View, ScrollView, Text, Alert, Button, FlatList, ActivityIndicator} from 'react-native'
import {HandleGettingAds} from '../api'
import MiniCard from './MiniCard'

function Search ({route, navigation}) {

    const [load, setLoad] = useState(false)
    const [data, setData] = useState([])
    const {search} = route.params
    
    const ads = async () => {
        try{
            setLoad(true)
            let res
                res = await HandleGettingAds(search)
            setData([...res])
            setLoad(false)
        }catch(e){Alert.alert(e)}
    }

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

    useEffect(() => {
        ads()
    }, [])

    return(
        load ? 
        <ActivityIndicator size={40}/> :
        <FlatList
            data={data}
            renderItem={({item, index, separators}) => renderItem(item)}
            keyExtractor={item => item._id}
        />
    )
}

export default Search