import React from 'react'

interface StudentCounterCardProps {
  title:String;
  count:number;
  wide?:boolean
}

const StudentCounterCard = ({title, count, wide}:StudentCounterCardProps) => {
  return (
    <div className={`p-6  mt-15 ml-3 rounded-2xl border bg-white hover:border-blue-200 flex items-center shadow-lg justify-between  group cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:text-blue-500 h-13 ${wide ? 'w-full' : 'w-full'}`}
    >
       

        <div>
            <div className="text-xl p-2 text-gray-600 font-semibold mb-1 cursor-pointer group-hover:text-[#706ee4] text-center">{title}</div>
       
        
            <p className="text-3xl font-bold text-gray-500 cursor-pointer group-hover:text-[#706ee4] text-center">{count}</p>

        </div>
        
       
    </div>
  )
}

export default StudentCounterCard