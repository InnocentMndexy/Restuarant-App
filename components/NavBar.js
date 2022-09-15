import { StyleSheet, View, Text, Button } from 'react-native'
import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayProduct } from './redux/restaurentGallery'
import { db } from './firebase';
import { collection, getDocs, query } from 'firebase/firestore'
const axios = require('axios')

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
      id: 3, itemType: 'Dinner', gallery: [
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
      id: 4, itemType: 'Bevarage', gallery: [
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

export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = { dataGallary: data, category: [], imageGallery:[] }
  }

  async allProfucts() {
    /*const dbRef = collection(db, 'foodType')

    const data = await getDocs(dbRef);
    const category = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    category.map(async (elem) => {
      const subCollectRef = collection(db, `foodType/${elem.id}/gallery`);
      const foodDetails = await getDocs(subCollectRef);
      const gallery = foodDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id, category: elem }));
      this.setState({ category: category })

      //this.setState({ dataGallary: gallery })
    })*/
   /*  var foodArray= []
    const foodData = await axios.get('https://foodbukka.herokuapp.com/api/v1/menu');
    this.setState({dataGallary: foodData.data.Result})
    for(var count =0; count < foodData.data.Result.length; count++){
      foodArray.push(this.state.dataGallary[count].images)
    } */

    //this.setState({imageGallery: foodArray})
  }

  searchProduct() {
    console.log(this.state.dataGallary)
    console.log(this.state.dataGallary.gallery)

  }

  render() {
    this.allProfucts()
    return (
      <View style={styles.categories}>
        <Button onPress={() => this.searchProduct('hjdhjd')}>get values</Button>
        {this.state.category.map((cat, xid) => (
          <View key={xid}>
            <Text style={styles.categoryText} onPress={() => this.searchProduct(cat.catName)}>{cat.category}</Text>
          </View>
        ))}
      </View>
    )

  }


}

const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  categoryText: {
    margin: 15
  },
})