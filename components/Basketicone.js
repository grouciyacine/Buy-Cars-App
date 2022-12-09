import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, totalprice } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native';
import { ShoppingBagIcon } from 'react-native-heroicons/solid';
import { ifError } from 'assert';

const Basketicone = () => {
  const items=useSelector(selectBasketItems);
const total=useSelector(totalprice)
const navigation=useNavigation()  
if(items.length===0) return null;
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('Total')} className="p-1 w-full ">
    <View className="flex-row space-x-2 mx-5 rounded-lg items-center p-3  text-lg  bg-[#2f3c7e]">
        <ShoppingBagIcon size={30} color="white"/>
       <Text className=" text-white text-lg  font-extrabold bg-[#4051a8] py-1 px-2">{items.length}</Text>
          <Text className=" text-white text-lg font-medium flex-1 text-center ">View Basket</Text>
      <Text className=" text-white text-lg  font-extrabold">{total}k$</Text>
    </View>
    
         </TouchableOpacity>
    
  )
}

export default Basketicone