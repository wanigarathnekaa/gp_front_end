import React from 'react'
import Button from '@mui/joy/Button';

function CancelButton() {
  return (
    <div>
        <Button className='text-gray-600 bg-gray-200 hover:bg-gray-100 hover:text-white font-bold py-1.5 px-4 rounded transform transition-transform duration-300 hover:scale-105 '>Cancel</Button>
    </div>
  )
}

export default CancelButton