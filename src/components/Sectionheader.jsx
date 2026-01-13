import React from 'react'

const Sectionheader = (props) => {

  return (
    <div className='text-center pt-20'>
            <h2 className='font-semibold text-sm text-gray-400'>{props.title}</h2>
            <h1 className='font-medium  text-2xl'>{props.subtitle}</h1>
    </div>
  )
}

export default Sectionheader