---
layout: default
body: bg-ink
---

<section class="grid-container padding-bottom-6">
  <h1 class="text-white margin-bottom-0">Department of Design</h1>
  <h2 class="text-white text-light font-sans-xl margin-top-0 text-secondary-light">Suggest a new design standard</h2>

  <div class="usa-step-indicator usa-step-indicator--no-labels" aria-label="progress">
    <ol class="usa-step-indicator__segments">
      <li class="usa-step-indicator__segment usa-step-indicator__segment--complete">
        <span class="usa-step-indicator__segment-label">Personal information <span class="usa-sr-only">completed</span></span>
      </li>
      <li class="usa-step-indicator__segment usa-step-indicator__segment--complete">
        <span class="usa-step-indicator__segment-label">Household status <span class="usa-sr-only">completed</span></span>
      </li>
      <li class="usa-step-indicator__segment usa-step-indicator__segment--current" aria-current="true">
        <span class="usa-step-indicator__segment-label">Supporting documents </span>
      </li>
      <li class="usa-step-indicator__segment">
        <span class="usa-step-indicator__segment-label">Signature <span class="usa-sr-only">not completed</span></span>
      </li>
      <li class="usa-step-indicator__segment">
        <span class="usa-step-indicator__segment-label">Review and submit <span class="usa-sr-only">not completed</span></span>
      </li>
    </ol>
    <div class="usa-step-indicator__header">
      <h2 class="usa-step-indicator__heading">
        <span class="usa-sr-only">Step</span>
        <span class="usa-step-indicator__current-step">3</span>
        <span class="usa-step-indicator__total-steps">of 5</span>Supporting documents
      </h2>
    </div>
  </div>

<div class="padding-2 bg-secondary-lightest radius-lg width-tablet">
  <h3 class="margin-top-0">Add supporting documents</h3>
  <div class="usa-form-group">
    <label class="usa-label" for="file-input-rr">Add research reports in markdown format</label>
    <input id="file-input-rr"
      class="usa-file-input"
      type="file"
      name="file-input-rr"
      />
  </div>
  <div class="usa-form-group">
    <label class="usa-label" for="file-input-visual">Add visual design assets in any format available</label>
    <input id="file-input-visual"
      class="usa-file-input"
      type="file"
      name="file-input-visual"
      multiple
      />
  </div>

</div>

</section>

<div class="usa-identifier">
  <section
    class="usa-identifier__section usa-identifier__section--masthead"
    aria-label="Agency identifier">
    <div class="usa-identifier__container"><div class="usa-identifier__logos">
        <a href="javascript:void(0);" class="usa-identifier__logo">
          <img
            class="usa-identifier__logo-img"
            src="{{ site.baseurl }}/assets/uswds/img/circle-gray-20.svg"
            alt="&lt;Parent agency&gt; logo"
            role="img">
        </a></div><div class="usa-identifier__identity" aria-label="Agency description">
        <p class="usa-identifier__identity-domain">example.gov</p>
        <p class="usa-identifier__identity-disclaimer">An official website of the <a href="javascript:void(0);">Example Agency</a></p>
      </div>
    </div>
  </section>
  <nav class="usa-identifier__section usa-identifier__section--required-links" aria-label="Important links">
    <div class="usa-identifier__container">
      <ul class="usa-identifier__required-links-list">
        <li class="usa-identifier__required-links-item">
          <a href="javascript:void(0);" class="usa-identifier__required-link">About USEA</a>
        </li>
        <li class="usa-identifier__required-links-item">
          <a href="javascript:void(0);"
            class="usa-identifier__required-link">Accessibility support</a>
        </li>
        <li class="usa-identifier__required-links-item">
          <a href="javascript:void(0);"
            class="usa-identifier__required-link usa-link">FOIA requests</a>
        </li>
        <li class="usa-identifier__required-links-item">
          <a href="javascript:void(0);"
            class="usa-identifier__required-link usa-link">No FEAR Act data</a>
        </li>
        <li class="usa-identifier__required-links-item">
          <a href="javascript:void(0);" class="usa-identifier__required-link usa-link">Office of the Inspector General</a>
        </li>
        <li class="usa-identifier__required-links-item">
          <a href="javascript:void(0);" class="usa-identifier__required-link usa-link">Performance reports</a>
        </li>
        <li class="usa-identifier__required-links-item">
          <a href="javascript:void(0);" class="usa-identifier__required-link usa-link">Privacy policy</a>
        </li>
      </ul>
    </div>
  </nav>
  <section class="usa-identifier__section usa-identifier__section--usagov" aria-label="U.S. government information and services">
    <div class="usa-identifier__container">
      <div class="usa-identifier__usagov-description">Looking for U.S. government information and services?</div>
      <a href="https://www.usa.gov/" class="usa-link">Visit USA.gov</a>
    </div>
  </section>
</div>
