import React from 'react'
import Sectionheader from '../../components/Sectionheader'
import Benifitscard from './Benifitscard'

const Section5 = (props) => {
const benefitsData = [
  {
    id: 1,
    image:"https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/674033244546d6ee0abb7478_Frame%202087331480-2.webp",
    title: "Optimized Female Health",
    subtitle: "Red light therapy can effectively support your fertility in the long-term.",
    stats: {
      uterineBloodFlow: "Optimal",
      PI: 0.65,
      RI: 0.55,
      SD: 2.3,
    },
    description:
      "By increasing blood flow, supporting tissue regeneration and balancing hormones, CellLight™ supports your uterus and ovaries naturally.",
    points: [
      "Promotes healthy tissue",
      "Balances your hormones",
    ],
    imageAlt: "A young girl holding a small child",
  },

  {
    id: 2,
    image:"https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/67403324759d4ba06050c510_Frame%202087331480-1.webp",
    title: "Enhanced Deep Sleep",
    subtitle: "Red light therapy can effectively support your fertility in the long-term.",
    stats: {
      deepSleepScore: "Optimal",
      sleepEfficiency: "Optimal",
    },
    description:
      "Near-infrared light enhances mitochondrial function in neurons, helping improve deep sleep. CellLight™ will not disturb your natural sleep-wake cycle and melatonin production.",
    points: [
      "Longer deep sleep",
      "Enhanced neuronal function",
      "Balances sleep hormone secretion",
    ],
    imageAlt: "Man sleeping",
  },

  {
    id: 3,
    image:"https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/67409518627cee8a92540085_face.webp",
    subtitle: "Red light therapy can effectively support your fertility in the long-term.",
    title: "Youthful Skin",
    stats: {
      skinGlow: true,
      skinFirmness: true,
      skinToneEvenness: true,
    },
    description:
      "CellLight™ accelerates cellular repair and stem cell proliferation, leading to higher natural collagen and elastin production. This results in youthful, glowing and clear skin.",
    points: [
      "Accelerated cellular repair",
      "Non-invasively stimulated skin cell proliferation",
      "More natural collagen and elastin",
    ],
    imageAlt: "Young woman smiling",
  },

  {
    id: 4,
    image:"https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/674033242fdd7bd921085f15_Frame%202087331480.webp",
    subtitle: "Red light therapy can effectively support your fertility in the long-term.",
    title: "Extended Longevity",
    stats: {
      biologicalAge: 49,
      chronologicalAge: 52,
      unit: "years",
    },
    description:
      "CellLight™ helps mitochondria produce more energy (ATP), supporting long-term health and protecting against chronic conditions. Increasing cellular energy improves both lifespan and healthspan.",
    points: [
      "Improved cellular energy production",
      "Better functioning mitochondria",
      "Reduced aging velocity",
    ],
    imageAlt: "Athletic girl smiling",
  },

  {
    id: 5,
    image:"https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6740332425a33e3de6ea9d44_Frame%202087331482.webp",
    subtitle: "Red light therapy can effectively support your fertility in the long-term.",
    title: "Boosted Mental & Physical Resilience",
    stats: {
      heartRateVariability: 152,
      status: "Energetic",
    },
    description:
      "Studies show consistent use of CellLight™ improves HRV and reduces oxidative stress. Higher HRV reflects better mental and physical resilience and helps slow aging and prevent chronic diseases.",
    points: [
      "Reduced oxidative stress",
      "Higher HRV",
    ],
    imageAlt: "Man running on treadmill",
  },
]
  return (
    <>
      <Sectionheader title={props.title} subtitle={props.subtitle}/>
      <div className='flex  flex-col gap-3 pt-10 items-center  '>
          {benefitsData.map(function(elem,key){
            return <div key={key}><Benifitscard img={elem.image} altimg={elem.imageAlt} title={elem.title} subtitle={elem.subtitle} des={elem.description} points={elem.points}/></div>
          })}  
      </div>
      
    </>
  )
}

export default Section5