import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Category from '../components/Category'
import FeaturedRows from '../components/FeaturedRows'
import{ UserIcon,AdjustmentsVerticalIcon,MagnifyingGlassIcon } from 'react-native-heroicons/solid'
import client from '../sanity'
const HomeScreen = () => {
const navigation=useNavigation()
useLayoutEffect(()=>{
navigation.setOptions({
headerShown:false
})
},[])
const [featuredCategory,setFeaturedCategory]=useState([])
useEffect(()=>{
client.fetch(`
*[_type=="featured" ] {
    ...,
  
   
  }
  
  `).then((data)=>{setFeaturedCategory(data);})
},[])
return (
<SafeAreaView className='pt-5  bg-white'>
<View className=' flex-row mt-3 ml-2 ' >
<Image className='w-12  h-12 rounded-full mb-3'  source={require('../R.jpg')}/>
<View className='ml-3 flex-1'>
<Text className='text-sm text-gray-400'>WorldAouto</Text>
<Text className='text-xl font-bold text-[#2f3c7e]'>Current Location</Text>
</View>
<View className='mr-2'>
<UserIcon  size={30} color="#2f3c7e" />
</View>
</View>
<View className='mb-2 flex-row '>
<View className='ml-2 border-2 border-[#2f3c7e] space-x-2 flex-row  bg-gray-200 flex-1 '>
<View className='mt-3 ml-2'>
<MagnifyingGlassIcon size={23} color="#2f3c7e"/>  
</View>
<TextInput
placeholder='Enter Car Name'
keyboardType='default'/>
</View>
<View className="mr-1 mt-2 ">
<AdjustmentsVerticalIcon  size={30} color="#2f3c7e"/>
</View>
</View>
<ScrollView className='bg-gray-100'
contentContainerStyle={{
paddingBottom:100,
}}>
<Category/>
{featuredCategory?.map((categry)=>{
 return(
   <FeaturedRows
   key={categry._id}
id={categry._id}
title={categry.name}
description={categry.short_description}
/> 
 )   
})}
</ScrollView>
</SafeAreaView>
)}
export default HomeScreen