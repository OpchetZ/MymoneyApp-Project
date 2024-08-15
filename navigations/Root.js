import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Tab from "./tab";
import Tabb from "./tab";



const Stack = createStackNavigator();

export default function Root() {
  return ( 
    <Stack.Navigator initialRouteName="Tabb">
      <Stack.Screen name="Tabb" component={Tabb} options={{ headerShown: false }} />
      
    </Stack.Navigator>
  );
}
