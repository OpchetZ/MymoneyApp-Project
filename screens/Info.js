import React from "react";
import { Dimensions, FlatList, Image, ScrollView, Text, View } from "react-native";

import { FontAwesome } from '@expo/vector-icons';


export default function Info() {
      const tours = [
    {
      id: "1",
      title: "ข้อความ",
      uri: "envelope",
    },
    {
      id: "2",
      title: "เป้าหมายการออม",
      uri: "flag",
    },
    {
      id: "3",
      title: "บิลประจำงวด",
      uri: "clock",
    },
    {
      id: "4",
      title: "เตือนความจำ",
      uri: "scroll",
    },
    {
      id: "5",
      title: "ซื้อ Premium",
      uri: "inbox",
    },
    {
        id: "6",
        title: "แลกเปลี่ยนเงินตรา",
        uri: "inbox",
      },
      {
        id: "7",
        title: "หมวดหมู่",
        uri: "inbox",
      },
      {
        id: "8",
        title: "สมาชิก",
        uri: "inbox",
      },
      {
        id: "9",
        title: "งบประมาณ",
        uri: "inbox",
      },
      {
        id: "10",
        title: "หนังสือ",
        uri: "inbox",
      },
      {
        id: "11",
        title: "บัญชี",
        uri: "inbox",
      },
      {
        id: "12",
        title: "ค้นหา",
        uri: "inbox",
      },
      {
        id: "13",
        title: "สำรองข้อมูล",
        uri: "inbox",
      },
      {
        id: "14",
        title: "ส่งออก",
        uri: "inbox",
      },
      {
        id: "15",
        title: "ให้คะแนน",
        uri: "inbox",
      },
      {
        id: "16",
        title: "ข้อเสนอแนะ",
        uri: "inbox",
      },
      {
        id: "17",
        title: "เกี่ยวกับ",
        uri: "inbox",
      },
      {
        id: "18",
        title: "การตั้งค่า",
        uri: "inbox",
      },
    
  ];
    return (
        <View style={{ flex:1 }}>
            <View style={{width:600,height:50, backgroundColor:'pink',flexDirection:'row',justifyContent:'space-between' }}>
            <View style={{ marginLeft:20,justifyContent:'center' }}><Text style={{ color:'white',fontSize:30 }}>เพิ่มเติม</Text></View>
            <View style={{ marginRight:20 }}><FontAwesome name="cog"  size={50} color="white"/></View>
            </View>
            <View style={{flex:3, backgroundColor:'white',marginTop:20,alignItems:'center' }}>
            <FlatList
                horizontal={false}
                data={tours}
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
                            <FontAwesome name={ item.uri }  size={60} color="blue"/> 
                            <View style={{ marginTop:30}}>
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