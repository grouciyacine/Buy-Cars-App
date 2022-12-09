import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import{createNativeStackNavigator}from '@react-navigation/native-stack'
import {TailwindProvider}from 'tailwindcss-react-native'
import HomeScreen from './screens/HomeScreen'
import Store from './screens/Store'
import { Provider } from 'react-redux'
import {store} from './store'
import BasketTotal from './screens/BasketTotal'
import Png from './screens/Png'
import Basket from './screens/Basket'

const Stack=createNativeStackNavigator();
const App = () => {
  return (

<NavigationContainer>
  <Provider store={store}>
  <TailwindProvider>
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen}/>
<Stack.Screen name='Store' component={Store}/>
<Stack.Screen name="Total" component={BasketTotal} options={{presentation:"modal",headerShown:false}}/>
<Stack.Screen name='Png' component={Png} options={{presentation:"fullScreenModal",headerShown:false }}/>
<Stack.Screen name='Basket' component={Basket} options={{headerShown:false}}/>
</Stack.Navigator>
</TailwindProvider>  
  </Provider>
</NavigationContainer>


 
  )
}

export default App