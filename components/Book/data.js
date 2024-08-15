import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Data() {
    return (
        <View style={{ flex:1, flexDirection : 'column',height:850 }}>    
        <View style={{ flex:1, backgroundColor:"white",borderRadius:50 }}>
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
                <Text style={{ fontSize:25,color:'red' }}>฿0</Text>
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
        </View>
        </View>
        <View style={{ flex:1, backgroundColor:"white",marginTop:-50 }}>
            <View style={{  backgroundColor:"#f2f1f1",borderRadius:50,margin:50,justifyContent:"space-around",width:510,height:100 }}>
                <View style={{ flexDirection:'row',justifyContent:'space-around' }}>
                    <Text style={{ fontSize:15 }}><FontAwesome name="caret-down"  size={20} color="pink"/> พฤ. 11/7</Text>
                    <Text style={{ fontSize:15 }}>รายได้:4,134.69</Text>
                    </View>
                <View style={{ flexDirection:'row',justifyContent:'space-around' }}>
                    <View style={{ flexDirection:'row' }}><FontAwesome name="money"  size={45} color="teal" />
                    <View style={{ flexDirection:'column' }}><Text> ค่าจ้าง</Text><Text> ตัวเอง</Text></View>
                    
                    </View>
                    <View style={{ flexDirection:'column' }}><Text style={{ color:'lime',fontSize:15 }}>+฿4,134.69</Text><Text>บัญชีเริ่มต้น</Text></View>
                    </View>
                
            </View>
            <View style={{  backgroundColor:"#f2f1f1",borderRadius:25,margin:50,justifyContent:"flex-end",width:100,height:100,alignSelf:"flex-end" }}>
            <View style={{ alignItems:"center",alignSelf:"center",marginBottom:20 }}>
                <FontAwesome name="pencil"  size={60} color="teal"/></View>
            </View>
        </View>
        
      
      
      
      
    </View>
    







    );
}