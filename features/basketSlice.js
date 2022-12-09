import { createSlice } from '@reduxjs/toolkit'

const initialState={
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addTobasket: (state,action) => {
    state.items=[...state.items,action.payload]
    },
    removeBasket: (state,action) => {
      const index=state.items.findIndex((item)=>item.id===action.payload.id);
    let newBasket=[...state.items]
    if(index>=0){
        newBasket.splice(index,1);
    }else{
        console.warn(`eroor dude you have a ${index} in your basket`)
    }
state.items=newBasket;
    },
   
  },
})
export const { addTobasket,removeBasket } = basketSlice.actions
export const selectBasketItems=(state)=>state.basket.items;
export const selectBasketItemsWithId=(state,id)=>state.basket.items.filter((item)=>item.id===id)
export const totalprice=(state)=>state.basket.items.reduce((total,item)=>total+=item.price,0)
export default basketSlice.reducer;