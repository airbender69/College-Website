"use client"
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
const Counter = () => {
    const [count, setcount] = useState(0);
  return (
    <div>
      <button className='text-xl bg-blue-700 p-2 rounded-lg m-1'
      onClick={()=>setcount(count+1)}
      >Click me {count} times </button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Fab variant="extended" size="small" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
    </div>
  )
}

export default Counter
