import React from 'react'

interface SubTitleProps {
    text: string;
}

const SubTitle = ({ text} : SubTitleProps) => {
  return (
    <h1 className='text-2xl text-black font-normal mt-2 ml-3 mb-0  '>{text}</h1>
  )
}

export default SubTitle