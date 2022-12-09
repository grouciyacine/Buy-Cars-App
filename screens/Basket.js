import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectCars } from '../features/cars';
import { XCircleIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress'

 
const Basket = () => {
    const navigate=useNavigation();
    const store=useSelector(selectCars)

  return (
    <SafeAreaView className='flex-1 bg-[#2f3c7e]'>
      <View className='flex-row items-center p-2 '>
       <Text className='flex-1 text-white text-lg'>Order Help </Text> 
      <TouchableOpacity onPress={()=>navigate.navigate('Total')}>
        <XCircleIcon size={40} color='white'/>
      </TouchableOpacity>
      </View>
      <View>
        <View className='bg-white rounded-md p-6 mx-5 my-2 z-30'>
         <View className='justify-between flex-row' >
            <View>
               <Text className='text-lg '>Estimated Times</Text>
            <Text className="text-4xl text-black">45-55 Minutes</Text>   
            </View>
            
         <Image className='rounded-full w-20 h-20' source={require('../R.jpg')}/>   
         </View>
       <Progress.Bar size={30} color="#2f3c7e" indeterminate={true}/>
       <Text className='mt-2'>Your Order at {store.title} is finish  </Text>
        </View >
    
      </View>
      <View className='flex-row  items-center bg-white p-5 justify-between rounded-2xl  mx-4 my-3'>
        <View className=''>
          <Image source={require('../R.jpg')} className='w-12   h-12 rounded-full'/>  
        </View>
      <View>
          <Text className='text-gray-500 text-base'>Grouci Yacine</Text>
      <Text className='text-gray-400 text-base'>Your Rider</Text>
      </View>
      <View>
          <Text className='text-[#2f3c7e] text-lg'>Call</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
//3:20
export default Basket