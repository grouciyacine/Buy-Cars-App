import { View, Text, Image,  TouchableOpacity } from 'react-native'
import React, {  useState } from 'react'
import  { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addTobasket, removeBasket,selectBasketItemsWithId } from '../features/basketSlice'



const CarsRow = ({id,name,price,imgUrl,description,logo}) => {
  
const items=useSelector((state)=>selectBasketItemsWithId(state,id))
const dispatsh=useDispatch();
  const additems=()=>{
  dispatsh(addTobasket({id,name,price,imgUrl,description,logo}))
}
const removeitems=()=>{
 if( !items.length>0) return ;
  
dispatsh(removeBasket({id}))
}
const [isPressed,setIsPredssed]=useState(false)
    return (
      <>
        <TouchableOpacity onPress={()=>setIsPredssed(!isPressed)} className={`bg-white p-1 border-gray-200 border-t-2 ${isPressed && "border-b-0"}`}>
         
        <View className="flex-row space-x-2 ">
          <Image className="w-20 h-20 m-3 rounded-md" source={{uri:urlFor(imgUrl).url()}}/>
          <View className="flex-col mt-2">
              <Text className="text-black text-xl">{name}</Text> 
      <Text>{description}</Text>
      <Text className="text-gray-400 mt-2">
          {price}k$
        </Text> 
          </View>
        
   
        </View>
        </TouchableOpacity>
     {isPressed && (
      <View className="bg-white">
        <View className="flex-row space-x-1 items-center m-2">
          <TouchableOpacity onPress={removeitems}>
            <MinusCircleIcon size={40} color={items.length ?"#2f3c7e":"gray" }/>
          </TouchableOpacity>
          <Text className="text-lg text-black ">{items.length}</Text>
          <TouchableOpacity onPress={additems} >
            <PlusCircleIcon size={40} color="#2f3c7e"/>
          </TouchableOpacity>
        </View>
      </View>
     )}
   </> 
  )
}
//2:34
/*{items.length ?"#2f3c7e":"gray"}*/
export default CarsRow