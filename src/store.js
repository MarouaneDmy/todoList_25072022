import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './store/todo'

export default configureStore({
    reducer: {
        todo: todoReducer,
    }
})