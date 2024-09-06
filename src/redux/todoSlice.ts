
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TodoState {
    todoList :Todo[]
}
export interface Todo{
    _id:string,
    todo:string
}

const initialState:TodoState = {
    todoList:[]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo:(state,action : PayloadAction<Todo>) =>{
        state.todoList.push(action.payload)
    },
    deleteTodo:(state,action : PayloadAction<string>) =>{
        state.todoList = state.todoList.filter((item)=> item?._id !== action.payload )
    },
    removetodo:(state)=>{
        state.todoList =[]
    }
  },
})

// Action creators are generated for each case reducer function
export const {addTodo,deleteTodo,removetodo } = todoSlice.actions

export default todoSlice.reducer