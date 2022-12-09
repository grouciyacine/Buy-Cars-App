import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './features/basketSlice'
import  carsSlice  from './features/cars'


export const store = configureStore({
  reducer: {
    basket:basketSlice,
    cars:carsSlice,
  },
})