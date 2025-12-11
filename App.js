import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import TaskList from './screens/TaskList.js'; 
import AddTask from './screens/AddTask.js'; 
import TaskDetails from './screens/TaskDetails.js'; 
 
const Stack = createNativeStackNavigator(); 
 
export default function App() { 
  return ( 
    <NavigationContainer> 
        <Stack.Navigator> 
        <Stack.Screen name="TaskList" component={TaskList} /> 
        <Stack.Screen name="AddTask" component={AddTask} /> 
        <Stack.Screen name="TaskDetails" component={TaskDetails} /> 
        </Stack.Navigator> 
    </NavigationContainer> 
  ); 
} 