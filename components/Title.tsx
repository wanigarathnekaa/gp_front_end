import React from 'react'

interface TitleProps {
    text: string;
}

const Title = ({ text} : TitleProps) => {
  return (
    <h1 className='text-4xl text-black font-bold mt-2 ml-3 mb-0  '>{text}</h1>
  )
}

export default Title