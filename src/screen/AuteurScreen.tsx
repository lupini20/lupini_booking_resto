import { Query } from "@tanstack/react-query";
import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList, TouchableOpacity } from "react-native";

//import { default as data } from "../../api/data.json";
import { default as data } from "../../api/medi.json";
import { useQuery } from "@tanstack/react-query";

const Item = ({authors,title}:any) => (
    <View style={styles.item}>
      <Text style={styles.title}>{authors}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  

export const StarshipFeedScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        
         <FlatList
              data ={data}
              renderItem={({item}) =>(
          <TouchableOpacity onPress={()=>navigation.navigate('StarshipDetailScreen', item)}>
               <Item authors={item.authors} title={item.title}/>
          
          </TouchableOpacity>
       
         )} />
         
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection :"row",
    },
    title: {
      fontSize: 32,
    },
  });