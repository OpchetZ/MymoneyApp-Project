import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Add() {
    return (
        <View style={{ flex : 1 , flexDirection : 'row',justifyContent:"flex-start",marginLeft:20 }}>    
        <View style={{ margin:10 }}>
      <FontAwesome name="book"  size={60} color="white" />   
      <Text style={{ color:"white" }}>หนังสือเริ่มต้น</Text>
      </View>
      <View style={{ margin:10 }}>
      <FontAwesome name="plus"  size={60} color="lime" />   
      <Text style={{ color:"white",alignSelf:"center" }}>เพิ่มหนังสือ</Text>
      </View>
      
      
      
    </View>







    );
}