---
layout: default
---

<div class="padding-2">
  <div class="grid-container">
    <h1 class="omg-site-title">Office of Measurement and Guidance</h1>
    <p class="omg-site-dek">OMG card prototypes</p>
    <div class="grid-row grid-gap-2 flex-align-stretch">
      <div class="mobile-lg:grid-col-6 desktop:grid-col-4">
        {%  include omg-card.html
            title="Our people"
            imageUrl="http://lorempixel.com/800/800/abstract/5"
            imageAlt="An abstract image"
            description="Our people are the foundation of our agency’s expertise."
            ctaText="Meet our people"
            ctaUrl="#"
        %}
      </div>
      <div class="mobile-lg:grid-col-6 desktop:grid-col-4">
        <div class="omg-card bg-base-lightest padding-3 border-top-2px margin-top-3">
          <h2 class="omg-card__title font-sans-9 text-bold line-height-sans-2 margin-0">
            Our people
          </h2>
          <div class="margin-top-3 margin-x-neg-3">
            <div class="bg-base-light add-aspect-4x3">
              <img class="pin-all" src="http://lorempixel.com/400/400/abstract/4">
            </div>
          </div>
          <p class="omg-card__description minh-8 margin-top-3 font-sans-5 line-height-sans-3 margin-bottom-0">
            Our people are the foundation of our agency’s expertise.
          </p>
          <a class="usa-button usa-button--secondary omg-card__cta margin-top-3 width-full">Meet our people</a>
        </div>
      </div>
      <div class="mobile-lg:grid-col-6 desktop:grid-col-4">
        <div class="omg-card bg-base-lightest shadow-1 padding-3 border-top-2px margin-top-3">
          <h2 class="omg-card__title font-sans-9 text-bold line-height-sans-2 margin-0">
            Our principles
          </h2>
          <div class="margin-top-3 margin-x-neg-3">
            <div class="bg-base-light add-aspect-4x3">
              <img class="pin-all" src="http://lorempixel.com/400/400/abstract/10">
            </div>
          </div>
          <p class="omg-card__description minh-8 margin-top-3 font-sans-5 line-height-sans-3 margin-bottom-0">
            Our principles guide the decisions we make in support of reliable measurements and guidance.
          </p>
          <a class="usa-button usa-button--secondary omg-card__cta margin-top-3 width-full">Read our principles</a>
        </div>
      </div>
    </div>
  </div>
</div>
