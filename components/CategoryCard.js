import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

const CategoryCard = ({imgUrl,title}) => {
  return (
    <TouchableOpacity className='space-x-3'>
    <Image source={{uri:urlFor(imgUrl).url()}} className='h-20 ml-2  w-20 rounded'/>
    <Text>{title}</Text>
    </TouchableOpacity>
  )}

export default CategoryCard