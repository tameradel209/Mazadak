import React from 'react'
import {View} from 'react-native'
import Card from './Card'

function Ad ({route, navigation}) {

    const {item} = route.params

    return(
        <Card item={item} navigation={() => navigation.push('Search',{search:{user:item.user}})} />
    )
}

export default Ad