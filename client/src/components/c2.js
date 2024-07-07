import React from 'react'
import "./card.css"

import judge from "./images/much.jpg"
const Two = () => {
  return (
    <div>
      <div class="skill-card">
                    <header class="skill-card__header"><img class="skill-card__icon" src={judge} alt="HTML5 Logo" /></header>
                    <section class="skill-card__body">
                        <h2 class="skill-card__title">SharkTank</h2>
                        <ul class="skill-card__knowledge">
                            <li>Evaluate your startup </li>
                            <li>get detailed review</li>
                        </ul>
                    </section>
                </div>
    </div>
  )
}

export default Two
