import React from 'react'

interface TitleProps {
    text: string;
}

const Title = ({ text} : TitleProps) => {
  return (
    <h1 className='text-2xl font-bold mb-4'>{text}</h1>
  )
}

export default Title