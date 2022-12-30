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
                padding-y-3 padding-x-5
                border border-base-lighter
              ">
            <h1 class="margin-bottom-0">Confirmation</h1>
            <p><strong>Description of problem:</strong> <span id="textArea"></span></p>
            <p><strong>Date of appointment:</strong> <span id="savedDay"></span></p>
            <p><strong>Time of appointment:</strong> <span id="savedTime"></span></p>
            <button class="usa-button" id="clear-storage" onclick="localStorage.clear();">Clear localStorage</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</main>

<script type="application/javascript">
 // Get the saved form data from local storage
  var textArea = localStorage.getItem("textArea");
  var savedDay = localStorage.getItem("day");
  var savedTime = localStorage.getItem("time");


  // Update the HTML elements with the saved data
  document.getElementById("textArea").innerHTML = textArea;
  document.getElementById("savedDay").innerHTML = savedDay;
  document.getElementById("savedTime").innerHTML = savedTime;
</script>
