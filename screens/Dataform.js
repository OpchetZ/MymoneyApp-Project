import React, { useEffect, useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, TextInput, Button, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList } from "react-native-gesture-handler";
import datastorage from "../storage/datastorage";




export default function DataForm() {  
  const [onlinemenu, setOnlineMenu] = useState([]);
  const loadOnlineMenu = async () => {
    try{
        let text = await fetch('https://raw.githubusercontent.com/OpchetZ/MymoneyApp-Project/refs/heads/master/assets/type.json');
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
  const navigation = useNavigation();
  const route = useRoute();
  // RANDOM ID
  const [key, setKey] = useState( "_" + Math.random().toString(36).substring(2, 9) );
  const [uri, setUri] = useState("");
  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  
  
  const onLoad = async () => {
    const { id } = route.params;
    if (id) {
        let data = await datastorage.readItemDetail(id);   
        // let book = await BookService.getItemDetail({"id":id});
      setKey(data.id);
      setUri(data.uri);
      setTitle(data.title);
      setColor(data.color);
      setPrice(data.price.toString());
      

  
    }
    navigation.setOptions({ title: (id ? "edit" : "create") });    
  };
  useEffect(() => { onLoad();  }, []);

  const saveBook = async () => {
    //A NEW ITEM
    let new_data = { id: key,uri: uri,title: title,color: color, price: price };
    //SAVE TO STORAGE
    await datastorage.writeItem(new_data);
    // const { id } = route.params;
    // if(id){
    //   await BookService.updateItem(new_data);
    // }else{
    //   await BookService.storeItem(new_data);
    // }

    //REDIRECT TO
    navigation.navigate("Book");
  };

//   useLayoutEffect(() => {
//     navigation.setOptions({ title: pid ? "edit" : "create" });
//   }, [navigation]);

  return (
    
    <ScrollView>
      <FlatList
                horizontal={false}
                data={onlinemenu}
                numColumns={3}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                          <TouchableOpacity 
                          onPress={() => {
                            setUri(item.uri);  
                            setTitle(item.title); 
                            setColor(item.color); 
                          }}  
        style={{
          height: 130,
          width: 130,
          paddingHorizontal: 10,
          backgroundColor: "pink",
          margin: 20,
          borderRadius: 10,
          alignItems: 'center'
        }}>
                            <Icon name={ item.uri }  size={60} color={ item.color } style={{ marginTop:10 }}/> 
                            <View style={{ marginTop:10}}>
                                <Text style={{ flex:1, fontSize: 20, color: "black",flexWrap:'wrap' }}>{ item.title }</Text>
                                
                            </View>
                            </TouchableOpacity>
                        );
                    }
                }
                keyExtractor={item => item.id}
                
            />
      <KeyboardAvoidingView style={{ flex: 1, padding: 20 }}>
     <View>
        <Text>จำนวนเงิน</Text>
        <TextInput placeholder="เงิน" value={price} onChangeText={(text) => setPrice(text)} />
      </View>      
      <Button title="SAVE" color="tomato" onPress={saveBook} />
    </KeyboardAvoidingView>
    
    </ScrollView>
  );
}