import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import datastorage from "../../storage/datastorage";
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Data() {
    const navigation = useNavigation();
    const [data, setdata] = useState("");  
    const [totalExpenses, setTotalExpenses] = useState(0);
    const loaddata = async () => { 
        let data = await datastorage.readItems();
        // let books = await BookService.getItems();
    setdata(data);
    
     const expenses = data.reduce((total, item) => {
        return total + parseFloat(item.price);  
    }, 0);

    setTotalExpenses(expenses);  

    };
    useEffect(() => {
        // WHEN MOUNT AND UPDATE
        const unsubscribe = navigation.addListener("focus", () => {
            loaddata();
        });
        // WHEN UNMOUNT
        return unsubscribe;
      }, [navigation]);
      const [refresh, setRefresh] = useState(false);
    // useEffect(() => { loadBooks(); }, []);

    const DATA = ({ item, index })=>(
        <View 
            
            style={{ backgroundColor:"#f2f1f1",borderRadius:50,marginTop:25,marginHorizontal:50 }} 
            >
             
            
                <View style={{ flexDirection:'row',justifyContent:'space-around' }}>
                    <View style={{ flexDirection:'row' }}><Icon2 name={item.uri}  size={45} color={item.color}/>
                    <View style={{ flexDirection:'column' }}><Text>{item.title}</Text><Text> ตัวเอง</Text></View>
                    
                    </View>
                    <View style={{ flexDirection:'column' }}><Text style={{ color:'red',fontSize:15 }}>-฿{item.price}</Text><Text>บัญชีเริ่มต้น</Text></View>
                    <TouchableOpacity
                onPress={() => { confirmDelete(item.id); }}
                >
                <FontAwesome name="trash" size={30} />
            </TouchableOpacity>
                    </View>
                    
           
        </View>
    );
    const confirmDelete = (id) => {    
        return Alert.alert(
            "ยืนยันการลบ?",
            "คุณแน่ใจหรือไม่ว่าจะลบรายการนี้?",
            [
                { text: "ยกเลิก", },
                { text: "ยืนยัน", onPress: () => { deleteBook(id); }, },
            ]
        );
    };
    const deleteBook = async (id) => { 
       
    //REMOVE BOOK
    await datastorage.removeItem(id);
    loaddata();
    // await BookService.destroyItem({"id":id});
    //REDIRECT TO
    
     };
    return (
        <View style={{ flex:1, flexDirection : 'column',height:900 }}>    
        <View style={{ flex:1, backgroundColor:"white",borderTopRightRadius:50,borderTopLeftRadius:50 }}>
        <View style={{ backgroundColor:"#f2f1f1",borderRadius:50,margin:50,justifyContent:"center",width:510,height:350 }}>
            <View style={{ flex:1,flexDirection:"row",justifyContent:"center" }}>
                <Text style={{ alignSelf:'center',flex:2,marginLeft:50,fontSize:20 }}><FontAwesome name="chevron-left"  size={20} color="pink"/> 7/2024 <FontAwesome name="caret-down"  size={20} color="pink"/> <FontAwesome name="chevron-right"  size={20} color="gray"/></Text>
                <View style={{ alignSelf:'center',flex:1 }}><FontAwesome name="envelope"  size={50} color="teal"/></View>
                <View style={{ alignSelf:'center',flex:1 }}><FontAwesome name="eye"  size={50} color="teal"/></View>
            </View>
            <View style={{ flex:1,flexDirection:"row",justifyContent:"space-around" }}>
                <View style={{ flexDirection:"column" }}>
                    <Text style={{ fontSize:25,color:'lime' }}>฿4,134.69</Text>
                    <Text style={{ fontSize:20,fontStyle:'italic' }}>ทั้งหมด</Text>
                </View>
                <View style={{ flexDirection:"column" }}>
                <Text style={{ fontSize:25,color:'lime' }}>฿4,134.69</Text>
                <Text style={{ fontSize:20,fontStyle:'italic' }}>รายได้</Text>
                </View>
                <View style={{ flexDirection:"column" }}>
                <Text style={{ fontSize:25,color:'red' }}>฿{totalExpenses.toFixed(2)}</Text>
                <Text style={{ fontSize:20,fontStyle:'italic' }}>ค่าใช้จ่าย</Text>
                </View>
            </View>
            <View style={{ flex:1,flexDirection:"row",justifyContent:'center' }}>
                <View style={{ backgroundColor:'#E6E6E6',height:50,width:100,alignItems:'center',justifyContent:'center' }}>
                    <Text style={{ color:'#cf6ffa' }}>งบรายสัปดาห์</Text>
                </View>
                <View style={{ backgroundColor:'pink',height:50,width:100,alignItems:'center',justifyContent:'center' }}>
                    <Text style={{ color:'#cf6ffa' }}>งบรายเดือน</Text>
                </View>
                <View style={{ backgroundColor:'#E6E6E6',height:50,width:100,alignItems:'center',justifyContent:'center' }}>
                <Text style={{ color:'#cf6ffa' }}>งบรายปี</Text>
                </View>

                
            </View>
            <View style={{ flex:1,flexDirection:"row",justifyContent:"flex-end" }}>
                
            <TouchableOpacity
        onPress={() => { navigation.navigate("DataForm") }}
        style={{ backgroundColor: "white", flex: 1, alignItems: "center", justifyContent: "center", width: 80, height: 80, borderRadius: 20, position: "sticky"}} >
        <Icon name="pen-to-square"  size={60} color="teal"/>
      </TouchableOpacity>
            </View>
        </View>
        <ScrollView>
        
        <FlatList
                data={data}
                refreshing={refresh}
                onRefresh={() => { loaddata(); }}
                numColumns={1}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => ( <DATA item={item} /> ) }
            />
          
            </ScrollView>
        
           
            
        
      </View>
      
      
      
    </View>
    







    );
}