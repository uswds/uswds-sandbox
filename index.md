---
layout: default
---

<main id="main-content">
  <!--
  Hero
  You'll need to use JS to swap the 1x/2x versions on screen size and DPI.
  You could also use inline responsive images with some styling applied to make it cover the entire area.
  -->
  <section class="usa-hero" aria-label="Introduction" style="background-image: url('assets/img/hero/covid19-1600x900.png');">
    <div class="grid-container">
      <div class="usa-hero__callout">
          <h1 class="usa-hero__heading">
              <span class="usa-hero__heading--alt">DHS 2020 Homeland Threat Assessment</span>
          </h1>
          <p>Report Synthesizes Threat Assessments Across DHS Including Intelligence and Operational Components</p>
          <a class="usa-button usa-button--outline usa-button--inverse" href="#">
            Call to action
          </a>
      </div>
    </div>
  </section>

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
            <h2>News &amp; Updates</h2>
            <!-- This would be replaced by the Featured Content component when it gets released. https://github.com/uswds/uswds/issues/3676 -->
            <ul class="usa-list usa-list--unstyled news-list">
              <li class="news-list__item">
                <div class="news-list__meta meta-info">
                  <time class="news-list__meta-item meta-info__date" datetime="2020-10-28T12:00:00+01:00">October 28 2020</time>
                  <div class="news-list__meta-item meta-info__category">
                    <a href="#">Press Release</a>
                  </div>
                </div>
                <h3 class="news-list__title"><a href="#">Joint DHS/EOIR Statement on MPP Rescheduling</a></h3>
              </li>
              <li class="news-list__item">
                <div class="news-list__meta meta-info">
                  <time class="news-list__meta-item meta-info__date" datetime="2020-10-28T12:00:00+01:00">October 28 2020</time>
                  <div class="news-list__meta-item meta-info__category">
                    <a href="#">Blog</a>
                  </div>
                </div>
                <h3 class="news-list__title"><a href="">Be Like Mike</a></h3>
              </li>
              <li class="news-list__item">
                <div class="news-list__meta meta-info">
                  <time class="news-list__meta-item meta-info__date" datetime="2020-10-28T12:00:00+01:00">October 28 2020</time>
                  <div class="news-list__meta-item meta-info__category">
                    <a href="#">Blog</a>
                  </div>
                </div>
                <h3 class="news-list__title"><a href="">DHS Responds: Ongoing Actions to Respond to the Coronavirus Pandemic</a></h3>
              </li>
              <li class="news-list__item">
                <div class="news-list__meta meta-info">
                  <time class="news-list__meta-item meta-info__date" datetime="2020-10-28T12:00:00+01:00">October 28 2020</time>
                  <div class="news-list__meta-item meta-info__category">
                    <a href="#">Press Release</a>
                  </div>
                </div>
                <h3 class="news-list__title"><a href="">Acting Secretary Chad Wolf Statement on the REAL ID Enforcement Deadline</a></h3>
              </li>
              <li class="news-list__item">
                <div class="news-list__meta meta-info">
                  <time class="news-list__meta-item meta-info__date" datetime="2020-10-28T12:00:00+01:00">October 28 2020</time>
                  <div class="news-list__meta-item meta-info__category">
                    <a href="#">Press Release</a>
                  </div>
                </div>
                <h3 class="news-list__title"><a href="">DHS Initiating Crucial Research to Mitigate COVID-19</a></h3>
              </li>
            </ul>
            <a href="#" class="usa-button">Show me more News & Updates</a>
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

  <!-- Cards -->
  <section id="card-articles" class="usa-section">
    <div class="grid-container">
      <ul class="usa-card-group usa-card-group--primary-bg">
        <li class="tablet:grid-col-6 desktop:grid-col-3 usa-card">
          <div class="usa-card__container">
            <header class="usa-card__header">
              <h2 class="usa-card__heading">
                <a href="#">Active Shooter Preparedness</a>
              </h2>
            </header>
            <div class="usa-card__media usa-card__media--exdent">
              <div class="usa-card__img">
                <!--
                  You should use responsive images for each breakpoint (mobile, tablet, and desktop). You can easily set these up in Drupal and it will handle responsive images for you.
                -->
                <img src="https://picsum.photos/211/150" alt="A placeholder image">
              </div>
            </div>
          </div>
        </li>
        <li class="tablet:grid-col-6 desktop:grid-col-3 usa-card">
          <div class="usa-card__container">
            <header class="usa-card__header">
              <h2 class="usa-card__heading">
                <a href="#">Coronavirus.gov</a>
              </h2>
            </header>
            <div class="usa-card__media usa-card__media--exdent">
              <div class="usa-card__img">
                <img src="https://picsum.photos/211/150" alt="A placeholder image">
              </div>
            </div>
          </div>
        </li>
        <li class="tablet:grid-col-6 desktop:grid-col-3 usa-card">
          <div class="usa-card__container">
            <header class="usa-card__header">
              <h2 class="usa-card__heading">
                <a href="#">Coronavirus.gov</a>
              </h2>
            </header>
            <div class="usa-card__media usa-card__media--exdent">
              <div class="usa-card__img">
                <img src="https://picsum.photos/211/150" alt="A placeholder image">
              </div>
            </div>
          </div>
        </li>
        <li class="tablet:grid-col-6 desktop:grid-col-3 usa-card">
          <div class="usa-card__container">
            <header class="usa-card__header">
              <h2 class="usa-card__heading">
                <a href="#">Coronavirus.gov</a>
              </h2>
            </header>
            <div class="usa-card__media usa-card__media--exdent">
              <div class="usa-card__img">
                <img src="https://picsum.photos/211/150" alt="A placeholder image">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</main>
