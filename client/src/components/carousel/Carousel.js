import React from 'react'
import "./carousel.css"
import cam from "../images/market.jpg"
import judge from "../images/much.jpg"
import much from "../images/judge.jpg"
import market from "../images/thumb.jpg"
import camw from "../images/idea.jpg"
import thumb from "../images/cam.jpg";
import { Link } from 'react-router-dom'

const Carousel = () => {
    return (
        <div className='upparwala ' id="dashboard">
            <div className="carousel  carousel-center max-w-max mb-20 mx-6 p-4 space-x-4 bg-neutral rounded-box">
                <Link to="/marketplace" className="carousel-item">
                    <div className="hg">MARKETPLACE</div>
                    <img src={cam} className="rounded-box gg" />
                </Link>
                <Link to="/sharktank" className="carousel-item">
                    <div className="hg">SHARKTANK</div>
                    <img src={judge} className="rounded-box gg" />
                </Link>
                <Link to="/evaluate" className="carousel-item">
                    <div className="hg">EVALUATE IDEA</div>
                    <img src={much} className="rounded-box gg" />
                </Link>
                <Link to="/bizzgpt" className="carousel-item">
                    <div className="hg">BIZZGPT</div>
                    <img src={market} className="rounded-box gg" />
                </Link>
                {/* <Link to="/showcase" className="carousel-item">
                    <div className="hg">IDEA SHOWCASE</div>
                    <img src={camw} className="rounded-box gg" />
                </Link> */}
                <Link to="/news" className="carousel-item">
                    <div className="hg">NEWS</div>
                    <img src={thumb} className="rounded-box gg" />
                </Link>
                
            </div>
        </div>
    )
}

export default Carousel
