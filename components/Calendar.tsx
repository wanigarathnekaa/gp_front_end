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
    <div className='w-full border-t border-gray-300 p-8 mt-3 flex justify-center'>
        <DatePicker
        selected={selectedDate} 
        onChange={handleDateChange} 
        className='w-60 appearance-none shadow-border rounded py-20 px-2 text-gray-darker' 
        inline />
    </div>
  )
}

export default Calendar;