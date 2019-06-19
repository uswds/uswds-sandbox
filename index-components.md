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
              title="Our services"
              imageUrl="http://lorempixel.com/800/800/abstract/5"
              imageAlt="An abstract image"
              description="We provide long-term solutions for best-practice technology guidance backed up by user research."
              ctaText="Discover our services"
              ctaUrl="#"
        %}
      </div>
      <div class="mobile-lg:grid-col-6 desktop:grid-col-4">
        {%  include omg-card.html
              title="Our people"
              imageUrl="http://lorempixel.com/800/800/abstract/4"
              imageAlt="An abstract image"
              description="Our people are the foundation of our agency’s expertise."
              ctaStyle="usa-button--outline"
              ctaText="Meet our people"
              ctaUrl="#"
        %}
      </div>
      <div class="mobile-lg:grid-col-6 desktop:grid-col-4">
        {%  include omg-card.html
              title="Our principles"
              imageUrl="http://lorempixel.com/800/800/abstract/10"
              imageAlt="An abstract image"
              description="Our principles guide the decisions we make in support of reliable measurement and guidance."
              ctaStyle="usa-button--outline"
              ctaText="Meet our people"
              ctaUrl="#"
        %}
      </div>
    </div>
  </div>
</div>
