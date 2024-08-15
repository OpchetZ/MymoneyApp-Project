import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Screen() {
    return (
        <View style={{ flex : 1 , flexDirection : 'row'}}>    
      <FontAwesome name="search"  size={30} color="white" />   
      <View style={{ flex:1,backgroundColor:"pink",width:100,height:30,borderRadius:25,justifyContent:"center",flexDirection:"row"}}>
      
      </View>
      <View style={{ flex:3,backgroundColor:"white",width:100,height:30,borderRadius:25,justifyContent:"center",flexDirection:"row"}}>
      <FontAwesome name="credit-card"  size={30} color="black" /> 
        <Text style={{ alignSelf:"center" }}> รายละเอียด</Text>
      </View>
      <View style={{ flex:1,backgroundColor:"white",width:30,height:30,borderRadius:25,justifyContent:"center",flexDirection:"row"}}>
      <FontAwesome name="calendar"  size={30} color="black" /> 
        <Text style={{ alignSelf:"center" }}> ปฏิทิน</Text>
      </View>
      
      
    </View>







    );
}