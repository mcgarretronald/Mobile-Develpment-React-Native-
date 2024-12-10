import { View, Text } from 'react-native'
import React from 'react'

const DynamicContent = () => {
    const username = 'Ronald Mcgarret';
    const multipy =(a:number, b:number)=>{ return a*b}
    let me ={
        name: 'Ronald Mcgarret',
        age : '22'
    }

    return (
        <View>
            <Text>My name is {username} and I love coding</Text>
            <Text>2*2 = {multipy(2,2)}</Text>
            <Text>2+4 ={4*2}</Text>
        </View>
    )
}

export default DynamicContent