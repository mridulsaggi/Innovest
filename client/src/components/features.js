import React from 'react'
import "./features.css"
import { Link } from 'react-router-dom'
const Features = () => {
    return (

        <section className='feature-container !mt-24 ' > 
            <div class="container-fluid flex justify-between">
                <div class="container">
                    <div class="row hello">
                        <div class="col-sm-4 ji">
                            <div class="card text-center">
                                <div class="title">
                                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
                                    <h2>Basic</h2>
                                </div>
                                <div class="price">
                                    <h4><sup>$</sup>0</h4>
                                </div>
                                <div class="option">
                                    <ul>
                                        <li> <i class="fa fa-check" aria-hidden="true"></i> MARKETPLACE ACCESS</li>
                                        <li> <i class="fa fa-check" aria-hidden="true"></i> NO SHARKTANK FEATURE </li>
                                        <li> <i class="fa fa-check" aria-hidden="true"></i> 10+ ACESS TO BIZZGPT </li>
                                        <li> <i class="fa fa-times" aria-hidden="true"></i> ACCESS TO NEWS HEADLINE  </li>
                                    </ul>
                                </div>
                                <Link to="/home">Order Now </Link>
                            </div>
                        </div>

                        <div class="col-sm-4 ji">
                            <div class="card text-center">
                                <div class="title">
                                    <i class="fa fa-plane" aria-hidden="true"></i>
                                    <h2>Standard</h2>
                                </div>
                                <div class="price">
                                    <h4><sup>$</sup>50</h4>
                                </div>
                                <div class="option">
                                    <ul>
                                        <li> <i class="fa fa-check" aria-hidden="true"></i> MARKETPLACE ACCESS </li>
                                        <li> <i class="fa fa-check" aria-hidden="true"></i> ATTEND SHARK TANK EVENTS </li>
                                        <li> <i class="fa fa-times" aria-hidden="true"></i> ACCESS TO NEWS HEADLINE  </li>
                                        <li> <i class="fa fa-check" aria-hidden="true"></i> 50+ LIMITED ACCESS TO  BIZZGPT </li>
                                        
                                    </ul>
                                </div>
                                <Link to="/home">Order Now </Link>

                            </div>
                        </div>

                        <div class="col-sm-4 ji">
                            <div class="card text-center">
                                <div class="title">
                                    <i class="fa fa-rocket" aria-hidden="true"></i>
                                    <h2>Premium</h2>
                                </div>
                                <div class="price">
                                    <h4><sup>$</sup>100</h4>
                                </div>
                                <div class="option">
                                    <ul>
                                        <li> <i class="fa fa-check" aria-hidden="true"></i> MARKETPLACE ACCESS WITH FILTERS</li>
                                        <li> <i class="fa fa-check" aria-hidden="true"></i>ORGANIZE SHARK TANK </li>
                                        {/* <li> <i class="fa fa-times" aria-hidden="true"></i> ACCESS TO NEWS HEADLINE WITH FILTERS</li> */}
                                        <li> <i class="fa fa-check" aria-hidden="true"></i> UNLIMITED ACCESS TO  BIZZGPT</li>
                                        <li> <i class="fa fa-check" aria-hidden="true"></i> DASHBOARD ACESS</li>
                                    </ul>
                                </div>
                                <Link to="/home">Order Now </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
  )
}

export default Features
