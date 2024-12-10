import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
export default function TestComponent() {
    const price = '200,000';
    const car_name = 'Mazda CX-5';;
    const rating = 4.5;
    const description = 'The Mazda CX-5 is a stylish and versatile compact SUV known for its sleek design, engaging driving dynamics, and premium interior. It offers a comfortable ride, advanced safety features, and efficient engine options, making it a popular choice for families and individuals seeking a blend of performance, practicality, and sophistication.'
    return (
        <View style={{display:'flex',alignItems:'center'}}>
            <Text className='text'> ${price}</Text>
            <Image
                source={require('../assets/mazdacx5.jpg')}
                style={{ width: 300, height: 200 }} />
            <View>
                <Text>{car_name}</Text>
                <Text>Rating:{rating}</Text>
            </View>
            <Text>{description}</Text>
            <Pressable onPress={()=>{alert('Tafuta pesa wacha ufala')}}>
                <Text>I'm pressable!</Text>
            </Pressable>
        </View>
    )
}



