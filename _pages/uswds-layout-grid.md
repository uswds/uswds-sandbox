---
layout: prototype-clean
title: USWDS layout grid draft
permalink: /layout-grid/
---

<div class="font-mono-4 font-weight-300 padding-top-2 padding-bottom-4 tablet:padding-top-4 tablet:padding-bottom-6">

  <div class="g-container-desktop padding-x-4 margin-top-1">
    <h1 class="font-sans-14 font-weight-300 margin-top-0">USWDS draft layout grid</h1>
    <p class="docs-text"><strong>Note:</strong> <code class="docs-inline-code">.g-container</code>, <code class="docs-inline-code">.g-gap</code>, and <code class="docs-inline-code">.g-col</code> all have mobile-first responsive variants. Only the first example shows them.</p>
    <p class="docs-text"><code class="docs-inline-code">.g-col-fill</code> items flex to fit</p>

    <div class="g-row margin-top-1">
      <div class="g-col-6 tablet-plus:g-col-fill border-1px border-color-black-cool-10">
        <div class="display-none tablet-plus:display-block text-align-center padding-2">.tablet-plus:g-col-fill</div>
        <div class="tablet-plus:display-none text-align-center padding-2">.g-col-6</div>
      </div>
      <div class="g-col-6 tablet-plus:g-col-fill border-1px border-left-width-0 border-color-black-cool-10">
        <div class="display-none tablet-plus:display-block text-align-center padding-2">.tablet-plus:g-col-fill</div>
        <div class="tablet-plus:display-none text-align-center padding-2">.g-col-6</div>
      </div>
      <div class="g-col-4 tablet-plus:g-col-fill border-1px border-top-width-0 tablet-plus:border-top-width-1px tablet-plus:border-left-width-0 border-color-black-cool-10">
        <div class="display-none tablet-plus:display-block text-align-center padding-2">.tablet-plus:g-col-fill</div>
        <div class="tablet-plus:display-none text-align-center padding-2">.g-col-4</div>
      </div>
      <div class="g-col-4 tablet-plus:g-col-fill border-1px border-top-width-0 tablet-plus:border-top-width-1px border-left-width-0 border-color-black-cool-10">
        <div class="display-none tablet-plus:display-block text-align-center padding-2">.tablet-plus:g-col-fill</div>
        <div class="tablet-plus:display-none text-align-center padding-2">.g-col-4</div>
      </div>
      <div class="g-col-4 tablet-plus:g-col-fill border-1px border-top-width-0 tablet-plus:border-top-width-1px border-left-width-0 border-color-black-cool-10">
        <div class="display-none tablet-plus:display-block text-align-center padding-2">.tablet-plus:g-col-fill</div>
        <div class="tablet-plus:display-none text-align-center padding-2">.g-col-4</div>
      </div>
    </div><!-- g-row -->

    <div class="g-row margin-top-1">
      <div class="g-col tablet:g-col-fill border-1px border-color-black-cool-10">
        <div class="display-none tablet:display-block text-align-center padding-2">.tablet:g-col-fill</div>
        <div class="tablet:display-none text-align-center padding-2">.g-col</div>
      </div>
      <div class="g-col tablet:g-col-fill border-1px border-top-width-0 tablet:border-top-width-1px tablet:border-left-width-0 border-color-black-cool-10">
        <div class="display-none tablet:display-block text-align-center padding-2">.tablet:g-col-fill</div>
        <div class="tablet:display-none text-align-center padding-2">.g-col</div>
      </div>
      <div class="g-col tablet:g-col-fill border-1px border-top-width-0 tablet:border-top-width-1px tablet:border-left-width-0 border-color-black-cool-10">
        <div class="display-none tablet:display-block text-align-center padding-2">.tablet:g-col-fill</div>
        <div class="tablet:display-none text-align-center padding-2">.g-col</div>
      </div>
    </div><!-- g-row -->

    <p class="docs-text"><code class="docs-inline-code">.g-col-auto</code> items fit the content and do not flex</p>

    <div class="g-row margin-top-1">
      <div class="g-col-auto border-1px border-color-black-cool-10">
        <div class="text-align-center padding-2">.g-col-auto</div>
      </div>
      <div class="g-col-fill border-1px border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-2">.g-col-fill</div>
      </div>
      <div class="g-col-fill border-1px border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-2">.g-col-fill</div>
      </div>
      <div class="g-col-auto border-1px border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-2">.g-col-auto</div>
      </div>
    </div><!-- l.row -->

    <p class="docs-text"><code class="docs-inline-code">.g-col-[1-12]</code> set a fixed width of [n] columns in a 12-column grid</p>

    <div class="g-row margin-top-1 font-sans-2">
      <div class="g-col-1 border-x-2px border-color-black-cool-90">
        <div class="text-align-center padding-x-2">1</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">2</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">3</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">4</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">5</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">6</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">7</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">8</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">9</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">10</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">11</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">12</div>
      </div>
    </div><!-- l.row -->

    <div class="g-row margin-top-1">
      <div class="g-col-1 border-1px border-color-black-cool-10">
        <div class="text-align-center padding-2">.g-col-1</div>
      </div>
      <div class="g-col-2 border-1px border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-2">.g-col-2</div>
      </div>
      <div class="g-col-3 border-1px border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-2">.g-col-3</div>
      </div>
      <div class="g-col-4 border-1px border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-2">.g-col-4</div>
      </div>
      <div class="g-col-2 border-1px border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-2">.g-col-2</div>
      </div>
    </div><!-- l.row -->

    <div class="g-row margin-top-1">
      <div class="g-col-8 border-1px border-color-black-cool-10">
        <div class="text-align-center padding-2">.g-col-8</div>
      </div>
      <div class="g-col-2 border-1px border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-2">.g-col-2</div>
      </div>
      <div class="g-col-2 border-1px border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-2">.g-col-2</div>
      </div>
    </div><!-- l.row -->

    <p class="docs-text"><code class="docs-inline-code">.g-offset-[1-12]</code> offsets the column by [n] columns</p>

    <div class="g-row margin-top-1 font-sans-2">
      <div class="g-col-1 border-x-2px border-color-black-cool-90">
        <div class="text-align-center padding-x-2">1</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">2</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">3</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">4</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">5</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">6</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">7</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">8</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">9</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">10</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">11</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">12</div>
      </div>
    </div><!-- l.row -->

    <div class="g-row margin-top-1">
      <div class="g-col-8 g-offset-4 border-1px border-color-black-cool-10">
        <div class="text-align-center padding-2">.g-col-8.g-offset-4</div>
      </div>
    </div><!-- l.row -->

    <p class="docs-text">Rows wrap when columns add up to more than 12</p>

    <div class="g-row margin-top-1 font-sans-2">
      <div class="g-col-1 border-x-2px border-color-black-cool-90">
        <div class="text-align-center padding-x-2">1</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">2</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">3</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">4</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">5</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">6</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">7</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">8</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">9</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">10</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">11</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">12</div>
      </div>
    </div><!-- l.row -->

    <div class="g-row margin-top-1">
      <div class="g-col-8 border-1px border-color-black-cool-10">
        <div class="text-align-center padding-2">.g-col-8</div>
      </div>
      <div class="g-col-3 border-1px border-left-0 border-color-black-cool-10">
        <div class="text-align-center padding-2">.g-col-3</div>
      </div>
      <div class="g-col-5 border-1px border-top-0 border-color-black-cool-10">
        <div class="text-align-center padding-2">.g-col-5</div>
      </div>
    </div><!-- l.row -->

    <p class="docs-text"><code class="docs-inline-code">.g-gap</code> adds a gap between columns in the row, to a value set as <code class="docs-inline-code">$theme-column-gap</code> in settings</p>

    <div class="g-row margin-top-1 font-sans-2">
      <div class="g-col-1 border-x-2px border-color-black-cool-90">
        <div class="text-align-center padding-x-2">1</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">2</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">3</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">4</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">5</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">6</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">7</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">8</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">9</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">10</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">11</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">12</div>
      </div>
    </div><!-- l.row -->

    <div class="g-row g-gap margin-top-1">
      <div class="g-col-4">
        <div class="text-align-center border-1px border-color-black-cool-10 padding-2">.g-col-8</div>
      </div>
      <div class="g-col-4">
        <div class="text-align-center border-1px border-color-black-cool-10 padding-2">.g-col-3</div>
      </div>
      <div class="g-col-4">
        <div class="text-align-center border-1px border-color-black-cool-10 padding-2">.g-col-5</div>
      </div>
    </div><!-- l.row -->

    <p class="docs-text"><code class="docs-inline-code">.g-gap-large</code> adds a gap between columns in the row, to a value set as <code class="docs-inline-code">$theme-column-gap-large</code> in settings</p>

    <div class="g-row margin-top-1 font-sans-2">
      <div class="g-col-1 border-x-2px border-color-black-cool-90">
        <div class="text-align-center padding-x-2">1</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">2</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">3</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">4</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">5</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">6</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">7</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">8</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">9</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">10</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">11</div>
      </div>
      <div class="g-col-1 border-x-2px border-left-0 border-color-black-cool-90">
        <div class="text-align-center padding-x-2">12</div>
      </div>
    </div><!-- l.row -->

    <div class="g-row g-gap-large margin-top-1">
      <div class="g-col-4">
        <div class="text-align-center border-1px border-color-black-cool-10 padding-2">.g-col-8</div>
      </div>
      <div class="g-col-4">
        <div class="text-align-center border-1px border-color-black-cool-10 padding-2">.g-col-3</div>
      </div>
      <div class="g-col-4">
        <div class="text-align-center border-1px border-color-black-cool-10 padding-2">.g-col-5</div>
      </div>
    </div><!-- l.row -->

  </div><!-- l.container -->
</div><!-- div -->
