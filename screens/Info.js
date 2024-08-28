import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, Text, View } from "react-native";

import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Info() {
      
  const [onlinemenu, setOnlineMenu] = useState([]);
  const loadOnlineMenu = async () => {
    try{
        let text = await fetch('https://raw.githubusercontent.com/OpchetZ/MymoneyApp-Project/master/assets/info.json');
        let data = await text.json();
        console.log("Load Data : " , data);
	  
        setOnlineMenu(data);
    }catch(error){
        console.log("ERROR : " , error);
    }
}
useEffect(() => {
  loadOnlineMenu();
}, []);


  return (
        <View style={{ flex:1 }}>
            {/* <View style={{width:600,height:50, backgroundColor:'pink',flexDirection:'row',justifyContent:'space-between' }}>
            <View style={{ marginLeft:20,justifyContent:'center' }}><Text style={{ color:'white',fontSize:30 }}>เพิ่มเติม</Text></View>
            <View style={{ marginRight:20 }}><FontAwesome name="cog"  size={50} color="white"/></View>
            </View> */}
            <View style={{flex:3, backgroundColor:'white',marginTop:20,alignItems:'center' }}>
            <FlatList
                horizontal={false}
                data={onlinemenu}
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