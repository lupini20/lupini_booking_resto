import React from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image, StatusBar } from 'react-native';
import { SafeAreaView,  FlatList, TouchableOpacity } from "react-native";

export default function StarshipDetailScreen({navigation}){


    const img = navigation.getParam('image_url');
    return ( 
    <SafeAreaView style={styles.container}>
        
       
       <Text>{navigation.getParam('authors')}</Text>

       <Text>
       <Text>{navigation.getParam('description')}</Text>  
      
       </Text>

       <Image  style={styles.image}  source={{uri : img}}/>
    
    
    
    </SafeAreaView>
)
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,

      flexDirection:"row",
      justifyContent:"space-between"
    },

    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },

    image:{
        width : 50,
        height :50
    },
    title: {
      fontSize: 32,
    },
  });