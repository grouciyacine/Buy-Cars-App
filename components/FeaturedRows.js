import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {ArrowRightIcon} from 'react-native-heroicons/outline'
import CarsCard from './CarsCard'
import client from '../sanity'
const FeaturedRows = ({id,title,description}) => {
  const [store,setStor]=useState([])
   useEffect(()=>{
   client.fetch(`
   *[_type=="featured" && _id == $id] {
      ...,
      cars[]->{
      ...,
      dishes[]->,
      type->{
      name
      }
      },
    }[0]
   `
   ,{ id }).then(data=>{setStor(data?.cars)})
  },[])
  
   return (
    <View className='pt-4'>
       <View className='flex-row items-center justify-between px-4'>
      <Text className='font-bold text-xl text-[#2f3c7e]'>{title}</Text>
      <ArrowRightIcon size={20} color="#2f3c7e"/>
    </View>  
    <View className="pt-1">
    <Text className='text-base text-gray-500 px-4'>{description}</Text>
    </View>
    
     <ScrollView
     horizontal
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={{
     paddingHorizontal:15,
     }} className="pt-4">
      {
         store?.map(data=>
            (
               <CarsCard 
               key={data._id}
               id={data._id}
               imgUrl={data.image}
               title={data.name}
               description={data.description}
               price={data.price}
               rating={data.rating}
               speed={data.speed}
               address={data.address}
               dishes={data.dishes}
               />   
         ))}
      {/*store?.map((stor)=>{
       /*  return(
          <CarsCard 
          key={stor._id}
          id={stor._id}
          imgUrl={stor.image}
          title={stor.name}
          description={stor.description}
          price={stor.price}
          rating={stor.rating}
          speed={stor.speed}
          address={stor.address}
          />   
         )
       })*/}
    </ScrollView>
    </View>
   
   
  )
}

export default FeaturedRows