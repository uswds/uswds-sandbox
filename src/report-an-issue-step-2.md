---
layout: default
title: Report an Accessibility Issue (step 2 of 2)
body:
---

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
            <h1 class="margin-bottom-0">Report an Accessibility Issue (step 2 of 2)</h1>
            <h2>Setup a technical support session</h2>
            <ul class="usa-list">
              <li>To help resolve your accessibility issue, we offer one-on-one technical support sessions with our team’s accessibility specialists.</li>
              <li>Select a data and time for an open session and we’ll setup a meeting to talk about your issue in more detail.</li>
            </ul>
            <div class="usa-checkbox margin-top-5">
              <input class="usa-checkbox__input" id="not-interested" type="checkbox" name="not-interested"
                value="not-interested"/>
              <label class="usa-checkbox__label" for="not-interested">I'm not interested in signing up for a support session at this time</label>
            </div>
            <div id="upcoming-openings">
              <h2 class="margin-top-5">View upcoming openings for one-on-one support</h2>
              <form class="usa-form" id="dateForm" method="get" action="{{ '/confirmation' | url }}">
                <div id="tabbed-interface" class="height-mobile">
                  <label class="usa-label margin-top-0" for="tabs">Select a date</label>
                  <select class="usa-select usa-input--xl" id="tabs">
                    <option disabled>Select a date</option>
                    <option value="Jan-16-2022">Jan 16, 2022</option>
                    <option value="Jan-18-2022">Jan 18, 2022</option>
                    <option value="Jan-19-2022">Jan 19, 2022</option>
                    <option value="Jan-22-2022">Jan 22, 2022</option>
                  </select>
                  <div id="Jan-16-2022" class="tab-content active">
                      <fieldset class="usa-fieldset flex">
                        <legend class="usa-legend">Pick a time for January 16th, 2022</legend>
                        <div class="usa-radio">
                          <input class="usa-radio__input usa-radio__input--tile" id="time-1" type="radio" name="day-1-time" value="9:00am"/>
                          <label class="usa-radio__label" for="time-1">9:00am</label>
                        </div>
                        <div class="usa-radio">
                          <input class="usa-radio__input usa-radio__input--tile" id="time-2" type="radio" name="day-1-time" value="9:30am" />
                          <label class="usa-radio__label" for="time-2">9:30am</label>
                        </div>
                        <div class="usa-radio">
                          <input class="usa-radio__input usa-radio__input--tile" id="time-3" type="radio" name="day-1-time" value="11:00am" />
                          <label class="usa-radio__label" for="time-3">11:00am</label>
                        </div>
                        <div class="usa-radio">
                          <input class="usa-radio__input usa-radio__input--tile" id="time-4" type="radio" name="day-1-time" value="12:00pm" />
                          <label class="usa-radio__label" for="time-4">12:00pm</label>
                        </div>
                        <div class="usa-radio">
                          <input class="usa-radio__input usa-radio__input--tile" id="time-5" type="radio" name="day-1-time" value="1:00pm" />
                          <label class="usa-radio__label" for="time-5">1:00pm</label>
                        </div>
                        <div class="usa-radio">
                          <input class="usa-radio__input usa-radio__input--tile" id="time-6" type="radio" name="day-1-time" value="2:30pm" />
                          <label class="usa-radio__label" for="time-6">2:30pm</label>
                        </div>
                        <div class="usa-radio">
                          <input class="usa-radio__input usa-radio__input--tile" id="time-7" type="radio" name="day-1-time" value="3:30pm" />
                          <label class="usa-radio__label" for="time-7">3:30pm</label>
                        </div>
                      </fieldset>
                  </div>
                  <div id="Jan-18-2022" class="tab-content">
                    <fieldset class="usa-fieldset flex">
                      <legend class="usa-legend">Pick a time for January 18th, 2022</legend>
                      <div class="usa-radio">
                        <input class="usa-radio__input usa-radio__input--tile" id="time-11" type="radio" name="day-2-time" value="8:00am" />
                        <label class="usa-radio__label" for="time-11">8:00am</label>
                      </div>
                      <div class="usa-radio">
                        <input class="usa-radio__input usa-radio__input--tile" id="time-12" type="radio" name="day-2-time" value="8:30am" />
                        <label class="usa-radio__label" for="time-12">8:30am</label>
                      </div>
                      <div class="usa-radio">
                        <input class="usa-radio__input usa-radio__input--tile" id="time-13" type="radio" name="day-2-time" value="10:00am" />
                        <label class="usa-radio__label" for="time-13">10:00am</label>
                      </div>
                      <div class="usa-radio">
                        <input class="usa-radio__input usa-radio__input--tile" id="time-14" type="radio" name="day-2-time" value="10:30am" />
                        <label class="usa-radio__label" for="time-14">10:30am</label>
                      </div>
                      <div class="usa-radio">
                        <input class="usa-radio__input usa-radio__input--tile" id="time-15" type="radio" name="day-2-time" value="11:00am" />
                        <label class="usa-radio__label" for="time-15">11:00am</label>
                      </div>
                      <div class="usa-radio">
                        <input class="usa-radio__input usa-radio__input--tile" id="time-16" type="radio" name="day-2-time" value="12:30pm" />
                        <label class="usa-radio__label" for="time-16">12:30pm</label>
                      </div>
                      <div class="usa-radio">
                        <input class="usa-radio__input usa-radio__input--tile" id="time-17" type="radio" name="day-2-time" value="1:30pm" />
                        <label class="usa-radio__label" for="time-17">1:30pm</label>
                      </div>
                      <div class="usa-radio">
                        <input class="usa-radio__input usa-radio__input--tile" id="time-18" type="radio" name="day-2-time" value="2:30pm" />
                        <label class="usa-radio__label" for="time-18">2:30pm</label>
                      </div>
                      <div class="usa-radio">
                        <input class="usa-radio__input usa-radio__input--tile" id="time-19" type="radio" name="day-2-time" value="4:30pm" />
                        <label class="usa-radio__label" for="time-19">4:30pm</label>
                      </div>
                    </fieldset>
                  </div>
                  <div id="Jan-19-2022" class="tab-content">
                    <fieldset class="usa-fieldset flex">
                      <legend class="usa-legend">Pick a time for January 19th, 2022</legend>
                      <div class="usa-radio">
                        <input class="usa-radio__input usa-radio__input--tile" id="time-20" type="radio" name="day-3-time" value="1:30pm" />
                        <label class="usa-radio__label" for="time-20">1:30pm</label>
                      </div>
                      <div class="usa-radio">
                        <input class="usa-radio__input usa-radio__input--tile" id="time-21" type="radio" name="day-3-time" value="2:30pm" />
                        <label class="usa-radio__label" for="time-21">2:30pm</label>
                      </div>
                      <div class="usa-radio">
                        <input class="usa-radio__input usa-radio__input--tile" id="time-22" type="radio" name="day-3-time" value="3:30pm" />
                        <label class="usa-radio__label" for="time-22">3:30pm</label>
                      </div>
                      <div class="usa-radio">
                        <input class="usa-radio__input usa-radio__input--tile" id="time-23" type="radio" name="day-3-time" value="4:00pm" />
                        <label class="usa-radio__label" for="time-23">4:00pm</label>
                      </div>
                      <div class="usa-radio">
                        <input class="usa-radio__input usa-radio__input--tile" id="time-24" type="radio" name="day-3-time" value="4:30pm" />
                        <label class="usa-radio__label" for="time-24">4:30pm</label>
                      </div>
                      <div class="usa-radio">
                        <input class="usa-radio__input usa-radio__input--tile" id="time-34" type="radio" name="day-3-time" value="5:00pm" />
                        <label class="usa-radio__label" for="time-34">5:00pm</label>
                      </div>
                    </fieldset>
                  </div>
                  <div id="Jan-22-2022" class="tab-content">
                    <fieldset class="usa-fieldset flex">
                      <legend class="usa-legend">Pick a time for January 22nd, 2022</legend>
                      <div class="usa-radio">
                        <input class="usa-radio__input usa-radio__input--tile" id="time-30" type="radio" name="day-4-time" value="7:00am" />
                        <label class="usa-radio__label" for="time-30">7:00am</label>
                      </div>
                      <div class="usa-radio">
                        <input class="usa-radio__input usa-radio__input--tile" id="time-31" type="radio" name="day-4-time" value="7:30am" />
                        <label class="usa-radio__label" for="time-31">7:30am</label>
                      </div>
                      <div class="usa-radio">
                        <input class="usa-radio__input usa-radio__input--tile" id="time-32" type="radio" name="day-4-time" value="9:00am" />
                        <label class="usa-radio__label" for="time-32">9:00am</label>
                      </div>
                      <div class="usa-radio">
                        <input class="usa-radio__input usa-radio__input--tile" id="time-33" type="radio" name="day-4-time" value="9:30am" />
                        <label class="usa-radio__label" for="time-33">9:30am</label>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <button class="usa-button margin-y-4" id="save-info">Confirmation</a>
              </form>
            </div>
            <a id="confirmation-link" class="usa-button display-none margin-top-5 margin-bottom-4" href="{{ '/confirmation' | url }}">Confirmation</a>
          </div>
        </div>
      </div>
    </section>

  </div>
</main>

<script type="application/javascript">

  // Hide/show date content
  document.addEventListener('DOMContentLoaded', function() {
      document.querySelector('#not-interested').checked = false;
  });

  document.querySelector('#not-interested').addEventListener('change', function() {
      let section = document.querySelector('#upcoming-openings');
      let confirmation = document.querySelector('#confirmation-link');
      if(this.checked) {
          section.style.display = 'none';
          confirmation.style.display = 'inline-block';
      } else {
          section.style.display = 'block';
          confirmation.style.display = 'none';
      }
  });
  
  // Create faux tabs with select dropdown
  const tabs = document.querySelector('#tabs');
  const tabContents = document.querySelectorAll('.tab-content');

  if (document.querySelector('#tabs')) {
    tabs.addEventListener('change', () => {
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('active');
        tabContent.blur();
      });
      const selectedTab = document.querySelector(`#${tabs.value}`);
      selectedTab.classList.add('active');
    });
  }

  // Get all the radio buttons
  const buttons = document.querySelectorAll('input[type="radio"]');

  // Add a click event listener to each button
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const lastButtonClicked = button.value;
      localStorage.setItem("time", lastButtonClicked);
      // When a button is clicked, deselect all buttons in the other groups
      buttons.forEach(otherButton => {
        if (otherButton !== button && otherButton.name !== button.name) {
          otherButton.checked = false;
        }
      });
    });
  });

  // Submit form
  document.querySelector('#dateForm').addEventListener('keypress', function(e) {
    if(e.target.tagName != 'BUTTON') {
      e.preventDefault();
    }  
  });

  const submitButton = document.getElementById("save-info");
  submitButton.addEventListener("click", saveDate);

  function saveDate() {
    // Get the form data and format day to be human-readable
    const day = document.querySelector('#tabs').value;
    const date = new Date(day);
    const formattedDay = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    // Save the form data to local storage
    localStorage.setItem("formattedDay", formattedDay);
  }
</script>
