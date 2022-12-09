import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import client from '../sanity'
export default function Category() {
  const [category,setCategory]=useState([])
  useEffect(()=>{
   client.fetch(`
   *[_type=="category" ] {
    ...,

         

  }
   `
   ).then((data)=>{setCategory(data)})
  },[])
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingHorizontal:1,
        paddingTop:10,
    }
    }
    
    className='space-x-3'>
      {
        category?.map((data)=>(
          <CategoryCard key={data._id} imgUrl={data.image} title={data.name}/>  
        ))
      }
    
  
  
    </ScrollView>
  )
}