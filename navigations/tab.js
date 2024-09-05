import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import  Icon  from 'react-native-vector-icons/FontAwesome5';

import Book from '../screens/Book';
import Info from '../screens/Info';
import Wallet from '../screens/wallet';
import Chart from '../screens/chart';


const Tab = createBottomTabNavigator();

export default function Tabb() {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#cf6ffa', tabBarInactiveTintColor: 'gray',tabBarStyle:{ height:90},tabBarLabelStyle:{ fontSize:20 }}}>
          <Tab.Screen
            name="Book"
            component={Book}
            options={{
              tabBarLabel: "หนังสือ",
              tabBarIcon: ({ color }) => ( <Icon name="book" color={color} size={50} /> ),
              headerShown : false,
            }}
          />
          <Tab.Screen
            name="กระเป๋าเงิน"
            component={Wallet}
            options={{
              tabBarLabel: "กระเป๋าเงิน",
              tabBarIcon: ({ color }) => ( <Icon name="wallet" color={color} size={50} /> ),
              
            }}
          />
          <Tab.Screen
            name="การวิเคราะห์"
            component={Chart}
            options={{
              tabBarLabel: "การวิเคราะห์",
              tabBarIcon: ({ color }) => ( <Icon name="chart-pie" color={color} size={50} /> ),
              
            }}
          />
          <Tab.Screen
            name="เพิ่มเติม"
            component={Info}
            options={{
              tabBarLabel: "เพิ่มเติม",
              tabBarIcon: ({ color }) => ( <Icon name="info" color={color} size={50} /> ),
              
            }}
          />
          
          
          
        </Tab.Navigator>
      );
    

}


{/* <View style={{ flexDirection:'column' }}><FontAwesome name="book"  size={60} color="teal" /><Text style={{ color:'#cf6ffa' }}>หนังสือ</Text></View>
            <View style={{ flexDirection:'column' }}><FontAwesome name="window-restore"  size={60} color="teal" /><Text style={{ color:'gray' }}>กระเป๋าเงืน</Text></View>
            <View style={{ flexDirection:'column' }}><FontAwesome name="money"  size={60} color="teal" /><Text style={{ color:'gray' }}>การวิเคราะห์</Text></View>
            <View style={{ flexDirection:'column' }}><FontAwesome name="info"  size={60} color="teal" /><Text style={{ color:'gray' }}>เพิ่มเติม</Text></View> */}