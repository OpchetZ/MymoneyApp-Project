import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Tab from "./tab";
import Tabb from "./tab";
import DataForm from "../screens/Dataform";



const Stack = createStackNavigator();

export default function Root() {
  return ( 
    <Stack.Navigator initialRouteName="Tabb">
      <Stack.Screen name="Tabb" component={Tabb} options={{ headerShown: false }} />
      <Stack.Screen name="DataForm" component={DataForm} options={{ title:'' }}  />
    </Stack.Navigator>
  );
}
