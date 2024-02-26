---
layout: nps-form
title: Same day reservations at Purplestone National Park
body:
---

<form class="usa-form usa-form--large" onsubmit="return validateForm()">
  A red asterisk (<abbr title="required" class="usa-hint usa-hint--required">*</abbr>) indicates a required field.

  You must be at least 18 years old to reserve an activity.

  <!--start memorable date-->
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">
      What is your date of birth?
      <abbr title="required" class="usa-hint usa-hint--required">*</abbr>
    </legend>
    <span class="usa-hint" id="mdHint">For example: January 19 2000</span>
    <div class="usa-memorable-date">
      <div class="usa-form-group usa-form-group--month usa-form-group--select">
        <label class="usa-label" for="date_of_birth_month">Month</label>
        <select
          class="usa-select"
          id="date_of_birth_month"
          name="date_of_birth_month"
          aria-describedby="mdHint"
          required
        >
          <option value>- Select -</option>
          <option value="1">01 - January</option>
          <option value="2">02 - February</option>
          <option value="3">03 - March</option>
          <option value="4">04 - April</option>
          <option value="5">05 - May</option>
          <option value="6">06 - June</option>
          <option value="7">07 - July</option>
          <option value="8">08 - August</option>
          <option value="9">09 - September</option>
          <option value="10">10 - October</option>
          <option value="11">11 - November</option>
          <option value="12">12 - December</option>
        </select>
      </div>
      <div class="usa-form-group usa-form-group--day">
        <label class="usa-label" for="date_of_birth_day">Day</label>
        <input
          class="usa-input"
          aria-describedby="mdHint"
          id="date_of_birth_day"
          name="date_of_birth_day"
          maxlength="2"
          pattern="[0-9]*"
          inputmode="numeric"
          value=""
          required
        />
      </div>
      <div class="usa-form-group usa-form-group--year">
        <label class="usa-label" for="date_of_birth_year">Year</label>
        <input
          class="usa-input"
          aria-describedby="mdHint"
          id="date_of_birth_year"
          name="date_of_birth_year"
          minlength="4"
          maxlength="4"
          pattern="[0-9]*"
          inputmode="numeric"
          value=""
          required
        />
      </div>
    </div>
  </fieldset>
  <!--end memorable date-->

  <!--start radio activities-->
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">
      Choose the activity you want to reserve*
    </legend>
    <div class="usa-radio">
      <input
        class="usa-radio__input usa-radio__input--tile"
        id="coyote-camp"
        type="radio"
        name="activity"
        value="coyotes"
        required
      />
      <label class="usa-radio__label" for="coyote-camp">
        Camp among the coyotes
      </label>
    </div>
    <div class="usa-radio">
      <input
        class="usa-radio__input usa-radio__input--tile"
        id="buffalo-fly"
        type="radio"
        name="activity"
        value="buffalo"
      />
      <label class="usa-radio__label" for="buffalo-fly">
        Fly over buffalo valley
      </label>
    </div>
    <div class="usa-radio">
      <input
        class="usa-radio__input usa-radio__input--tile"
        id="secret-hike"
        type="radio"
        name="activity"
        value="hike"
      />
      <label class="usa-radio__label" for="secret-hike">
        Hike the secret trail
      </label>
    </div>
    <div class="usa-radio">
      <input
        class="usa-radio__input usa-radio__input--tile"
        id="salmon-bear"
        type="radio"
        name="activity"
        value="bear"
      />
      <label class="usa-radio__label" for="salmon-bear">
        Watch bear hunt for salmon
      </label>
    </div>
    <div class="usa-radio">
        <input
          class="usa-radio__input usa-radio__input--tile"
          id="atv-buffalo"
          type="radio"
          name="activity"
          value="atv"
          aria-disabled="true"
        />
        <label class="usa-radio__label" for="atv-buffalo">
          Ride an ATV among the buffalo
        </label>
    </div>
  </fieldset>
  <!--end radio activities-->

  <!--start time picker-->
  <fieldset class="usa-fieldset">
    <label class="usa-label" id="appointment-time-label" for="appointment-time">
      Select a time to reserve your spot
    </label>
    <div class="usa-hint" id="appointment-time-hint">hh:mm</div>
    <div class="usa-time-picker">
      <input
        class="usa-input"
        id="appointment-time"
        name="appointment-time"
        aria-describedby="appointment-time-label appointment-time-hint"
        required
      />
    </div>
  </fieldset>
  <!--end time picker-->

  <!--start code of conduct radio buttons-->
  <fieldset class="usa-fieldset">
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
  </fieldset>
  <!--end code of conduct radio buttons-->

  <!--start submit button -->
  <input type="submit" class="usa-button" value="Reserve my spot!">
  <!--end submit button -->
</form>
