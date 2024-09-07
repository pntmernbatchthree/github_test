"use client"
import React, { useState } from 'react'


const TodoApp = () => {
  const [todo, setTodo] =useState('')
  
  return (
    <div>
      <form className='flex items-center gap-4 h-10 md:h-12'>
        <input type="text"
        placeholder='Enter your todo...'
        className='flex-1 h-full border-[1px] bg-transparent pl-4 pr-6 border-gray-600 text-base rounded-md' 
        onChange={(e)=>setTodo(e.target.value)}
        />
        <button className=' text-white h-full border-[1px] border-gray-600 px-2 rounded-md text-sm md:text-base'>Add todo </button>
      </form>
    </div>
  )
}

export default TodoApp