import { View, Text } from 'react-native'
import React from 'react'

const ValidPassword =()=> <Text>Valid Password</Text>
const InvalidPassword =()=> <Text>Invalid Password</Text>

const Password =({isvalid}: {isvalid: boolean}) =>{
    if (isvalid) {
        return<ValidPassword/>  
    } 
        return<InvalidPassword/>
    }
        
const ConditionalStatment = () => {
    return (
        <View>
            <Text>ConditionalStatment</Text>
            <Password isvalid={false}/>
        </View>
    )
}

export default ConditionalStatment