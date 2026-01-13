import React from 'react'

const ApplicationCard = (props) => {
    const safeId = props.category.replaceAll(" ", "");
    const [hover, setHover] = React.useState(false);
  return (
    <div className='h-100 w-80 bg-blue-50  rounded-2xl flex flex-col justify-between' >
        <div>
            <img src={props.image} alt="app image" className='h-50 w-full object-cover rounded-2xl'/>
            <h2 className='p-4 text-gray-400 font-[480] text-sm'>{props.title}</h2>
        </div>
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="group m-8 border-2 border-gray-200 rounded-4xl p-4 flex gap-2 items-center cursor-pointer transition-all duration-000 ease-in-out hover:text-white"
            style={{
                backgroundImage: hover
                ? `linear-gradient(to right, ${props.color[0]}, ${props.color[1]}, ${props.color[2]})`
                : "none",
            }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" className="w-5 h-5 group-hover:opacity-0" fill="none">
                        <defs>
                            <radialGradient id={`g1-${safeId}`}>
                            <stop stopColor={props.color[0]} />
                            <stop offset="1" stopColor={props.color[1]} />
                            </radialGradient>

                            {props.color.length > 2 && (
                            <radialGradient id={`g2-${safeId}`}>
                                <stop stopColor={props.color[2]} />
                                <stop offset="0.45" stopColor={props.color[3] || props.color[2]} />
                                <stop offset="1" stopColor={props.color[4] || props.color[2]} />
                            </radialGradient>
                            )}
                        </defs>

                        <circle cx="10" cy="10" r="10" fill={`url(#g1-${safeId})`} />
                        {props.color.length > 2 && (
                            <circle cx="10" cy="10" r="10" fill={`url(#g2-${safeId})`} />
                        )}
                </svg>
                <p className="text-gray-500">{props.category}</p>
        </div>

    </div>
  )
}

export default ApplicationCard