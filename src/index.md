---
layout: default
title: Zombie Defense Training Course Evaluation
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
            <h1 class="">Zombie Defense Training Course Evaluation</h1>
              <form method="get" action="{{ '/success' | url }}">
              <h2 class="margin-top-5">Course details</h2>
                <div class="usa-accordion usa-accordion--bordered margin-bottom-5">
                  <h3 class="usa-accordion__heading">
                    <button
                      type="button"
                      class="usa-accordion__button"
                      aria-expanded="true"
                      aria-controls="b-a1"
                    >
                      Class Information
                    </button>
                  </h3>
                  <div id="b-a1" class="usa-accordion__content usa-prose">
                    <p>
                      The Smell of Survival: A introduction into zombie olfactory avoidance strategies. Learn how to eliminate or mask common smells that can draw the attention of zombies.
                    </p>
                  </div>
                  <h3 class="usa-accordion__heading">
                    <button
                      type="button"
                      class="usa-accordion__button"
                      aria-expanded="false"
                      aria-controls="b-a2"
                    >
                      Instructor Information
                    </button>
                  </h3>
                  <div id="b-a2" class="usa-accordion__content usa-prose">
                    <p>
                      Susanna Funk - Tacoma, Washington Zombie Protection Squad member
                    </p>
                  </div>
                  <h3 class="usa-accordion__heading">
                    <button
                      type="button"
                      class="usa-accordion__button"
                      aria-expanded="false"
                      aria-controls="b-a3"
                    >
                      ZDT Learning Credits
                    </button>
                  </h3>
                  <div id="b-a3" class="usa-accordion__content usa-prose">
                    <p>
                      Completion of the course counts toward 6 annual ZDT Learning Credits.
                    </p>
                  </div>
                  <h3 class="usa-accordion__heading">
                    <button
                      type="button"
                      class="usa-accordion__button"
                      aria-expanded="false"
                      aria-controls="b-a4"
                    >
                      Online Resources
                    </button>
                  </h3>
                  <div id="b-a4" class="usa-accordion__content usa-prose">
                    <p>
                      No online resources are available for this course.
                    </p>
                  </div>
                </div>
                <h2 class="margin-bottom-0 display-flex"><span class="margin-right-1">Rate Training Session</span>
                  <a class="usa-tooltip" data-position="top" title="Your ratings are anonymous and will not impact your pass or fail status for the course.">
                    <span class="usa-sr-only">Tooltip</span>
                    <svg class="usa-icon top-2px" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ '/assets/img/sprite.svg#help' | url }}"></use></svg>
                  </a>
                </h2>
                <label class="usa-label" for="course-range">Course Content Rating</label>
                <div class="usa-hint" id="courseHint">Please use the slider below to rate the quality of the course content.
                    A rating of 1 means the content was very low quality and 10 rating  means the content was very high quality.
                </div>
                <input
                  id="course-range"
                  class="usa-range"
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  value="0"
                  aria-valuemin="0"
                  aria-valuemax="10"
                  aria-valuenow="0"
                  aria-describedby="courseHint"
                  role="slider"
                />
                  <label class="usa-label" for="instructor-range">Instructor Rating</label>
                <div class="usa-hint" id="instHint">Please use the slider below to rate the quality of the instructor.
                    A rating of 1 means the instructor was of very low quality and 10 rating means the instructor was of very high quality.
                </div>
                <input
                  id="instructor-range"
                  class="usa-range"
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  value="0"
                  aria-valuemin="0"
                  aria-valuemax="10"
                  aria-valuenow="0"
                  aria-describedby="instHint"
                  role="slider"
                />
              <button class="usa-button margin-y-4" id="save-info">Submit rating</a>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</main>

<script type="application/javascript">
  const submitButton = document.getElementById("save-info");
  submitButton.addEventListener("click", saveInfo);

  function saveInfo() {
    // Get the form data
    const courseRange = document.getElementById('course-range').value;
    const instructorRange = document.getElementById('instructor-range').value;

    // Save the form data to local storage
    localStorage.setItem("courseRange", courseRange);
    localStorage.setItem("instructorRange", instructorRange);
}
</script>
