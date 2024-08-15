import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import  Icon  from 'react-native-vector-icons/FontAwesome5';

import Book from '../screens/Book';
import Info from '../screens/Info';


const Tab = createBottomTabNavigator();

export default function Tabb() {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#cf6ffa', tabBarInactiveTintColor: 'gray' }}>
          <Tab.Screen
            name="Book"
            component={Book}
            options={{
              tabBarLabel: "หนังสือ",
              tabBarIcon: ({ color, size }) => ( <Icon name="book" color={color} size={size} /> ),
              headerShown : false,
            }}
          />
          <Tab.Screen
            name="เพิ่มเติม"
            component={Info}
            options={{
              tabBarLabel: "เพิ่มเติม",
              tabBarIcon: ({ color, size }) => ( <Icon name="info" color={color} size={size} /> ),
            }}
          />
          
          
        </Tab.Navigator>
      );
    

}


{/* <View style={{ flexDirection:'column' }}><FontAwesome name="book"  size={60} color="teal" /><Text style={{ color:'#cf6ffa' }}>หนังสือ</Text></View>
            <View style={{ flexDirection:'column' }}><FontAwesome name="window-restore"  size={60} color="teal" /><Text style={{ color:'gray' }}>กระเป๋าเงืน</Text></View>
            <View style={{ flexDirection:'column' }}><FontAwesome name="money"  size={60} color="teal" /><Text style={{ color:'gray' }}>การวิเคราะห์</Text></View>
            <View style={{ flexDirection:'column' }}><FontAwesome name="info"  size={60} color="teal" /><Text style={{ color:'gray' }}>เพิ่มเติม</Text></View> */}