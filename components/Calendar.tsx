"use client";
import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: Date | null) => {
    if(date){
      setSelectedDate(date);
    }
  }

  
  return (
    <div className=' bg-white shadow-lg rounded-xl p-4 mt-20 flex justify-center'>
        <DatePicker
        selected={selectedDate} 
        onChange={handleDateChange} 
        className='w-60 appearance-none shadow-border rounded py-20 px-2 text-gray-darker ' 
        inline />
    </div>
  )
}

export default Calendar;