---
layout: default
body: bg-ink
---

{% include banner.html %}

<section class="grid-container padding-bottom-6">
  {% include header.html %}

  <div class="usa-step-indicator usa-step-indicator--counters" aria-label="progress">
    <ol class="usa-step-indicator__segments">
      <li class="usa-step-indicator__segment usa-step-indicator__segment--complete">
        <span class="usa-step-indicator__segment-label">Personal information <span class="usa-sr-only">completed</span></span>
      </li>
      <li class="usa-step-indicator__segment usa-step-indicator__segment--complete">
        <span class="usa-step-indicator__segment-label">Token description <span class="usa-sr-only">completed</span></span>
      </li>
      <li class="usa-step-indicator__segment usa-step-indicator__segment--complete" aria-current="true">
        <span class="usa-step-indicator__segment-label">Supporting documentation <span class="usa-sr-only">completed</span></span>
      </li>
      <li class="usa-step-indicator__segment usa-step-indicator__segment--current">
        <span class="usa-step-indicator__segment-label">Signature</span>
      </li>
      <li class="usa-step-indicator__segment">
        <span class="usa-step-indicator__segment-label">Finalize <span class="usa-sr-only">not completed</span></span>
      </li>
      <!--
      <li class="usa-step-indicator__segment">
        <span class="usa-step-indicator__segment-label">Review and submit <span class="usa-sr-only">not completed</span></span>
      </li>
      <li class="usa-step-indicator__segment">
        <span class="usa-step-indicator__segment-label">Feedback <span class="usa-sr-only">not completed</span></span>
      </li>
      -->
    </ol>
    <div class="usa-step-indicator__header">
      <h2 class="usa-step-indicator__heading">
        <span class="usa-step-indicator__heading-counter">
          <span class="usa-sr-only">Step</span>
          <span class="usa-step-indicator__current-step">4</span>
          <span class="usa-step-indicator__total-steps">of 5</span>
        </span>
        <span class="usa-step-indicator__heading-text">Signature</span>
      </h2>
    </div>
  </div>

  <div class="padding-x-3 padding-y-5 bg-secondary-lightest radius-lg maxw-tablet">
    <form class="usa-form maxw-none">
      <label class="usa-label margin-top-0" for="input-type-textarea">Add your signature into the box below with an e-pencil</label>
      <div class="usa-hint" id="appointment-time-hint">Use only verified e-pencils</div>
      <textarea class="usa-textarea" id="input-type-textarea" name="input-type-textarea"></textarea>
    </form>
  </div>

  <ul class="usa-button-group margin-top-3">
    <li class="usa-button-group__item">
      <a href="{{ site.baseurl }}/" class="usa-button usa-button--inverse usa-button--outline">Back</a>
    </li>
    <li class="usa-button-group__item">
      <a href="{{ site.baseurl }}" class="usa-button ">Continue</a>
    </li>
  </ul>
</section>

{% include identifier.html %}
