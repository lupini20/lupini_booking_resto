
import React from "react";
import { Avatar, Button, Card} from 'react-native-paper';
import { Linking, ScrollView } from "react-native";
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList, TouchableOpacity,Image} from "react-native";

//import { default as data } from "../../api/data.json";
  

export default function Details({navigation}:any){

    const img = navigation.getParam('image');
    const call = navigation.getParam('phone');
    const web= navigation.getParam('website');


  return (

  <ScrollView>
    <Card  style={styles.card}>
       
    <Card.Content>
      <Text style={styles.title}>{navigation.getParam('name')}</Text>
    
    </Card.Content>
  <Card.Cover style={styles.card_img} source={{ uri : img }}/>    
  
  <Card.Content>
      
      <Text style={styles.title}>Type: {navigation.getParam('type')}</Text>
      <Text style={styles.title}>city: {navigation.getParam('city')}</Text>
      <Text style={styles.title}>Adrr: {navigation.getParam('address')}</Text>
      <Text style={styles.title}>rating: {navigation.getParam('rating')}</Text>
      <Text style={styles.title}>visite our site and make your booking:</Text>
      <Text style={styles.title} onPress={()=>{Linking.openURL('https:'+web);} }>{navigation.getParam('website')}</Text>
      <Text style={styles.title}>Call for booking:</Text>
      <Text style={styles.title} onPress={()=>{Linking.openURL('tel:'+call);} }>press here: {navigation.getParam('phone')}</Text>
    </Card.Content>
</Card>

</ScrollView>


);
             

         
         
    
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:100,
      Color:'black'
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection:"row",
      
      
    },

    description: {
      color: 'grey',
      textAlign: 'center',
      margin:10,
      fontSize:16,

    },
  

    image:{
      width : 70,
      height :70,
      borderRadius: 70/2,
      marginRight:10
  },
    title: {
      fontSize: 25,
      color: 'white',
      marginBottom:10,
      fontStyle:"italic",
      marginTop:10,
      
    },

    card_img: {
      
      

    },

    card: {
      padding:20,
      backgroundColor:'black',
      margin:20,
      color:'white',
      marginTop:10,   
    },

    btn_select: {
      marginTop:5,
      backgroundColor:'white',
      color:'#2596be'
    
      
    }
  });