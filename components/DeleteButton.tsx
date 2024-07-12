import React from 'react'
import Button from '@mui/joy/Button';


function DeleteButton() {
  return (
    <div>
        <Button className='text-red-700 bg-red-100 hover:bg-red-600 hover:text-white font-bold py-2 px-4 rounded'>Delete</Button>
    </div>
  )
}

export default DeleteButton