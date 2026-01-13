import ApplicationCard from './ApplicationCard'
import { FaArrowRight } from "react-icons/fa6";
const Section3 = () => {
    const cards = [
  {
    image: "https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6748577ad24e2f2050ddaf30_man.webp",
    title: "Stay your best self, always",
    category: "Wellbeing",
    colors: ["#FF9A2B", "#FFDFCF", "#FFAD37"]
  },
  {
    image: "https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/673c1a67dd8dc2f34eb35582_Portrait%20of%20Black%20Woman%203.webp",
    title: "Optimize your fertility, cycle and menopause naturally",
    category: "Women’s health",
    colors: ["#FF97E7", "#FF66B9", "#FF8FE1", "#FFDDFE", "#FF9DE5"]
  },
  {
    image: "https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671b4edb7e08b9f23ffd16d8_Smiling%20Woman%20Purple%20Glasses%201.webp",
    title: "old woman is smiling Fuel your cells for a supercharged life",
    category: "Longevity",
    colors: ["#FF783F", "#FF3232", "#FF3124", "#FF8A35", "#FF3124"]
  },
]
  return (
    <>
        <div className='text-center'>
            <h2 className='font-semibold text-sm text-gray-400'>Applications</h2>
            <h1 className='font-medium  text-2xl'>Start shaping your tomorrow</h1>
        </div>
        <div className='flex gap-10 justify-center mt-10 mb-20'>
            {
                cards.map(function(elem,key){
                    return  <ApplicationCard image={elem.image} title={elem.title} category={elem.category} key={key} color={elem.colors}/>
                    
                })
            }
        </div>
        <div className='flex justify-center mb-20'>
            <button className='flex  items-center gap-2 bg-black  text-white px-6 py-3 rounded-4xl font-medium hover:gap-6 transition-[gap] duration-400 cursor-pointer'>Explore All Applications <FaArrowRight /></button>
        </div>
    </>
  )
}

export default Section3