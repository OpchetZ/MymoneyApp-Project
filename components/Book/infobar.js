import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Infobar() {
    return (
        <View style={{ flexDirection:"row", justifyContent:"space-around",borderTopWidth:0.5,alignContent:"flex-end",backgroundColor:'white' }}>
            <View style={{ flexDirection:'column' }}><FontAwesome name="book"  size={60} color="teal" /><Text style={{ color:'#cf6ffa' }}>หนังสือ</Text></View>
            <View style={{ flexDirection:'column' }}><FontAwesome name="window-restore"  size={60} color="teal" /><Text style={{ color:'gray' }}>กระเป๋าเงืน</Text></View>
            <View style={{ flexDirection:'column' }}><FontAwesome name="money"  size={60} color="teal" /><Text style={{ color:'gray' }}>การวิเคราะห์</Text></View>
            <View style={{ flexDirection:'column' }}><FontAwesome name="info"  size={60} color="teal" /><Text style={{ color:'gray' }}>เพิ่มเติม</Text></View>
            
            
        </View>







    );
}