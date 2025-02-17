import { FaAppleWhole } from "react-icons/fa6";
import apple from "./assets/apple.png";
import lemon from "./assets/lemon.png";
import berry from "./assets/berry.png";
import orange from "./assets/orange.png";
import { GiCutLemon } from "react-icons/gi";
import { GiStrawberry } from "react-icons/gi";
import { PiOrangeFill } from "react-icons/pi";
import Card from './components/Card';
import { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

function App() {
  const [selected, setSelected] = useState(0)
  const cardsRef = useRef([])
  const bg = useRef()
  cardsRef.current = []
  const cards = [
    {
      title: "APPLE",
      bgCardColor: "bg-[#CC1918]",
      bgColor: "#ff7070",
      textColor: "text-white",
      icon: <FaAppleWhole />,
      img: apple,
      bgImg: apple,
    },
    {
      title: "LEMON",
      bgCardColor: "bg-[#fdff8f]",
      bgColor: "#f7e35b",
      textColor: "text-[#85822d]",
      icon: <GiCutLemon color='black' />,
      img: lemon,
      bgImg: lemon,
    },
    {
      title: "BERRY",
      bgCardColor: "bg-[#ff2557]",
      bgColor: "#ff6286",
      textColor: "text-white",
      icon: <GiStrawberry />,
      img: berry,
      bgImg: berry,
    },
    {
      title: "ORANGE",
      bgCardColor: "bg-[#ffba36]",
      bgColor: "#f4a308",
      textColor: "text-white",
      icon: <PiOrangeFill />,
      img: orange,
      bgImg: orange,
    },
  ]
  const handleClick = (key) => {
    console.log(key);
    setSelected(key)
  }
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (bg.current && cards[selected]) {
        gsap.to(bg.current, {
          backgroundColor: cards[selected].bgColor,
          duration: 2,
          ease: "linear",
        });
        gsap.to(".img", {
          top: "-140px",
          delay: 0.7,
          duration: 1,
        })
      }
    });
    return () => ctx.revert();
  }, [selected]);

  const addToRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }
  return (
    <div ref={bg} className="h-screen items-center flex justify-center">
      {cards.map((card, key) => {
        return (
          <div
            ref={addToRef}
            key={key}
            className={`card-${key} ${key === selected ? "w-[500px]" : "w-20"} 
              h-96 cursor-pointer transition-all ease-in-out duration-[1000ms]`}
            onClick={() => handleClick(key)}>
            <Card card={card} selected={selected} index={key} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
