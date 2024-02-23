---
layout: nps-form
title: Same day reservations at Purplestone National Park
body:
---

<form class="usa-form usa-form--large" onsubmit="return validateForm()">

A red asterisk (<abbr title="required" class="usa-hint usa-hint--required">*</abbr>) indicates a required field.

You must be at least 18 years old to reserve an activity.

{% include "memorable-date.html" %}
{% include "radio--activities.html" %}
{% include "time-picker.html" %}

<!-- <input id="agree" type="radio" name="conduct" value="agree" required>
<label for="agree">
  I agree
</label>
<input id="disagree" type="radio" name="conduct" value="disagree" required>
<label for="disagree">
  I DO NOT agree (you will not be able to reserve if so)
</label> -->

<div class="usa-radio">
  <input class="usa-radio__input" id="agree" type="radio" name="conduct2" value="agree" required>
  <label class="usa-radio__label" for="agree">
    I agree
  </label>
</div>
<div class="usa-radio">
  <input class="usa-radio__input" id="disagree" type="radio" name="conduct2" value="disagree" required>
  <label class="usa-radio__label" for="disagree">
    I DO NOT agree (you will not be able to reserve if so)
  </label>
</div>
{% include "input--submit.html" %}
</form>
