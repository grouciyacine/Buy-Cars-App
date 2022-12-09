import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cars:{
        id:null,
        imgUrl:null,
        title:null,
        description:null,
        price:null,
        rating:null,
        speed:null,
        address:null,
        dishes:null,
    }
}
export const carsSlice=createSlice({
name:'cars',
initialState,
reducers:{
setCars:(state,action)=>{
state.cars=action.payload
}
}
})
export const {setCars}=carsSlice.actions;
export const selectCars=(state)=>state.cars.cars;
export default carsSlice.reducer;