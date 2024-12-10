import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemComponent from './ItemComponent'

const ProductsComponent = () => {
    const products = [
        {
            image: "https://i.pinimg.com/236x/27/02/02/2702027f3d0afb39b08418f4917e956a.jpg",
            name: "Wireless Earbuds",
            description: "High-quality wireless earbuds with noise cancellation.",
            rating: 4.8,
            price : 200
        },
        {
            image: "https://i.pinimg.com/236x/1b/88/0c/1b880c8fb8fa8a61077f749ddabadb9a.jpg",
            name: "Smart Watch",
            description: "Stylish smart watch with fitness tracking and heart rate monitoring.",
            rating: 4.5,
            price : 250
        },
        {
            image: "https://i.pinimg.com/236x/08/58/b9/0858b9b89d5aa64a6eb952293014ef64.jpg",
            name: "Gaming Mouse",
            description: "Ergonomic gaming mouse with customizable RGB lighting.",
            rating: 4.7,
            price : 150
        },
        {
            image: "https://i.pinimg.com/236x/ac/15/46/ac1546bdc3e8f4cd2d3753ba5d5f4919.jpg",
            name: "Bluetooth Speaker",
            description: "Portable Bluetooth speaker with powerful sound and waterproof design.",
            rating: 4.6,
            price : 100
        },
        {
            image: "https://i.pinimg.com/236x/82/c4/38/82c43821cb4972cd8b7c46dda9239947.jpg",
            name: "Laptop Stand",
            description: "Adjustable laptop stand with anti-slip design for improved ergonomics.",
            rating: 4.3,
            price : 30
        },
        {
            image: "https://i.pinimg.com/736x/bd/5a/2b/bd5a2b62693e5b37784fbfc6a5169624.jpg",
            name: "Mechanical Keyboard",
            description: "Durable mechanical keyboard with customizable keycaps.",
            rating: 4.9,
            price : 180
        },
        {
            image: "https://i.pinimg.com/236x/bf/ec/f2/bfecf2b0a771b425f056381be43e084c.jpg",
            name: "Smartphone",
            description: "Latest smartphone with high-resolution camera and long battery life.",
            rating: 4.4,
            price : 500
        },
        {
            image: "https://i.pinimg.com/236x/a3/8b/cb/a38bcb59d5ffecc8cd95063ab69c8d28.jpg",
            name: "Action Camera",
            description: "Compact action camera with 4K video recording and waterproof casing.",
            rating: 4.6,
            price : 200
        },
        {
            image: "https://i.pinimg.com/236x/7f/ef/22/7fef22c18749ca702755735aa736f6e0.jpg",
            name: "Wireless Charger",
            description: "Fast wireless charger compatible with all Qi-enabled devices.",
            rating: 4.2,
            price : 25
        },
        {
            image: "https://i.pinimg.com/236x/83/c7/5c/83c75c787b266892ff45c1888fa0cd2e.jpg",
            name: "Noise-Canceling Headphones",
            description: "Over-ear headphones with superior noise-canceling technology.",
            rating: 4.8,
            price : 300
        },
    ];

    return (
        <SafeAreaView>
            <View>
                <Text style={styles.heading}>Explore our products</Text>
                <FlatList data={products}
                style={styles.products}
                    renderItem={({ item }) => <ItemComponent name={item.name} description={item.description} image={item.image} rating={item.rating} price={item.price} />} />
            </View>
        </SafeAreaView>

    )
}

export default ProductsComponent

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#9AA6B2',
        padding:10,
        color:'white'
    },
    products:{
        display:'flex',
        gap:30,
        margin:20

    }
})