import React from "react";
import { Avatar, Button, Card} from 'react-native-paper';
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList, TouchableOpacity,Image} from "react-native";
import CardContent from "react-native-paper/lib/typescript/components/Card/CardContent";
import { ScrollView } from "react-native-gesture-handler";





const img = ('./assets/slash');



export const Welcome =({navigation}:any)=>{

    const pressHandler =()=>{
        navigation.push('Home')
      }

    return(
        <ScrollView  style={styles.container}>
            <Image source={require('../../assets/LUPINI.png')}/>
            <Text style={styles.title}>
                Welcome my Boss!!!!!, you are in the good place
            </Text>
            <Text style={styles.title}>

                here you can see most of the best restaurant in the world , select and book directly
                in few second!!!
            </Text>

            <Button style={styles.btn} mode="contained" onPress={(pressHandler)}>
             start booking
           </Button>
    
      
      
       
      
       

       </ScrollView>


    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
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
      color: 'black',
      marginBottom:10,
      marginLeft:20,
      padding:5,
      marginTop:8,
      fontStyle:"italic"
      
    },

    logo: {
       
      

    },

    card: {
      padding:20,
      backgroundColor:'black',
      margin:20,
      color:'white',
      marginTop:10,   
    },

    btn: {
        width: '70%',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:60,
        padding:10,
        fontSize: 100,
        marginTop:30,
        fontStyle:"italic"
    
      
    }
  });