
import React from "react";
import { Avatar, Button, Card} from 'react-native-paper';
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList, TouchableOpacity,Image} from "react-native";

//import { default as data } from "../../api/data.json";
import { default as data } from "../../api/medi.json";
import { Colors } from "react-native/Libraries/NewAppScreen";
import navigator1 from "../navigation/navigator1";




const img = ('image');

const Item = ({name,city,img}:any) => (

  
  <Card  style={styles.card}>
       
          <Card.Content>
            <Text style={styles.title}>{name}</Text>
          
          </Card.Content>
        <Card.Cover style={styles.card_img} source={{ uri : img }}/>
        <Card.Actions >
          <Button style={styles.btn_select}>More details</Button>
          
          
        </Card.Actions>
  </Card>
  

  );

  

export const Home = ({navigation}:any) => {
  return (
  
  
    <FlatList

    
    

      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={()=>navigation.navigate('Details', item)}>
          <Item img={item.image} name={item.name} city={item.city} />

        </TouchableOpacity>

      )} />
          
             

         
         
    
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
      textAlign:"center"
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