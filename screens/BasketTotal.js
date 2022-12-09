import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
//import { selectCars } from '../features/Cars'
import {selectCars} from '../features/cars'
import { removeBasket, selectBasketItems, totalprice } from '../features/basketSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ClockIcon, XCircleIcon } from 'react-native-heroicons/solid'
import{urlFor} from '../sanity'
export default function BasketTotal() {
  const navigat=useNavigation()
  useLayoutEffect(()=>{
    navigat.setOptions({
      headerShown:false,
    },[])
  })
  const cars=useSelector(selectCars)
  const prixTolal=useSelector(totalprice)
  const items=useSelector(selectBasketItems)
  const dispatch=useDispatch()
  const [groupeditems,setGrupeditems]=useState([])
  useMemo(()=>{
  const grouperItems=items.reduce((results,item)=>{
(results[item.id]=results[item.id] || []).push(item)
return results;
  },{})
  setGrupeditems(grouperItems)
  },[items])
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className='bg-gray-100 border-b shadow-xl border-[#2f3c7e] p-4 items-center flex-row '>
       <Image className="w-10 h-10 rounded-full " source={require('../R.jpg')}/>
       <View className=" p-2 flex-1 text-center items-center ">
        <Text className="text-lg font-semibold text-black">Basket</Text>
        <Text className=" text-xs">{cars.title}</Text>
        </View>
       <XCircleIcon size={40} color="#2f3c7e" onPress={()=>navigat.goBack()}/>
      </View>
      <View className='flex-row p-3 space-x-2 py-2 my-5 bg-gray-100'>
        <ClockIcon size={30} color="#2f3c7e"/>
        <Text className='flex-1 text-black text-lg'>
          Deliver in 55-75min 
        </Text>
        <TouchableOpacity>
          <Text className=' pr-2 text-[#2f3c7e] text-base'>Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className='divide-y divide-gray-200'>
        {Object.entries(groupeditems).map(([key,itmes])=>(

          <View key={key} className='p-2 items-center flex-row space-x-2 bg-gray-100'>
           <Text>{itmes.length}x</Text>
           <View className='flex-1'>
            <Image source={{uri:urlFor(itmes[0]?.imgUrl).url()}} className='w-12 h-12 rounded-xl'/>
           <Text className='text-black'>{itmes[0]?.name}</Text>
           </View>
           <View className='flex-row items-center space-x-2   '>
            <Text className='text-lg  '>{itmes[0]?.price}$</Text>
           <TouchableOpacity >
             <Text onPress={()=>dispatch(removeBasket({id:key}))} className='text-[#2f3c7e]  text-lg '>
             Remove
           </Text>
           </TouchableOpacity>
           </View>
           
          
          </View>
        ))}
      </ScrollView>
      <View className='bg-gray-100 border-r-2 p-3 '>
        <View className=' flex-row justify-between '>
          <Text className='text-base text-black '>Subtotal</Text>
          <Text className='text-lg text-black'>{prixTolal}k$</Text>  
        </View>
        <View className=' flex-row justify-between '>
          <Text className='text-base text-black '>Delivrey Fee</Text>
          <Text className='text-lg text-black'>5$</Text>  
        </View>
        <View className=' flex-row justify-between '>
          <Text className='text-base text-black '>Order Total</Text>
          <Text className='text-lg text-black'>{prixTolal+5}k$</Text>  
        </View>
        <TouchableOpacity onPress={()=>navigat.navigate('Png')} className='bg-[#4c61ce] p-4  rounded-lg font-bold'>
          <Text className='font-bold text-lg text-center text-white'>Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
//2:56m