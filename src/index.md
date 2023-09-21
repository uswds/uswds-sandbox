---
layout: default
title: Hi
body:
---

<body>
  <a class="usa-skipnav" href="#main-content">Skip to main content</a>
  <section
    class="usa-banner"
    aria-label="Official website of the United States government"
  >
    <div class="usa-accordion">
      <header class="usa-banner__header">
        <div class="usa-banner__inner">
          <div class="grid-col-auto">
            <img
              aria-hidden="true"
              class="usa-banner__header-flag"
              src="/assets/img/us_flag_small.png"
              alt=""
            />
          </div>
          <div class="grid-col-fill tablet:grid-col-auto" aria-hidden="true">
            <p class="usa-banner__header-text">
              An official website of the United States government
            </p>
            <p class="usa-banner__header-action">Here’s how you know</p>
          </div>
          <button
            type="button"
            class="usa-accordion__button usa-banner__button"
            aria-expanded="false"
            aria-controls="gov-banner-default"
          >
            <span class="usa-banner__button-text">Here’s how you know</span>
          </button>
        </div>
      </header>
      <div
        class="usa-banner__content usa-accordion__content"
        id="gov-banner-default"
      >
        <div class="grid-row grid-gap-lg">
          <div class="usa-banner__guidance tablet:grid-col-6">
            <img
              class="usa-banner__icon usa-media-block__img"
              src="/assets/img/icon-dot-gov.svg"
              role="img"
              alt=""
              aria-hidden="true"
            />
            <div class="usa-media-block__body">
              <p>
                <strong>Official websites use .gov</strong><br />A
                <strong>.gov</strong> website belongs to an official government
                organization in the United States.
              </p>
            </div>
          </div>
          <div class="usa-banner__guidance tablet:grid-col-6">
            <img
              class="usa-banner__icon usa-media-block__img"
              src="/assets/img/icon-https.svg"
              role="img"
              alt=""
              aria-hidden="true"
            />
            <div class="usa-media-block__body">
              <p>
                <strong>Secure .gov websites use HTTPS</strong><br />A
                <strong>lock</strong> (
                <span class="icon-lock"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="64"
                    viewBox="0 0 52 64"
                    class="usa-banner__lock-image"
                    role="img"
                    aria-labelledby="banner-lock-description"
                    focusable="false"
                  >
                    <title id="banner-lock-title">Lock</title>
                    <desc id="banner-lock-description">
                      Locked padlock icon
                    </desc>
                    <path
                      fill="#000000"
                      fill-rule="evenodd"
                      d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
                    />
                  </svg> </span
                >) or <strong>https://</strong> means you’ve safely connected to
                the .gov website. Share sensitive information only on official,
                secure websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="usa-overlay"></div>
  <header class="usa-header usa-header--basic">
    <div class="usa-nav-container">
      <div class="usa-navbar">
        <div class="usa-logo">
          <em class="usa-logo__text"
            ><a href="/" title="<Project title>">&lt;Project title&gt;</a></em
          >
        </div>
        <button type="button" class="usa-menu-btn">Menu</button>
      </div>
      <nav aria-label="Primary navigation," class="usa-nav">
        <button type="button" class="usa-nav__close">
          <img src="/assets/img/usa-icons/close.svg" role="img" alt="Close" />
        </button>
        <ul class="usa-nav__primary usa-accordion">
          <li class="usa-nav__primary-item">
            <button
              type="button"
              class="usa-accordion__button usa-nav__link usa-current"
              aria-expanded="false"
              aria-controls="basic-nav-section-one"
            >
              <span>Accordion link</span>
            </button>
            <ul id="basic-nav-section-one" class="usa-nav__submenu">
              <li class="usa-nav__submenu-item">
                <a href="#section-heading-h2"
                  ><span>Section heading (h2)</span></a
                >
              </li>
              <li class="usa-nav__submenu-item">
                <a href="#section-heading-h3"
                  ><span>Section heading (h3)</span></a
                >
              </li>
              <li class="usa-nav__submenu-item">
                <a href="#section-heading-h4"
                  ><span>Section heading (h4)</span></a
                >
              </li>
              <li class="usa-nav__submenu-item">
                <a href="./pages/page2"
                  ><span>Nested page lin</span></a
                >
              </li>
            </ul>
          </li>
          <li class="usa-nav__primary-item">
            <a href="./pages/page2" class="usa-nav-link"
              ><span>Page link</span></a
            >
          </li>
          <li class="usa-nav__primary-item">
            <a href="https://designsystem.digital.gov/" class="usa-nav-link"
              ><span>External link</span></a
            >
          </li>
        </ul>
        <section aria-label="Search component">
          <form class="usa-search usa-search--small" role="search">
            <label class="usa-sr-only" for="search-field">Search</label>
            <input
              class="usa-input"
              id="search-field"
              type="search"
              name="search"
            />
            <button class="usa-button" type="submit">
              <img
                src="/assets/img/usa-icons-bg/search--white.svg"
                class="usa-search__submit-icon"
                alt="Search"
              />
            </button>
          </form>
        </section>
      </nav>
    </div>
  </header>
  <div class="usa-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <main
          class="
            usa-layout-docs__main
            desktop:grid-col-9
            usa-prose usa-layout-docs
          "
          id="main-content"
        >
          <h1>Page heading (h1)</h1>
          <p class="usa-intro">
            The page heading communicates the main focus of the page. Make your
            page heading descriptive and keep it succinct.
          </p>
          <h2 id="section-heading-h2">Section heading (h2)</h2>
          <p>
            These headings introduce, respectively, sections and subsections
            within your body copy. As you create these headings, follow the same
            guidelines that you use when writing section headings: Be succinct,
            descriptive, and precise.
          </p>
          <h3 id="section-heading-h3">Subsection heading (h3)</h3>
          <p>
            The particulars of your body copy will be determined by the topic of
            your page. Regardless of topic, it’s a good practice to follow the
            inverted pyramid structure when writing copy: Begin with the
            information that’s most important to your users and then present
            information of less importance.
          </p>
          <p>
            Keep each section and subsection focused — a good approach is to
            include one theme (topic) per section.
          </p>
          <h4 id="section-heading-h4">Subsection heading (h4)</h4>
          <p>
            Use the side navigation menu to help your users quickly skip to
            different sections of your page. The menu is best suited to
            displaying a hierarchy with one to three levels and, as we
            mentioned, to display the sub-navigation of a given page.
          </p>
          <p>
            Read the full documentation on our side navigation on the component
            page.
          </p>
        </main>
      </div>
    </div>
  </div>
  <footer class="usa-footer">
    <div class="grid-container usa-footer__return-to-top">
      <a href="#">Return to top</a>
    </div>
    <div class="usa-footer__primary-section">
      <nav class="usa-footer__nav" aria-label="Footer navigation">
        <ul class="grid-row grid-gap">
          <li
            class="
              mobile-lg:grid-col-4
              desktop:grid-col-auto
              usa-footer__primary-content
            "
          >
            <a class="usa-footer__primary-link" href="javascript:void(0);"
              >&lt;Primary link&gt;</a
            >
          </li>
          <li
            class="
              mobile-lg:grid-col-4
              desktop:grid-col-auto
              usa-footer__primary-content
            "
          >
            <a class="usa-footer__primary-link" href="javascript:void(0);"
              >&lt;Primary link&gt;</a
            >
          </li>
          <li
            class="
              mobile-lg:grid-col-4
              desktop:grid-col-auto
              usa-footer__primary-content
            "
          >
            <a class="usa-footer__primary-link" href="javascript:void(0);"
              >&lt;Primary link&gt;</a
            >
          </li>
          <li
            class="
              mobile-lg:grid-col-4
              desktop:grid-col-auto
              usa-footer__primary-content
            "
          >
            <a class="usa-footer__primary-link" href="javascript:void(0);"
              >&lt;Primary link&gt;</a
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="usa-footer__secondary-section">
      <div class="grid-container">
        <div class="grid-row grid-gap">
          <div
            class="
              usa-footer__logo
              grid-row
              mobile-lg:grid-col-6 mobile-lg:grid-gap-2
            "
          >
            <div class="mobile-lg:grid-col-auto">
              <img
                class="usa-footer__logo-img"
                src="/assets/img/logo-img.png"
                alt=""
              />
            </div>
            <div class="mobile-lg:grid-col-auto">
              <p class="usa-footer__logo-heading">&lt;Name of Agency&gt;</p>
            </div>
          </div>
          <div class="usa-footer__contact-links mobile-lg:grid-col-6">
            <div class="usa-footer__social-links grid-row grid-gap-1">
              <div class="grid-col-auto">
                <a class="usa-social-link" href="javascript:void(0);"
                  ><img
                    class="usa-social-link__icon"
                    src="/assets/img/usa-icons/facebook.svg"
                    alt="Facebook"
                /></a>
              </div>
              <div class="grid-col-auto">
                <a class="usa-social-link" href="javascript:void(0);"
                  ><img
                    class="usa-social-link__icon"
                    src="/assets/img/usa-icons/twitter.svg"
                    alt="Twitter"
                /></a>
              </div>
              <div class="grid-col-auto">
                <a class="usa-social-link" href="javascript:void(0);"
                  ><img
                    class="usa-social-link__icon"
                    src="/assets/img/usa-icons/youtube.svg"
                    alt="YouTube"
                /></a>
              </div>
              <div class="grid-col-auto">
                <a class="usa-social-link" href="javascript:void(0);"
                  ><img
                    class="usa-social-link__icon"
                    src="/assets/img/usa-icons/instagram.svg"
                    alt="Instagram"
                /></a>
              </div>
              <div class="grid-col-auto">
                <a class="usa-social-link" href="javascript:void(0);"
                  ><img
                    class="usa-social-link__icon"
                    src="/assets/img/usa-icons/rss_feed.svg"
                    alt="RSS"
                /></a>
              </div>
            </div>
            <p class="usa-footer__contact-heading">
              &lt;Agency Contact Center&gt;
            </p>
            <address class="usa-footer__address">
              <div class="usa-footer__contact-info grid-row grid-gap">
                <div class="grid-col-auto">
                  <a href="tel:1-800-555-5555">&lt;(800) 555-GOVT&gt;</a>
                </div>
                <div class="grid-col-auto">
                  <a href="mailto:info@agency.gov">&lt;info@agency.gov&gt;</a>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="usa-identifier">
    <section
      class="usa-identifier__section usa-identifier__section--masthead"
      aria-label="Agency identifier"
    >
      <div class="usa-identifier__container">
        <div class="usa-identifier__logos">
          <a href="javascript:void(0)" class="usa-identifier__logo"
            ><img
              class="usa-identifier__logo-img"
              src="/assets/img/circle-gray-20.svg"
              alt="&lt;Parent agency&gt; logo"
              role="img"
          /></a>
        </div>
        <section
          class="usa-identifier__identity"
          aria-label="Agency description"
        >
          <p class="usa-identifier__identity-domain">domain.gov</p>
          <p class="usa-identifier__identity-disclaimer">
            An official website of the <a href="">&lt;Parent agency&gt;</a>
          </p>
        </section>
      </div>
    </section>
    <nav
      class="usa-identifier__section usa-identifier__section--required-links"
      aria-label="Important links"
    >
      <div class="usa-identifier__container">
        <ul class="usa-identifier__required-links-list">
          <li class="usa-identifier__required-links-item">
            <a
              href="javascript:void(0)"
              class="usa-identifier__required-link usa-link"
              >About &lt;Parent shortname&gt;</a
            >
          </li>
          <li class="usa-identifier__required-links-item">
            <a href="" class="usa-identifier__required-link usa-link"
              >Accessibility support</a
            >
          </li>
          <li class="usa-identifier__required-links-item">
            <a href="" class="usa-identifier__required-link usa-link"
              >FOIA requests</a
            >
          </li>
          <li class="usa-identifier__required-links-item">
            <a href="" class="usa-identifier__required-link usa-link"
              >No FEAR Act data</a
            >
          </li>
          <li class="usa-identifier__required-links-item">
            <a href="" class="usa-identifier__required-link usa-link"
              >Office of the Inspector General</a
            >
          </li>
          <li class="usa-identifier__required-links-item">
            <a href="" class="usa-identifier__required-link usa-link"
              >Performance reports</a
            >
          </li>
          <li class="usa-identifier__required-links-item">
            <a href="" class="usa-identifier__required-link usa-link"
              >Privacy policy</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <section
      class="usa-identifier__section usa-identifier__section--usagov"
      aria-label="U.S. government information and services"
    >
      <div class="usa-identifier__container">
        <div class="usa-identifier__usagov-description">
          Looking for U.S. government information and services?
        </div>
        <a href="https://www.usa.gov/" class="usa-link">Visit USA.gov</a>
      </div>
    </section>
  </div>
</body>