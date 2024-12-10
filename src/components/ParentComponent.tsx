import { View, Text } from 'react-native'
import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    return (
        <View>
            <Text>ParentComponent</Text>

            <ChildComponent name ='Ronald Mcgarret' age={22} hobbies={['coding','sleeping']}/>
        </View>
    )
}

export default ParentComponent