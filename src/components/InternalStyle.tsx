import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InternalStyle = () => {
    return (
        <View>
            <Text style={styles.textStyle}>InternalStyle</Text>
        </View>
    )
}

export default InternalStyle

const styles = StyleSheet.create({
    textStyle:{
        color:'white',
        fontSize:20,
        backgroundColor:'red',
        margin:20,
        textAlign:'center',
        borderRadius:10,
        padding:20


    }
})
