import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ArrayOfObjects = () => {
    const locations =[
        { id: 1, name: 'Nairobi' },
        { id: 2, name: 'Mombasa' },
        { id: 3, name: 'Kisumu' },
        { id: 4, name: 'Nakuru' },
        { id: 5, name: 'Eldoret' },
        { id: 6, name: 'Meru' },
        { id: 7, name: 'Kitui' },
        { id: 8, name: 'Uasin Gishu' },
        { id: 9, name: 'Kakamega' },
        { id: 10, name: 'Machakos' }
    ];
    
    return (
        <View>
            <FlatList keyExtractor={ item => item.id.toString()}  
            data={locations}
            renderItem={({item}) => <Text>{item.name}</Text>}/>
        </View>
    )
}

export default ArrayOfObjects