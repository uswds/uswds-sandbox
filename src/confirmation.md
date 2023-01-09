---
layout: default
title: Confirmation
body:
---

<main id="main-content">
  <div class="bg-base-lightest">
    <section class="grid-container usa-section">
      <div class="grid-row flex-justify-center">
        <div class="grid-col-12 tablet:grid-col-12 desktop:grid-col-12">
          <div class="
                bg-white
                padding-bottom-5 padding-top-3 padding-x-5
                border border-base-lighter
                margin-bottom-5
              ">
            <h1>Confirmation</h1>
            <h2 class="margin-top-5">Training session rating</h2>
            <p><strong>Course Rating:</strong> <span id="courseRange"></span></p>
            <!-- <meter class="width-card height-3" id="courseMeter" min="0" low="3" high="7" optimum="8" max="10"></meter> -->
            <p><strong>Instructor Rating:</strong> <span id="instructorRange"></span></p>
            <!-- <meter class="width-card height-3" id="instructorMeter" min="0" low="3" high="7" optimum="8" max="10"></meter> -->
            <h2 class="margin-top-5">About the issue</h2>
            <p><strong>Description of problem:</strong> <span id="textArea"></span></p>
            <p><strong>When did you encounter the issue?:</strong> <span id="issueDate"></span></p>
            <p><strong>How severe was the issue?:</strong> <span id="selectedSeverity"></span></p>
            <h2 class="margin-top-5">System details</h2>
            <p><strong>Device type:</strong> <span id="selectedDevice"></span></p>
            <p><strong>Browser:</strong> <span id="browser"></span></p>
            <p><strong>Assistive technology:</strong> <span id="assistiveTech"></span></p>
            <h2 class="margin-top-5">Contact information</h2>
            <p><strong>Full name:</strong> <span id="fullName"></span></p>
            <p><strong>Email address:</strong> <span id="emailAddress"></span></p>
            <p><strong>US Telephone number:</strong> <span id="telephoneNumber"></span></p>
            <p><strong>Additional information that will help us contact you:</strong> <span id="additionalInfo"></span></p>
            <h2 class="margin-top-5">One-on-one support appointment date and time</h2>
            <p><strong>Date of appointment:</strong> <span id="savedDay"></span></p>
            <p><strong>Time of appointment:</strong> <span id="savedTime"></span></p>
            <!-- <button class="usa-button margin-top-5" id="clear-storage" onclick="localStorage.clear();">Clear localStorage</button> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</main>

<script type="application/javascript">
 // Get the saved form data from local storage
  var textArea = localStorage.getItem("textArea");
  var courseRange = localStorage.getItem("courseRange");
  var instructorRange = localStorage.getItem("instructorRange");    
  var savedDay = localStorage.getItem("formattedDay");
  var savedTime = localStorage.getItem("time");
  var fullName = localStorage.getItem("fullName");
  var selectedDevice = localStorage.getItem("selectedDevice");
  var selectedSeverity = localStorage.getItem("selectedSeverity");
  var assistiveTech = localStorage.getItem("assistiveTech");
  var browser = localStorage.getItem("browser");
  var issueDate = localStorage.getItem("issueDate");
  var emailAddress = localStorage.getItem("emailAddress");
  var telephoneNumber = localStorage.getItem("telephoneNumber");
  var additionalInfo = localStorage.getItem("additionalInfo");

  // Add context to course and instructor range
  const rangeLabels = {
    low: 'Low',
    medium: 'Medium',
    high: 'High',
  }
  
  const setRangeLabel = (range, elementId) => {
    if (range <= 3) {
      label = rangeLabels.low;
    } else if (range >= 4 && range <= 6) {
      label = rangeLabels.medium;
    } else {
      label = rangeLabels.high;
    }
    document.getElementById(elementId).innerHTML = `${range} (${label})`;
  }

  // Update the HTML elements with the saved data
  setRangeLabel(courseRange, "courseRange");
  // document.querySelector('#courseMeter').value = courseRange;
  setRangeLabel(instructorRange, "instructorRange");
  // document.querySelector('#instructorMeter').value = instructorRange;
  document.getElementById("textArea").innerHTML = textArea;
  document.getElementById("issueDate").innerHTML = issueDate;
  document.getElementById("selectedSeverity").innerHTML = selectedSeverity;
  document.getElementById("selectedDevice").innerHTML = selectedDevice;
  document.getElementById("browser").innerHTML = browser;
  document.getElementById("assistiveTech").innerHTML = assistiveTech;
  document.getElementById("fullName").innerHTML = fullName;
  document.getElementById("emailAddress").innerHTML = emailAddress;
  document.getElementById("telephoneNumber").innerHTML = telephoneNumber;
  document.getElementById("additionalInfo").innerHTML = additionalInfo;
  document.getElementById("savedDay").innerHTML = savedDay;
  document.getElementById("savedTime").innerHTML = savedTime;

      
</script>
