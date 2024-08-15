import React from "react";
import { ScrollView, View } from "react-native";
import Infobar from "../components/Book/infobar";
import Screen from "../components/Book/screen";
import Add from "../components/Book/add";
import Data from "../components/Book/data";


export default function Book() {
    return (
        <ScrollView style={{ flex:1,backgroundColor:'pink', flexDirection:'column' }}>

            <View>
            <Screen/>
            <Add/>
            
            <Data/>
            <Infobar/>
            

            </View>
        </ScrollView>







    );
}