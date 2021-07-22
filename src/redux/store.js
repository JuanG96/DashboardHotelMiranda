import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './roomsSlice'

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})