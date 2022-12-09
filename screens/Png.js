import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress'
const Png = () => {
    const navigate=useNavigation()
    useLayoutEffect(()=>{
    navigate.setOptions({
        headerShown:false
    })
    },[])
  setTimeout(() => {
    navigate.navigate('Basket')
  }, 4000);
  return (
    <SafeAreaView className='flex-1 justify-center items-center bg-[#2f3c7e]'>
      <Animatable.Image 
       source={require("../R.gif")}
       animation="slideInUp"
      iterationCount={1}
       className='h-90 w-90'
      />
      <Text className='p-1 text-white text-lg'>Waiting your Response</Text>
      <Progress.Circle size={60} indeterminate={true} color='white'/>    
      </SafeAreaView>
  )
}

export default Png