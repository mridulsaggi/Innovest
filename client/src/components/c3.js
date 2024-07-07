import React from 'react'
import much from "./images/judge.jpg"
import "./card.css"

const Three = () => {
  return (
    <div>
      <div class="skill-card">
        <header class="skill-card__header"><img class="skill-card__icon" src={much} alt="HTML5 Logo" /></header>
        <section class="skill-card__body">
          <h2 class="skill-card__title">Evaluate Idea</h2>
          <ul class="skill-card__knowledge">
            <li>list your ideas</li>
            <li>get fundings</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Three
