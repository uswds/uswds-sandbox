---
layout: default
title: Report an Accessibility Issue (step 1 of 2)
body:
---

<style>
  .error #with-hint-textarea-info {
    font-weight: bold; 
    color: red;
  }
  .error textarea {
    outline: 3px solid red; 
  }
</style>

<main id="main-content">
  <div class="bg-base-lightest">
    <section class="grid-container usa-section">
      <div class="grid-row flex-justify-center">
        <div class="grid-col-12 tablet:grid-col-12 desktop:grid-col-12">
          <div class="
                bg-white
                padding-y-3 padding-x-5
                border border-base-lighter
              ">
            <h1 class="margin-bottom-0">Report an Accessibility Issue (step 1 of 2)</h1>
             <p>
              Required fields are marked with an asterisk (<abbr title="required" class="usa-hint usa-hint--required">*</abbr>).
            </p>
            <form class="usa-form" id="infoForm" method="get" action="{{ '/report-an-issue-step-2' | url }}">
            <h2>Tell us about the issue</h2>
            <div class="usa-character-count" id="character-count">
              <div class="usa-form-group">
                <label class="usa-label" for="with-hint-textarea">Description of problem <abbr title="required" class="usa-hint usa-hint--required">*</abbr></label>
                <span id="with-hint-textarea-hint" class="usa-hint"
                  >Tell us about the problem.</span
                >
                <textarea
                  class="usa-textarea margin-bottom-05"
                  id="with-hint-textarea"
                  maxlength="250"
                  name="with-hint-textarea"
                  rows="5"
                  aria-describedby="with-hint-textarea-info with-hint-textarea-hint"
                  required
                ></textarea>
              </div>
              <span id="with-hint-textarea-info" class="usa-character-count__message">
                <span class="typed-characters">250</span> characters allowed
              </span>
              <span class="usa-character-count__sr-status usa-sr-only" role="region" aria-live="polite">
                <span class="sr-characters">250</span>
              </span>
            </div>
            <label class="usa-label" id="appointment-date-label" for="appointment-date"
                >When did you encounter this issue? <abbr title="required" class="usa-hint usa-hint--required">*</abbr></label
              >
            <div class="usa-hint" id="dateHint">For example, 01/01/2001</div>
            <input
              id="appointment-date"
              name="appointment-date"
              inputmode="numeric"
              placeholder="mm/dd/yyyy"
              pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
              class="usa-input usa-masked margin-bottom-3 width-card-lg"
              aria-describedby="dateHint"
              aria-labelledby="appointment-date-label"
              autocomplete="off"
              required
            />
            <fieldset class="usa-fieldset margin-bottom-5">
              <legend class="usa-legend usa-legend">How severe was the issue?</legend>
              <div class="usa-radio">
                <input
                  class="usa-radio__input"
                  id="severe-minor"
                  type="radio"
                  name="severity"
                  value="minor"
                  checked="checked"
                />
                <label class="usa-radio__label" for="severe-minor"
                  >Minor: I could still perform my activities without extra effort on the site despite this issue</label
                >
              </div>
              <div class="usa-radio">
                <input
                  class="usa-radio__input"
                  id="severe-medium"
                  type="radio"
                  name="severity"
                  value="medium"
                />
                <label class="usa-radio__label" for="severe-medium"
                  >Medium: This issue disrupted my ability to use the site and required me to use workarounds to complete my tasks</label
                >
              </div>
              <div class="usa-radio">
                <input
                  class="usa-radio__input"
                  id="severe-major"
                  type="radio"
                  name="severity"
                  value="major"
                />
                <label class="usa-radio__label" for="severe-major"
                  >Major: This issue was a significant barrier to using the site or prevented me from finishing my tasks</label
                >
              </div>
            </fieldset>
            <h2>System details</h2>
              <fieldset class="usa-fieldset">
                <legend class="usa-legend usa-legend">Device type <abbr title="required" class="usa-hint usa-hint--required">*</abbr></legend>
                <div class="usa-radio">
                  <input
                    class="usa-radio__input"
                    id="desktop-laptop"
                    type="radio"
                    name="device-type"
                    value="Desktop / laptop"
                    checked="checked"
                    required
                  />
                  <label class="usa-radio__label" for="desktop-laptop"
                    >Desktop / laptop</label
                  >
                </div>
                <div class="usa-radio">
                  <input
                    class="usa-radio__input"
                    id="mobile-phone"
                    type="radio"
                    name="device-type"
                    value="Mobile phone"
                    required
                  />
                  <label class="usa-radio__label" for="mobile-phone"
                    >Mobile phone</label
                  >
                </div>
                <div class="usa-radio">
                  <input
                    class="usa-radio__input"
                    id="tablet"
                    type="radio"
                    name="device-type"
                    value="Tablet"
                    required
                  />
                  <label class="usa-radio__label" for="tablet"
                    >Tablet</label
                  >
                </div>
                 <div class="usa-radio">
                  <input
                    class="usa-radio__input"
                    id="other-device"
                    type="radio"
                    name="device-type"
                    value="Other"
                    required
                  />
                  <label class="usa-radio__label" for="other-device"
                    >Other</label
                  >
                </div>
              </fieldset>
              <label class="usa-label" for="browser">Browser</label>
              <select class="usa-select usa-input--xl" name="options" id="browser">
                <option value>- Select -</option>
                <option value="Apple Safari">Apple Safari</option>
                <option value="Microsoft Edge">Microsoft Edge</option>
                <option value="Google Chrome">Google Chrome</option>
                <option value="Other">Other</option>
              </select>
              <label class="usa-label" for="assistive-tech">Assistive technology</label>
              <div class="usa-hint" id="atHint">For example, JAWS, NVDA, Voiceover, Dragon Naturally Speaking</div>
              <input class="usa-input usa-input--xl margin-bottom-5" id="assistive-tech" name="full-name" aria-describedby="atHint" autocomplete="off" >
              <h2>Contact information</h2>
              <label class="usa-label" for="full-name">Full name</label>
              <div class="usa-hint" id="fnHint">For example, Prof. Madeline Martinez Hernandez</div>
              <input class="usa-input usa-input--xl" id="full-name" name="full-name" aria-describedby="fnHint" autocomplete="off" >
              <label class="usa-label" for="email-address">Email address</label>
              <input class="usa-input usa-input--xl margin-bottom-1" id="email-address" name="email-address" type="email" autocapitalize="off"
                autocorrect="off" autocomplete="off" />
              <label class="usa-label" for="tel">US Telephone Number</label>
              <div class="usa-hint" id="telHint">For example, 123-456-7890</div>
              <input
                id="tel"
                type="tel"
                inputmode="numeric"
                name="tel"
                placeholder="___-___-____"
                pattern="\d{3}-\d{3}-\d{4}"
                class="usa-input usa-masked"
                aria-describedby="telHint"
                autocomplete="off"
              />
              <label class="usa-label" for="additional-information">Additional information that will help us contact you</label>
              <div class="usa-hint" id="aiHint"> For example, “Please leave a message” or “I'm a TTY/TDD user"</div>
              <input class="usa-input usa-input--xl margin-bottom-1" id="additional-information" name="additional-information" aria-describedby="aiHint" autocomplete="off"/>
              <button class="usa-button margin-y-4" id="save-info">Report an issue - Step 2</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</main>

<script type="application/javascript">

  // Custom character counter 
  const textCount = document.querySelector("#with-hint-textarea");
  const textWrapper = document.querySelector("#character-count");
  const characterCounterElement = document.querySelector("#with-hint-textarea-info");
  const typedCharactersElement = document.querySelector(".typed-characters");
  const screenReaderElement = document.querySelector(".sr-characters");

  // Show the characters remaining. The code for the aria live region to announce it to AT is in here too. 
  textCount.addEventListener("keyup", (event) => {
    let typedCharacters = textCount.value.length;
    typedCharactersElement.textContent = 250 - typedCharacters;
    screenReaderElement.textContent = 250 - typedCharacters + " characters remaining";

    if (typedCharacters >= 250) {
    textWrapper.classList.add("error");
    } else if (typedCharacters < 250 ) {
      textWrapper.classList.remove("error");
    }

  });


  const submitButton = document.getElementById("save-info");
  submitButton.addEventListener("click", saveInfo);

  function saveInfo() {
    // Get the form data
    const textArea = document.getElementById('with-hint-textarea').value;
    const issueDate = document.getElementById('appointment-date').value;
    const severity = document.querySelector('input[name="severity"]:checked');
    const selectedSeverity = severity.value;
    const device = document.querySelector('input[name="device-type"]:checked');
    const selectedDevice = device.value;
    const browser = document.getElementById('browser').value;
    const assistiveTech = document.getElementById('assistive-tech').value;
    const fullName = document.getElementById('full-name').value;
    const emailAddress = document.getElementById('email-address').value;
    const telephoneNumber = document.getElementById('tel').value;
    const additionalInfo = document.getElementById('additional-information').value;

    // Save the form data to local storage
    const values = {
      textArea: textArea, 
      issueDate: issueDate,
      selectedSeverity: selectedSeverity, 
      selectedDevice: selectedDevice,
      browser: browser,
      assistiveTech: assistiveTech,
      fullName: fullName,
      emailAddress: emailAddress,
      telephoneNumber: telephoneNumber,
      additionalInfo: additionalInfo
    };
    for (const key in values) {
      localStorage.setItem(key, values[key]);
    }
}
</script>
