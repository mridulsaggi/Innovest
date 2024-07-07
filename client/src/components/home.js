import { Link } from "react-router-dom";
import One from "./c1";
import Two from "./c2";
import Three from "./c3";
import Four from "./c4";
import Five from "./c5";
import Six from "./c6";
import hh from "./pic.png"
import Carousel from "./carousel/Carousel";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
function Hero() {
  const a=useRef(null);
  useEffect(()=>{
    const b=a.current;
    gsap.from(".ii ",{
      opacity:0,
      duration:3,
      delay:1,
      
    })
    gsap.from(".hero-content",{
      y:-500,
      opacity:0,
      duration:1
    })
    gsap.to(".scrollniche",{
      y:10,
      duration:1,
      repeat:-1,
      yoyo:true
    })
  },[])
  // gsap.from(".ii , .hero-content",{
  //   opacity:0,
  //   duration:2,
  //   delay:1
  // })
  gsap.to(".scrollniche",{
    y:10,
    duration:1,
    repeat:-1,
    yoyo:true
  })
  // var t1=gsap.timeline({scrollTrigger:{
  //   trigger:".hero",
    
  // }})
  
  // t1.to(".ii",{
  //   y:300,
  //   right:"20%"
  // })

  return (
    <div className="hero min-h-screen bg-base-200 flex ">
      <div className="kk"><img className="ii" src={hh}></img></div>
      <div className="hero-content text-center">
        <div className="max-w-screen">
          <h1 className="text-9xl font-bold">InnoVest</h1>
          <p className="py-6 text-2xl">Innovate - Invest - Inspire</p>
          <a className=" btn btn-outline btn-circle svg-icon" href="#dashboard">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="10"
              viewBox="0 0 320 512"
              className="scrollniche"
            >
              <path d="M2 334.5c-3.8 8.8-2 19 4.6 26l136 144c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5l136-144c6.6-7 8.4-17.2 4.6-26s-12.5-14.5-22-14.5l-72 0 0-288c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32l0 288-72 0c-9.6 0-18.2 5.7-22 14.5z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div id="a" className="p-10">
      <div className="flex w-full py-5">
        <Link
          to={"/marketplace"}
          className="flex-grow grid h-fit rounded-box place-items-center"
        >
          <One></One>
        </Link>
        <div className="divider divider-horizontal"></div>
        <Link
          to={"/sharktank"}
          className="flex-grow grid h-fit rounded-box place-items-center"
        >
          <Two></Two>
        </Link>
        <div className="divider divider-horizontal"></div>
        <Link
          to={"/evaluate"}
          className="flex-grow grid h-fit rounded-box place-items-center"
        >
          <Three></Three>
        </Link>
      </div>
      <div className="flex w-full py-5">
        <Link
          to={"/bizzgpt"}
          className="flex-grow grid h-fit rounded-box place-items-center"
        >
          <Four />
        </Link>
        <div className="divider divider-horizontal"></div>
        <Link
          to={"/showcase"}
          className="flex-grow grid h-fit rounded-box place-items-center"
        >
          <Five />
        </Link>
        <div className="divider divider-horizontal"></div>
        <Link
          to={"/news"}
          className="flex-grow grid h-fit rounded-box place-items-center"
        >
          <Six></Six>
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Carousel/>
    </div>
  );
}
