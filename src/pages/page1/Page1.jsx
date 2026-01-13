import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Section1 from '../../sections/Section1'
import Section2 from '../../sections/Section2'
import Section3 from '../../sections/Section3/Section3'
import Section4 from '../../sections/Section4'
import Section5 from '../../sections/Section5'
const Page1 = () => {
  return (
    <>
            <div className='h-screen w-vw bg-[url("https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/673daa20f8d824dc60d87727_6ca5979b6f014ba47a22c3f88928aabc_bg-1.webp")] bg-cover bg-center rounded-4xl flex flex-col mx-20 my-8  '>
              <Nav />
              <Section1/>
            </div>
            <div className='m-20'>
              <Section2/>
            </div>
            <div className='m-5 '>
              <Section3/>
            </div>
            <div>
              <Section4/>
            </div>
            <Section5/>
            
        </>
  )
}

export default Page1

