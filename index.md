---
layout: default
---

<main id="main-content">
  {% include hero.html %}

  <!-- Latest news cards -->
  <section id="news" aria-label="Latest news" class="usa-section">
    <div class="grid-container">
      <ul class="usa-card-group">
        <li class="tablet:grid-col-6 usa-card">
          <div class="usa-card__container">
            <header class="usa-card__header">
              <h2 class="usa-card__heading">
                National Cybersecurity Awareness Month
              </h2>
            </header>
            <div class="usa-card__media">
              <div class="usa-card__img">
                <img src="https://picsum.photos/462/228" alt="A placeholder image">
              </div>
            </div>
            <div class="usa-card__footer">
              <button class="usa-button">Call to action</button>
            </div>
          </div>
        </li>
        <li class="tablet:grid-col-6 usa-card">
          <div class="usa-card__container">
            <header class="usa-card__header">
              <h2 class="usa-card__heading">
                DHS Responds: Coronavirus (COVID-19)
              </h2>
            </header>
            <div class="usa-card__media">
              <div class="usa-card__img">
                <img src="https://picsum.photos/462/228" alt="A placeholder image">
              </div>
            </div>
            <div class="usa-card__footer">
              <button class="usa-button">Call to action</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <!-- News & Updates + Social Media -->
  <div class="usa-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-7">
          <section id="news-updates">
            {% include news-and-updates.html %}
          </section>
        </div>
        <div class="tablet:grid-col-5">
          <section id="social-media">
            <h2>Social Media</h2>
            <div class="usa-embed-container add-aspect-9x16">
              <a class="twitter-timeline" href="https://twitter.com/DHSgov/lists/dhs-twitter-accounts?ref_src=twsrc%5Etfw"> Tweets from https://twitter.com/DHSgov/lists/dhs-twitter-accounts </a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>

  {% include card-bg-primary.html %}
</main>
