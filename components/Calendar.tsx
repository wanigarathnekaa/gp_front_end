"use client";
import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  
  return (
    <div className=' bg-white shadow-md rounded p-4 mt-20 flex justify-center'>
        <DatePicker
        selected={selectedDate} 
        onChange={(date)=>setSelectedDate(date)} className='w-60 appearance-none shadow-border rounded py-20 px-2 text-gray-darker ' inline />
    </div>
  )
}

export default Calendar;