import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import{ MapPinIcon, StarIcon, UserIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const CarsCard = ({
    id,
    imgUrl,
    title,
    description,
    price,
    rating,
    speed,
    address,
    dishes
}) => {
    const navigation=useNavigation();
  return (
  
    <TouchableOpacity onPress={()=>{
      navigation.navigate('Store',{
        id,
        imgUrl,
        title,
        description,
        price,
        rating,
        speed,
        address,
        dishes
      })

    }} className='bg-white mr-3 shadow-sm '>
        <View>
        <Image className='w-64 h-40 rounded-md pl-3 ' source={{uri:urlFor(imgUrl).url()}}/>
        </View>
        <View className='px-3 pb-4'>
        <Text className='font-bold text-lg text-black pt-2'>{title}</Text>
        <View className='flex-row ml-3 space-x-2'>
          <StarIcon size={20} color="#FFD700"/>
        <Text className='text-gray-500'><Text className='font-bold  text-[#2f3c7e]'>{rating}</Text>  . {price}K$</Text>  
        </View>
        <View className='px-3 flex-row'>
          <MapPinIcon size={20} color="#D3D3D3"/>
           
            <Text className='ml-3 '>{address}</Text>
           
        </View>
        </View>
    </TouchableOpacity>
     
    
  )
}

export default CarsCard