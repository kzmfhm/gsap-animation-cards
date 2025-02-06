import React from 'react'

const Card = ({ card, index, selected }) => {
  return (
    <>
      {index === selected && (
        <div className="absolute w-screen h-screen top-0 left-0 flex justify-between">
          <div className="flex flex-col justify-around">
            <img className="w-40 rotate-12" src={card.bgImg} alt="" />
            <img className="w-72 rotate-45" src={card.bgImg} alt="" />
          </div>
          <div className="flex flex-col justify-around">
            <img className="w-36 rotate-[-90deg]" src={card.bgImg} alt="" />
            <img className="w-64 rotate-90" src={card.bgImg} alt="" />
          </div>
        </div>
      )}
      <div className='h-full relative'>
        <div className={`${card.bgCardColor} h-full rounded-xl flex items-center justify-center z-10 relative`}>
          <span className='text-white text-[1.5rem] absolute top-5 left-5'>{card.icon}</span>
          <h1 className={`${card.textColor} 
          ${selected === index ? "rotate-0 text-[6rem]" : "text-[2rem] rotate-90"} transition-all ease-in duration-[1000ms] font-bold`}>
            {card.title}</h1>
        </div>
        <img src={card.img} alt=""
          className={`img z-1 ${selected === index ? "opacity-100" : "opacity-0"} w-60 absolute top-0`} />
      </div>
    </>
  )
}

export default Card