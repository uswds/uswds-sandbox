---
layout: prototype-clean
title: USWDS layout grid draft
permalink: /uswds-layout-grid/
---

<div class="u-mono-4 u-weight-300 u-padding-top-2 u-padding-bottom-4 tablet:u-padding-top-4 tablet:u-padding-bottom-6">

  <div class="g-container-desktop u-padding-x-4 u-margin-top-1">
    <h1 class="u-sans-14 u-fw-300 u-margin-top-0">USWDS draft layout grid</h1>
    <p class="docs-text"><strong>Note:</strong> <code class="docs-inline-code">.g-container</code>, <code class="docs-inline-code">.g-gap</code>, and <code class="docs-inline-code">.g-col</code> all have mobile-first responsive variants. Only the first example shows them.</p>
    <p class="docs-text"><code class="docs-inline-code">.g-col</code> and <code class="docs-inline-code">.g-col-fill</code> items flex to fit</p>

    <div class="g-row u-margin-top-1">
      <div class="g-col-6 tablet-lg:g-col-fill u-border-1px u-border-black-cool-10">
        <div class="u-display-none tablet-lg:u-display-block u-center u-padding-2">.tablet-lg:g-col</div>
        <div class="tablet-lg:u-display-none u-center u-padding-2">.g-col-6</div>
      </div>
      <div class="g-col-6 tablet-lg:g-col-fill u-border-1px u-border-left-width-0 u-border-black-cool-10">
        <div class="u-display-none tablet-lg:u-display-block u-center u-padding-2">.tablet-lg:g-col</div>
        <div class="tablet-lg:u-display-none u-center u-padding-2">.g-col-6</div>
      </div>
      <div class="g-col-4 tablet-lg:g-col-fill u-border-1px u-border-top-width-0 tablet-lg:u-border-top-width-1px tablet-lg:u-border-left-width-0 u-border-black-cool-10">
        <div class="u-display-none tablet-lg:u-display-block u-center u-padding-2">.tablet-lg:g-col</div>
        <div class="tablet-lg:u-display-none u-center u-padding-2">.g-col-4</div>
      </div>
      <div class="g-col-4 tablet-lg:g-col-fill u-border-1px u-border-top-width-0 tablet-lg:u-border-top-width-1px u-border-left-width-0 u-border-black-cool-10">
        <div class="u-display-none tablet-lg:u-display-block u-center u-padding-2">.tablet-lg:g-col</div>
        <div class="tablet-lg:u-display-none u-center u-padding-2">.g-col-4</div>
      </div>
      <div class="g-col-4 tablet-lg:g-col-fill u-border-1px u-border-top-width-0 tablet-lg:u-border-top-width-1px u-border-left-width-0 u-border-black-cool-10">
        <div class="u-display-none tablet-lg:u-display-block u-center u-padding-2">.tablet-lg:g-col</div>
        <div class="tablet-lg:u-display-none u-center u-padding-2">.g-col-4</div>
      </div>
    </div><!-- row -->

    <div class="g-row u-margin-top-1">
      <div class="g-col tablet:g-col-fill u-border-1px u-border-black-cool-10">
        <div class="u-display-none tablet:u-display-block u-center u-padding-2">.tablet:g-col</div>
        <div class="tablet:u-display-none u-center u-padding-2">.g-col</div>
      </div>
      <div class="g-col tablet:g-col-fill u-border-1px u-border-left-width-0 tablet:u-border-top-width-1px tablet:u-border-left-0 u-border-black-cool-10">
        <div class="u-display-none tablet:u-display-block u-center u-padding-2">.tablet:g-col</div>
        <div class="tablet:u-display-none u-center u-padding-2">.g-col</div>
      </div>
      <div class="g-col tablet:g-col-fill u-border-1px u-border-left-width-0 tablet:u-border-top-width-1px tablet:u-border-left-width-0 u-border-black-cool-10">
        <div class="u-display-none tablet:u-display-block u-center u-padding-2">.tablet:g-col</div>
        <div class="tablet:u-display-none u-center u-padding-2">.g-col</div>
      </div>
    </div><!-- row -->

    <p class="docs-text"><code class="docs-inline-code">.g-col-auto</code> items fit the content and do not flex</p>

    <div class="g-row u-margin-top-1">
      <div class="g-col-auto u-border-1px u-border-black-cool-10">
        <div class="u-center u-padding-2">.g-col-auto</div>
      </div>
      <div class="g-col-fill u-border-1px u-border-left-0 u-border-black-cool-10">
        <div class="u-center u-padding-2">.g-col</div>
      </div>
      <div class="g-col-fill u-border-1px u-border-left-0 u-border-black-cool-10">
        <div class="u-center u-padding-2">.g-col</div>
      </div>
      <div class="g-col-auto u-border-1px u-border-left-0 u-border-black-cool-10">
        <div class="u-center u-padding-2">.g-col-auto</div>
      </div>
    </div><!-- l.row -->

    <p class="docs-text"><code class="docs-inline-code">.g-col-[1-12]</code> set a fixed width of [n] columns in a 12-column grid</p>

    <div class="g-row u-margin-top-1 u-sans-2">
      <div class="g-col-1 u-border-x-2px u-border-black-cool-90">
        <div class="u-center u-padding-x-2">1</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">2</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">3</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">4</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">5</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">6</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">7</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">8</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">9</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">10</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">11</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">12</div>
      </div>
    </div><!-- l.row -->

    <div class="g-row u-margin-top-1">
      <div class="g-col-1 u-border-1px u-border-black-cool-10">
        <div class="u-center u-padding-2">.g-col-1</div>
      </div>
      <div class="g-col-2 u-border-1px u-border-left-0 u-border-black-cool-10">
        <div class="u-center u-padding-2">.g-col-2</div>
      </div>
      <div class="g-col-3 u-border-1px u-border-left-0 u-border-black-cool-10">
        <div class="u-center u-padding-2">.g-col-3</div>
      </div>
      <div class="g-col-4 u-border-1px u-border-left-0 u-border-black-cool-10">
        <div class="u-center u-padding-2">.g-col-4</div>
      </div>
      <div class="g-col-2 u-border-1px u-border-left-0 u-border-black-cool-10">
        <div class="u-center u-padding-2">.g-col-2</div>
      </div>
    </div><!-- l.row -->

    <div class="g-row u-margin-top-1">
      <div class="g-col-8 u-border-1px u-border-black-cool-10">
        <div class="u-center u-padding-2">.g-col-8</div>
      </div>
      <div class="g-col-2 u-border-1px u-border-left-0 u-border-black-cool-10">
        <div class="u-center u-padding-2">.g-col-2</div>
      </div>
      <div class="g-col-2 u-border-1px u-border-left-0 u-border-black-cool-10">
        <div class="u-center u-padding-2">.g-col-2</div>
      </div>
    </div><!-- l.row -->

    <p class="docs-text"><code class="docs-inline-code">.g-offset-[1-12]</code> offsets the column by [n] columns</p>

    <div class="g-row u-margin-top-1 u-sans-2">
      <div class="g-col-1 u-border-x-2px u-border-black-cool-90">
        <div class="u-center u-padding-x-2">1</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">2</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">3</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">4</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">5</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">6</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">7</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">8</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">9</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">10</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">11</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">12</div>
      </div>
    </div><!-- l.row -->

    <div class="g-row u-margin-top-1">
      <div class="g-col-8 g-offset-4 u-border-1px u-border-black-cool-10">
        <div class="u-center u-padding-2">.g-col-8.g-offset-4</div>
      </div>
    </div><!-- l.row -->

    <p class="docs-text">Rows wrap when columns add up to more than 12</p>

    <div class="g-row u-margin-top-1 u-sans-2">
      <div class="g-col-1 u-border-x-2px u-border-black-cool-90">
        <div class="u-center u-padding-x-2">1</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">2</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">3</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">4</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">5</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">6</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">7</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">8</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">9</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">10</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">11</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">12</div>
      </div>
    </div><!-- l.row -->

    <div class="g-row u-margin-top-1">
      <div class="g-col-8 u-border-1px u-border-black-cool-10">
        <div class="u-center u-padding-2">.g-col-8</div>
      </div>
      <div class="g-col-3 u-border-1px u-border-left-0 u-border-black-cool-10">
        <div class="u-center u-padding-2">.g-col-3</div>
      </div>
      <div class="g-col-5 u-border-1px u-border-top-0 u-border-black-cool-10">
        <div class="u-center u-padding-2">.g-col-5</div>
      </div>
    </div><!-- l.row -->

    <p class="docs-text"><code class="docs-inline-code">.gap</code> adds a gap between columns in the row, to a value set as <code class="docs-inline-code">$theme-column-gap</code> in settings</p>

    <div class="g-row u-margin-top-1 u-sans-2">
      <div class="g-col-1 u-border-x-2px u-border-black-cool-90">
        <div class="u-center u-padding-x-2">1</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">2</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">3</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">4</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">5</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">6</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">7</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">8</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">9</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">10</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">11</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">12</div>
      </div>
    </div><!-- l.row -->

    <div class="g-row g-gap u-margin-top-1">
      <div class="g-col-4">
        <div class="u-center u-border-1px u-border-black-cool-10 u-padding-2">.g-col-8</div>
      </div>
      <div class="g-col-4">
        <div class="u-center u-border-1px u-border-black-cool-10 u-padding-2">.g-col-3</div>
      </div>
      <div class="g-col-4">
        <div class="u-center u-border-1px u-border-black-cool-10 u-padding-2">.g-col-5</div>
      </div>
    </div><!-- l.row -->

    <p class="docs-text"><code class="docs-inline-code">.g-gap-lg</code> adds a gap between columns in the row, to a value set as <code class="docs-inline-code">$theme-column-gap-large</code> in settings</p>

    <div class="g-row u-margin-top-1 u-sans-2">
      <div class="g-col-1 u-border-x-2px u-border-black-cool-90">
        <div class="u-center u-padding-x-2">1</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">2</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">3</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">4</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">5</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">6</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">7</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">8</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">9</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">10</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">11</div>
      </div>
      <div class="g-col-1 u-border-x-2px u-border-left-0 u-border-black-cool-90">
        <div class="u-center u-padding-x-2">12</div>
      </div>
    </div><!-- l.row -->

    <div class="g-row g-gap-lg u-margin-top-1">
      <div class="g-col-4">
        <div class="u-center u-border-1px u-border-black-cool-10 u-padding-2">.g-col-8</div>
      </div>
      <div class="g-col-4">
        <div class="u-center u-border-1px u-border-black-cool-10 u-padding-2">.g-col-3</div>
      </div>
      <div class="g-col-4">
        <div class="u-center u-border-1px u-border-black-cool-10 u-padding-2">.g-col-5</div>
      </div>
    </div><!-- l.row -->

  </div><!-- l.container -->
</div><!-- div -->
