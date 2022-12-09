import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon, ChevronDownIcon, ChevronRightIcon } from 'react-native-heroicons/outline';
import CarsRow from '../components/CarsRow';
import { MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/solid';
import Basketicone from '../components/Basketicone';
import { useDispatch } from 'react-redux';
import {setCars} from '../features/cars'


const Store = () => {
const {params:{
  id,
        imgUrl,
        title,
        description,
        price,
        rating,
        speed,
        address,
        dishes,
}}=useRoute();
const navigation=useNavigation();
  useLayoutEffect(()=>{
  navigation.setOptions({
    headerShown:false,
  })
  },[])
const dispatch=useDispatch()
  useEffect(()=>{
dispatch(setCars({ id,
  imgUrl,
  title,
  description,
  price,
  rating,
  speed,
  address,
  dishes}))
},[dispatch])
  return (
    <>
    <ScrollView>
      <View className='relative '>
<Image className="w-full h-60 bg-gray-300 p-4 " source={{uri:urlFor(imgUrl).url()}}/>
      <TouchableOpacity className='absolute top-5 bg-white rounded-full left-5 p-1'>
      <ArrowLeftIcon  onPress={()=>navigation.goBack()} size={25} color="#2f3c7e" />
      </TouchableOpacity>
      </View>
     <View className="bg-white">
     <View className='pl-4 pt-2'>
      <Text className="text-black font-bold text-3xl ">{title}</Text>
      <View className='flex-row space-x-2 my-2'> 
      <View className='flex-row space-x-2'>
         <StarIcon size={20} color="#2f3c7e"/>
         <Text>{rating}</Text>
         <MapPinIcon size={20} color="#2f3c7e"/>
         <Text>Nearby .{address}</Text>
      </View>
      </View>
     </View>
     </View>
     <View>
      <Text className="text-xl text-black">
        {description}
      </Text>
      <TouchableOpacity className="flex-row space-x-2 border-gray-300 border-t-2 border-b-2 pt-3 pb-3">
      <View className="flex-row flex-1 space-x-2">
      <QuestionMarkCircleIcon size={20} color="#2f3c7e"/>
      <Text className=" flex-1">Have A Cars Qestion?</Text>
       </View>
      <ChevronRightIcon size={20} color="#2f3c7e"/> 
      </TouchableOpacity>
     <Text className="text-xl text-black">Products:</Text>
       
           {dishes.map((dish)=>(
            <CarsRow key={dish._id} id={dish._id}
            name={dish.name} description={dish.description}
            price={dish.price} imgUrl={dish.image} logo={dish.logo}
            />
        )

      )}
     </View>
    </ScrollView>
        <Basketicone/> 
    </>
  
  //2h
  )
}

export default Store