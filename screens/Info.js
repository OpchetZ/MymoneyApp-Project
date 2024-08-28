import React from "react";
import { Dimensions, FlatList, Image, ScrollView, Text, View } from "react-native";

import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Info() {
      const list = [
    {
      "id": "1",
      "title": "ข้อความ",
      "uri": "envelope",
      "color":"#CCFFFF",
    },
    {
      "id": "2",
      "title": "เป้าหมายการออม",
      "uri": "flag",
      "color":"red",
    },
    {
      "id": "3",
      "title": "บิลประจำงวด",
      "uri": "clock",
      "color":"red",
    },
    {
      "id": "4",
      "title": "เตือนความจำ",
      "uri": "bell",
      "color":"yellow",
    },
    {
      "id": "5",
      "title": "ซื้อ Premium",
      "uri": "crown",
      "color":"yellow",
    },
    {
        "id": "6",
        "title": "แลกเปลี่ยนเงินตรา",
        "uri": "coins",
        "color":"yellow",
      },
      {
        "id": "7",
        "title": "หมวดหมู่",
        "uri": "inbox",
        "color":"red",
      },
      {
        "id": "8",
        "title": "สมาชิก",
        "uri": "users",
        "color":"blue",
      },
      {
        "id": "9",
        "title": "งบประมาณ",
        "uri": "dollar-sign",
        "color":"yellow",
      },
      {
        "id": "10",
        "title": "หนังสือ",
        "uri": "book-open",
        "color":"cream",
      },
      {
        "id": "11",
        "title": "บัญชี",
        "uri": "credit-card",
        "color":"#00FFFF",
      },
      {
        "id": "12",
        "title": "ค้นหา",
        "uri": "search",
        "color":"white",
      },
      {
        "id": "13",
        "title": "สำรองข้อมูล",
        "uri": "google-drive",
        "color":"blue",
      },
      {
        "id": "14",
        "title": "ส่งออก",
        "uri": "file-excel",
        "color":"lime",
      },
      {
        "id": "15",
        "title": "ให้คะแนน",
        "uri": "thumbs-up",
        "color":"blue",
      },
      {
        "id": "16",
        "title": "ข้อเสนอแนะ",
        "uri": "file",
        "color":"white",
      },
      {
        "id": "17",
        "title": "เกี่ยวกับ",
        "uri": "question-circle",
        "color":"white",
      },
      {
        "id": "18",
        "title": "การตั้งค่า",
        "uri": "cog",
        "color":"gray",
      },
    
  ];
  
  return (
        <View style={{ flex:1 }}>
            {/* <View style={{width:600,height:50, backgroundColor:'pink',flexDirection:'row',justifyContent:'space-between' }}>
            <View style={{ marginLeft:20,justifyContent:'center' }}><Text style={{ color:'white',fontSize:30 }}>เพิ่มเติม</Text></View>
            <View style={{ marginRight:20 }}><FontAwesome name="cog"  size={50} color="white"/></View>
            </View> */}
            <View style={{flex:3, backgroundColor:'white',marginTop:20,alignItems:'center' }}>
            <FlatList
                horizontal={false}
                data={list}
                numColumns={3}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ height: 150,
                                width: 150,
                                paddingHorizontal: 10,
                                backgroundColor: "pink",
                                margin:20,
                                borderRadius:10,alignItems:'center' }}>
                            <Icon name={ item.uri }  size={60} color={ item.color } style={{ marginTop:10 }}/> 
                            <View style={{ marginTop:10}}>
                                <Text style={{ flex:1, fontSize: 20, color: "black",flexWrap:'wrap' }}>{ item.title }</Text>
                            </View>
                        </View>
                        );
                    }
                }
                keyExtractor={item => item.id}
            />
            </View>
        </View>




    );
}