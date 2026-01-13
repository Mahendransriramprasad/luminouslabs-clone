import React from 'react'

const Benifitscard = (props) => {
  return (
    <div className='flex h-[80vh] w-[90vw] sm:h-[50vh] sm:w-280'>
        <div className=' bg-gray-200'>
            <img src={props.img} alt={props.altimg} className='h-[80vh] w-min-full  sm:h-full  object-cover rounded-2xl'></img>
        </div>
        <div className='flex flex-col justify-between p-3 bg-gray-200 rounded-r-2xl sm:w-[60%]'>
            <div className='p-1 sm:p-3'>
                <h1 className='text-2xl sm:text-3xl font-medium'>{props.title}</h1>
                <h2 className='text-m sm:text-xl font-normal text-gray-500 py-2'>{props.subtitle}</h2>
            </div>
            <div>
                <div className='sm:p-3'>
                    <p className='sm:text-lg 'text-gray-500>{props.des}</p>
                </div>
                <div className='flex flex-col sm:flex-row sm:gap-2 p-1 sm:p-4'>
                    {props.points.map(function(elem,key){
                        return <div key={key} className='border border-gray-500 text-gray-500 rounded-sm w-full sm:h-15 p-2 '>
                                <p className='text-sm'>{elem}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benifitscard