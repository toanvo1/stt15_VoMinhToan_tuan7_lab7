import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import screen1 from './soucre/screen1';
import { NavigationContainer } from '@react-navigation/native';
import screen2 from './soucre/screen2';

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
          <stack.Screen name='Home' component={screen1}/>
          <stack.Screen name='Details' component={screen2}/>


        </stack.Navigator>
    </NavigationContainer>
        
    
  );
}

