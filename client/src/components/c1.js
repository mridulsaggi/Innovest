import React from "react";
import "./card.css";
import cam from "./images/market.jpg"
const One = () => {
  return (
    <div>
      <div class="skill-card ">
        <header class="skill-card__header">
          <img class="skill-card__icon" src={cam} alt="HTML5 Logo" />
        </header>
        <section class="skill-card__body">
          <h2 class="skill-card__title">Marketplace</h2>
          <span class="skill-card__duration">One stop solution</span>
          <ul class="skill-card__knowledge">
            <li>list your ideas</li>
            <li>get fundings</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default One;
