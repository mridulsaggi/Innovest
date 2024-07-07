import React from 'react'
import "./card.css"
import cam from "./images/idea.jpg"
const Five = () => {
  return (
    <div>
      <div class="skill-card">
                    <header class="skill-card__header"><img class="skill-card__icon" src={cam} alt="HTML5 Logo" /></header>
                    <section class="skill-card__body">
                        <h2 class="skill-card__title">Idea Showcase</h2>
                        <ul class="skill-card__knowledge">
                            <li>list the hackathon ideas</li>
                            <li>implement them with proper guidance</li>
                        </ul>
                    </section>
                </div>
    </div>
  )
}

export default Five
