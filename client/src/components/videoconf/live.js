import React from 'react';
import { Link } from 'react-router-dom';
import './live.css'; // Import the local CSS file

const Live = () => {
  return (
    <div className='hehe'>
      <div className='flex justify-center text-2xl m-4 underline'>Live Events</div>
      <ol className='live-events-list'>
        <Link to="/video">
          <li>
            <div className="icon"><i className="fa-solid fa-bicycle"></i></div>
            <div className="title">SHARK TANK 1</div>
            <div className="descr">Luis Pillich</div>
          </li>
        </Link>
        <Link to="/video">
          <li>
            <div className="icon"><i className="fa-solid fa-car"></i></div>
            <div className="title">SHARK TANK 2</div>
            <div className="descr">Andrew Masotta</div>
          </li>
        </Link>
        <Link to="/video">
          <li>
            <div className="icon"><i className="fa-solid fa-helicopter"></i></div>
            <div className="title">SHARK TANK 3</div>
            <div className="descr">Michael Krakovsky</div>
          </li>
        </Link>
      </ol>
    </div>
  );
}

export default Live;
