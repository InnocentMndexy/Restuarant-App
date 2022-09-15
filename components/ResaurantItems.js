import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


//
const data = [
    {
        id: 1, category: 'breakfast', gallery: [
            {
                id: 1, image: require('../assets/breakfast/pexels-alexander-mils-2103949.jpg'), itemType: 'cereal', price: '75.00',
                ingredient: 'granola, peach, plain yoghurt, cereal'
            },
            {
                id: 2, image: require('../assets/breakfast/pexels-julian-jagtenberg-103124.jpg'), itemType: 'Pancake', price: '70.00',
                ingredient: 'honey , strawberry, pancake'
            },
            {
                id: 3, image: require('../assets/breakfast/pexels-pixabay-414555.jpg'), itemType: 'Cappuccino', price: '55.00',
                ingredient: 'Milk, cappaccino, scones, cappuccino'
            },
        ]
    },
    {
        id: 2, category: 'Lunch', gallery: [
            {
                id: 1, image: require('../assets/lunch/pexels-pixabay-461382.jpg'), itemType: 'Burger', price: '35.00',
                ingredient: 'tomatoes, bread, cucumber, lettuce'
            },
            {
                id: 2, image: require('../assets/lunch/pexels-robin-stickel-70497.jpg'), itemType: 'Burger', price: '70.00',
                ingredient: 'chips, bread, burger, lettuce, creamy mayonnaise, jack cheese slice, gourmet patty'
            },
            {
                id: 3, image: require('../assets/lunch/pexels-pixabay-315755.jpg'), itemType: 'Pizza', price: '60.00',
                ingredient: 'chicken, cheese'
            },
        ]
    },
    {
        id: 3, category: 'Dinner', gallery: [
            {
                id: 1, image: require('../assets/supper/OIP (19).jpg'), itemType: 'Pap', price: '40.00',
                ingredient: 'pap, wors, chakalaka'
            },
            {
                id: 2, image: require('../assets/supper/OIP (21).jpg'), itemType: 'Pap', price: '35.00',
                ingredient: 'Pap and Steak'
            },
            {
                id: 3, image: require('../assets/supper/R (3).jpg'), itemType: 'Pap', price: '34.00',
                ingredient: 'Pap and tripe(mala mogodu)'
            },
        ]
    },
    {
        id: 4, category: 'Bevarage', gallery: [
            {
                id: 1, image: require('../assets/bev/OIP (21).jpg'), itemType: 'Alcohol', price: '20.00',
                ingredient: 'beer'
            },
            {
                id: 2, image: require('../assets/bev/pexels-posawee-suwannaphati-391213.jpg'), itemType: 'Alcohol', price: '25.00',
                ingredient: 'wine'
            },
            {
                id: 3, image: require('../assets/bev/pexels-bruno-scramgnon-1337825.jpg'), itemType: 'Juice', price: '20.00',
                ingredient: 'watermelon'
            },
        ]
    }

]

export default function ResaurantItems () {
    const products = useSelector((state) => state.reaturentFood.products)
    const navigation = useNavigation();
    const [LocalRestaurant]= useState(products)

    function specificCategory(items) {
        navigation.navigate('category_details', {data:items});
    }
        
        return (
            <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
                {LocalRestaurant.map((restuarant, index) =>(
                     <TouchableOpacity onPress={() => specificCategory(restuarant)} key={index} >
                        <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
                            {/* <ResaurantInfo name={restuarant.name} ratings={restuarant.ratings} /> */}
                            <Image source={restuarant.gallery[1].image} style={[{height:100,width:'95%'} ]} />
                        </View>
                        <Text>View More</Text>
                    </TouchableOpacity>
        ))}
            </TouchableOpacity>
        )
}

const ResuatrantImage = (props) => {
    return (
        <>
            <Image source={{ uri: props.images }}
                style={{ width: "100%", height: 180 }} />

            <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
                <MaterialCommunityIcons name='heart-outline' size={24} color='white' />
            </TouchableOpacity>
        </>

    )


};

const ResaurantInfo = (props) => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
            <View>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
                <Text style={{ fontSize: 13, color: "grey" }}>30-45  ~ min</Text>
            </View>


            <View style={{ backgroundColor: "#eee", height: 30, width: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 }}>
                <Text >{props.ratings}</Text>
            </View>

        </View>
    )
}