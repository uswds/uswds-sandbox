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
      <li class="usa-step-indicator__segment usa-step-indicator__segment--current" aria-current="true">
        <span class="usa-step-indicator__segment-label">Supporting documentation</span>
      </li>
      <li class="usa-step-indicator__segment">
        <span class="usa-step-indicator__segment-label">Signature <span class="usa-sr-only">not completed</span></span>
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
          <span class="usa-step-indicator__current-step">3</span>
          <span class="usa-step-indicator__total-steps">of 5</span>
        </span>
        <span class="usa-step-indicator__heading-text">Supporting documentation</span>
      </h2>
    </div>
  </div>

  <div class="padding-x-3 padding-y-5 bg-secondary-lightest radius-lg maxw-tablet">
    <form class="usa-form maxw-none">
      <div class="usa-form-group maxw-mobile">
        <label class="usa-label margin-top-0" id="appointment-date-label" for="appointment-date">Token research session date</label>
        <div class="usa-hint" id="appointment-date-hint">Use mm/dd/yyyy format</div>
        <div class="usa-date-picker">
          <input
            class="usa-input"
            id="appointment-date"
            name="appointment-date"
            type="text"
            aria-describedby="appointment-date-label appointment-date-hint">
        </div>
      </div>
      <div class="usa-form-group">
        <label class="usa-label" id="appointment-time-label" for="appointment-time">Approximate token research session time</label>
        <div class="usa-hint" id="appointment-time-hint">Use hh:mm format</div>
        <div class="usa-time-picker" data-step="60" disabled>
          <input class="usa-input" id="appointment-time" name="appointment-time" type="text" aria-describedby="appointment-time-label appointment-time-hint">
        </div>
      </div>
      <div class="usa-form-group">
        <label class="usa-label" for="file-input-rr">Add research reports in markdown format</label>
        <input id="file-input-rr"
          class="usa-file-input"
          type="file"
          name="file-input-rr"
          />
      </div>
      <div class="usa-form-group">
        <label class="usa-label" for="file-input-visual">Add any visual design assets</label>
        <input id="file-input-visual"
          class="usa-file-input"
          type="file"
          name="file-input-visual"
          multiple
          />
      </div>
      <label class="usa-label" for="fruit">Finally, select the fruit that best describes your research results</label>
      <div class="usa-combo-box">
        <select
          class="usa-select"
          name="fruit"
          id="fruit">
          <option value>Select a fruit</option>
          <option value="apple">Apple</option>
          <option value="apricot">Apricot</option>
          <option value="avocado">Avocado</option>
          <option value="banana">Banana</option>
          <option value="blackberry">Blackberry</option>
          <option value="blood orange">Blood orange</option>
          <option value="blueberry">Blueberry</option>
          <option value="boysenberry">Boysenberry</option>
          <option value="breadfruit">Breadfruit</option>
          <option value="buddhas hand citron">Buddha's hand citron</option>
          <option value="cantaloupe">Cantaloupe</option>
          <option value="clementine">Clementine</option>
          <option value="crab apple">Crab apple</option>
          <option value="currant">Currant</option>
          <option value="cherry">Cherry</option>
          <option value="custard apple">Custard apple</option>
          <option value="coconut">Coconut</option>
          <option value="cranberry">Cranberry</option>
          <option value="date">Date</option>
          <option value="dragonfruit">Dragonfruit</option>
          <option value="durian">Durian</option>
          <option value="elderberry">Elderberry</option>
          <option value="fig">Fig</option>
          <option value="gooseberry">Gooseberry</option>
          <option value="grape">Grape</option>
          <option value="grapefruit">Grapefruit</option>
          <option value="guava">Guava</option>
          <option value="honeydew melon">Honeydew melon</option>
          <option value="jackfruit">Jackfruit</option>
          <option value="kiwifruit">Kiwifruit</option>
          <option value="kumquat">Kumquat</option>
          <option value="lemon">Lemon</option>
          <option value="lime">Lime</option>
          <option value="lychee">Lychee</option>
          <option value="mandarine">Mandarine</option>
          <option value="mango">Mango</option>
          <option value="mangosteen">Mangosteen</option>
          <option value="marionberry">Marionberry</option>
          <option value="nectarine">Nectarine</option>
          <option value="orange">Orange</option>
          <option value="papaya">Papaya</option>
          <option value="passionfruit">Passionfruit</option>
          <option value="peach">Peach</option>
          <option value="pear">Pear</option>
          <option value="persimmon">Persimmon</option>
          <option value="plantain">Plantain</option>
          <option value="plum">Plum</option>
          <option value="pineapple">Pineapple</option>
          <option value="pluot">Pluot</option>
          <option value="pomegranate">Pomegranate</option>
          <option value="pomelo">Pomelo</option>
          <option value="quince">Quince</option>
          <option value="raspberry">Raspberry</option>
          <option value="rambutan">Rambutan</option>
          <option value="soursop">Soursop</option>
          <option value="starfruit">Starfruit</option>
          <option value="strawberry">Strawberry</option>
          <option value="tamarind">Tamarind</option>
          <option value="tangelo">Tangelo</option>
          <option value="tangerine">Tangerine</option>
          <option value="ugli fruit">Ugli fruit</option>
          <option value="watermelon">Watermelon</option>
          <option value="white currant">White currant</option>
          <option value="yuzu">Yuzu</option>
        </select>
      </div>
    </form>
  </div>

  <ul class="usa-button-group margin-top-3">
    <li class="usa-button-group__item">
      <a href="{{ site.baseurl }}" class="usa-button usa-button--inverse usa-button--outline">Back</a>
    </li>
    <li class="usa-button-group__item">
      <a href="{{ site.baseurl }}/signature.html" class="usa-button ">Continue</a>
    </li>
  </ul>

</section>

{% include identifier.html %}
