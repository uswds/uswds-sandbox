---
layout: prototype-clean
title: USWDS type scale
permalink: /uswds-type-scale/
---

<div class="clearfix g-container-tablet-plus padding-top-6 line-height-smallest">
  <h1 class="font-weight-300 margin-bottom-4 margin-top-0">USWDS type scale</h1>
  <p class="line-height-base font-weight-300 margin-bottom-2">The 20-step USWDS type scale is the scale common to any USWDS project. It is designed to accomodate any project typeface, regardless of its optical size, with minimal impact to component layout. To achieve this, our type scale is regularized — each specific face has a different value at each point in the scale. The absolute sizes are different so they can appear to be the same size to the end user.</p>
  <p class="line-height-base font-weight-300 margin-bottom-2">Since each typeface has different type scale values, use <code class="txt-code">u-font-[type]-[value]</code> instead of <code class="txt-code">u-font-[value]</code>.</p>
  <p class="line-height-base font-weight-300 margin-bottom-6">The numeric sizes are common to any USWDS project and the relative sizes are a project-specific subset, defined in your project’s settings.</p>
  <div class="g-row g-gap align-items-center margin-bottom-2 padding-bottom-1 border-bottom-2px">
    <div class="g-col-4 font-weight-700 font-sans-1">-sans (United Sans)</div>
    <div class="g-col-4 font-weight-700 font-sans-1">-serif (Georgia)</div>
    <div class="g-col-4 font-weight-700 font-sans-1">-mono (Roboto Mono)</div>
  </div>
  <div class="g-row g-gap align-items-center font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-1 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-1</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-sans-micro</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-700">12px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-1 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-1</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-serif-micro</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">12.56px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-1 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-1</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-mono-micro</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">12px</div>
    </div>
  </div>

  <div class="g-row g-gap align-items-center font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-2">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-2</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-700">13px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-2">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-2</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">13.60px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-2">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-2</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">13px</div>
    </div>
  </div>

  <div class="g-row g-gap align-items-center font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-3 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-3</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-sans-smallest</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-700">14px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-3 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-3</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-serif-smallest</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">14.65px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-3 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-3</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-mono-smallest</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">14px</div>
    </div>
  </div>

  <div class="g-row g-gap align-items-center font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-4">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-4</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-700">15px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-4">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-4</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">15.67px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-4">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-4</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">15px</div>
    </div>
  </div>

  <div class="g-row g-gap align-items-center font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-5 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-5</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-sans-smaller</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-700">16px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-5 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-5</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-serif-smaller</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">16.74px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-5 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-5</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-mono-smaller</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">16px</div>
    </div>
  </div>

  <div class="g-row g-gap align-items-center font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-6 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-6</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-sans-small</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-700">17px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-6 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-6</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-serif-small</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">17.78px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-6 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-6</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-mono-small</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">17px</div>
    </div>
  </div>

  <div class="g-row g-gap align-items-center font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-7 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-7</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-sans-base</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-700">18px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-7 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-7</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-serif-base</code></div>
    <div class="padding-top-1p5 font-mono-1 font-weight-300">18.83px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-7 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-7</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-mono-base</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">18px</div>
    </div>
  </div>

  <div class="g-row g-gap align-items-center font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-8">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-8</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-700">20px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-8">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-8</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">20.92px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-8">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-8</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">20px</div>
    </div>
  </div>

  <div class="g-row g-gap align-items-center font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-9">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-9</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-700">22px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-9">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-9</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">23.02px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-9">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-9</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">22px</div>
    </div>
  </div>

  <div class="g-row g-gap align-items-center font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-10 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-10</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-sans-large</code></div>
    <div class="padding-top-1p5 font-mono-1 font-weight-700">24px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-10 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-10</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-serif-large</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">25.10px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-10 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-10</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-mono-large</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">24px</div>
    </div>
  </div>

  <div class="g-row g-gap align-items-center font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-11">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-11</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-700">28px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-11">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-11</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">29.29px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-11">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-11</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">28px</div>
    </div>
  </div>

  <div class="g-row g-gap align-items-center font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-12 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-12</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-sans-larger</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-700">32px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-12 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-12</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-serif-larger</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">33.48px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-12 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-12</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-mono-larger</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">32px</div>
    </div>
  </div>

  <div class="g-row g-gap align-items-center font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-13">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-13</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-700">36px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-13">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-13</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">37.66px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-13">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-13</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">36px</div>
    </div>
  </div>

  <div class="g-row g-gap align-items-center font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-14 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-14</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-sans-largest</code></div>
    <div class="padding-top-1p5 font-mono-1 font-weight-700">40px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-14 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-14</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-serif-largest</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">41.85px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-14 color-black-90">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-14</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0 color-black-90">u-font-mono-largest</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">40px</div>
    </div>
  </div>

  <div class="g-row g-gap align-items-center font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-15">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-15</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-700">48px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-15">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-15</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">50.22px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-15">Tuscaloosa</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-15</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">48px</div>
    </div>
  </div>

  <div class="g-row g-gap align-items-center font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-16">Utica</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-16</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0">u-font-sans-mega</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-700">56px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-16">Utica</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-16</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0">u-font-serif-mega</code></div>
    <div class="padding-top-1p5 font-mono-1 font-weight-300">58.59px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-16">Utica</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-16</code></div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2 border background-color-0">u-font-mono-mega</code></div>
    <div class="padding-top-1p5 font-mono-1 font-weight-300">56px</div>
    </div>
  </div>

  <div class="g-row g-gap align-items-center font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-17">Utica</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-17</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-700">64px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-17">Utica</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-17</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">66.96px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-17">Utica</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-17</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">64px</div>
    </div>
  </div>

  <div class="g-row g-gap align-items-center font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-18">Utica</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-18</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-700">80px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-18">Utica</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-18</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">83.67px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-18">Utica</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-18</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">80px</div>
    </div>
  </div>

  <div class="g-row g-gap font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-19">LA</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-19</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-700">120px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-19">LA</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-19</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">125.55px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-19">LA</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-19</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">120px</div>
    </div>
  </div>

  <div class="g-row g-gap font-weight-400 padding-bottom-2 margin-bottom-2 border-bottom border-color-20">
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-sans-20">LA</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-sans-20</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-700">140px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-serif-20">LA</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-serif-20</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">146.47px</div>
    </div>
    <div class="g-col-4 display-flex flex-direction-column justify-content-flex-end">
      <div class="font-mono-20">LA</div>
      <div class="font-mono-1 padding-top-2"><code class="txt-code font-mono-2">u-font-mono-20</code></div>
      <div class="padding-top-1p5 font-mono-1 font-weight-300">140px</div>
    </div>
  </div>



</div>
