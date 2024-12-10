import { View, } from 'react-native'
import React from 'react'

const InlineStyle = () => {
    return (
        <View style={{display:'flex', gap:30,margin:20}}>
            <View style={{backgroundColor:'red',width:100,height:100}}/>
            <View style={{backgroundColor:'green',width:100,height:100}}/>
            <View style={{backgroundColor:'yellow',width:100,height:100}}/>
            <View style={{backgroundColor:'blue',width:100,height:100}}/>
        </View>
    )
}

export default InlineStyle