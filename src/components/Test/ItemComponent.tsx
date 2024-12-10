import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

interface products {
    name:string;
    description:string;
    image:string;
    rating:number
    price :number
}
const ItemComponent = ({name,description,image,rating,price}:products) => {
    return (
        <View style={styles.container}>
            <Image source={{uri:image}} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>Price: ${price}</Text>

                <Pressable style={styles.featured} onPress={() => alert('You are a fool. Mbwa sana 🖕')} >
                    <Text style={{color:'white'}}>Featured</Text>
                </Pressable>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}

export default ItemComponent

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        display:'flex',
        alignItems:'center',
        margin:1
    },
    image:{
        width:150,
        height:150
    },
    info:{
        flexDirection:'column',
        margin:10,
        gap:10
    },
    name:{
        fontSize:20,
        fontWeight:'bold'
    },
    description:{
        fontSize:12
    },
    rating:{
        fontSize:12
    },
    price:{
        fontSize:12
    },
    featured:{
        fontSize:12,
        borderWidth:2,
        borderColor:'#9AA6B2',
        backgroundColor:'#9AA6B2',
        color:'white',
        padding:5,
        width: 100,
        textAlign:'center',
        borderRadius:10

    }

})

