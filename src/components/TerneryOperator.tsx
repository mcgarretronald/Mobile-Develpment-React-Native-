import { View, Text } from 'react-native'
import React from 'react'

const ValidPassword =()=> <Text>Valid Password</Text>
const InvalidPassword =()=> <Text>Invalid Password</Text>

const Password =({isvalid}: {isvalid: boolean}) =>{
    // if (isvalid) {
    //     return<ValidPassword/>  
    // } 
    //     return<InvalidPassword/>
    return isvalid? <ValidPassword/> : <InvalidPassword/>
    }


        
const TernaryOperator = () => {
    return (
        <View>
            <Text>TernaryOperator</Text>
            <Password isvalid={true}/>
        </View>
    )
}

export default TernaryOperator