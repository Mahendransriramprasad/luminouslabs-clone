import React from 'react'

const Section4 = () => {
  return (
    <div
  className="relative mx-auto mt-20 mb-10 h-170 w-300 rounded-4xl overflow-hidden bg-cover bg-center justify-between"
  style={{
    backgroundImage:
      'url("https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/690e0f96740cb5ddd676f8eb_container%20(8).webp")',
  }}
>


<div className=" absolute top-20 left-1/2 -translate-x-1/2 z-20 text-center w-full px-6">
  <h2 className="text-white text-4xl font-extrabold max-w-5xl mx-auto wrap-break-words">
    <span className="font-bold">Meet Pro Series 2.0, </span>
    <span className="text-zinc-200/60 font-bold text-3xl">
      the intelligent light <br/>therapy system built for precision,<br/> performance, and
      faster recovery.
    </span>
  </h2>
</div>

<div className='group'>
<div className="px-4 py-2 items-center bg-[#451e1f80] backdrop-blur-3xl  rounded-full flex justify-between  absolute bottom-20 max-w-3xl w-2xl z-20 left-1/2 -translate-x-1/2">
    <div className=''>
            <h1 className='text-white text-xl font-medium'>Next Gen Red Light</h1>
    </div>
    
    <div className='flex gap-3 items-center'>
        <h1 className='text-white text-xl font-medium'>starting at €2.200</h1>
        <button className="peer bg-white text-black font-medium text-sm rounded-4xl whitespace-nowrap p-4 px-7">
        Buy now
        </button>

    </div>
  </div>
<img
  src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/690e0fa6417246dc378773c9_container%20(9).webp"
  className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 max-h-[80%] transition-transform duration-500 group-hover:scale-110"
  alt="product"
/>
</div>

</div>


  )
}

export default Section4