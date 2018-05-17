---
layout: prototype-clean
title: USWDS layout grid draft
permalink: /uswds-layout-grid/
---

<div class="size-mono-4 weight-300 padding-top-2 padding-bottom-4 tablet:padding-top-4 tablet:padding-bottom-9">

  <div class="container-tablet-lg padding-x-2 margin-top-1">
    <h1 class="size-sans-14 text-300 margin-top-0">USWDS draft layout grid</h1>
    <p class="docs-text"><strong>Note:</strong> <code class="docs-inline-code">.container</code>, <code class="docs-inline-code">.gap</code>, and <code class="docs-inline-code">.col</code> all have mobile-first responsive variants. Only the first example shows them.</p>
    <p class="docs-text"><code class="docs-inline-code">.col</code> and <code class="docs-inline-code">.col-fill</code> items flex to fit</p>

    <div class="row margin-top-1">
      <div class="col-6 tablet-lg:col-fill border-1px border-black-cool-10">
        <div class="display-none tablet-lg:display-block text-center padding-2">.tablet-lg:col</div>
        <div class="tablet-lg:display-none text-center padding-2">.col-6</div>
      </div>
      <div class="col-6 tablet-lg:col-fill border-1px border-left-width-0 border-black-cool-10">
        <div class="display-none tablet-lg:display-block text-center padding-2">.tablet-lg:col</div>
        <div class="tablet-lg:display-none text-center padding-2">.col-6</div>
      </div>
      <div class="col-4 tablet-lg:col-fill border-1px border-top-width-0 tablet-lg:border-top-width-1px tablet-lg:border-left-width-0 border-black-cool-10">
        <div class="display-none tablet-lg:display-block text-center padding-2">.tablet-lg:col</div>
        <div class="tablet-lg:display-none text-center padding-2">.col-4</div>
      </div>
      <div class="col-4 tablet-lg:col-fill border-1px border-top-width-0 tablet-lg:border-top-width-1px border-left-width-0 border-black-cool-10">
        <div class="display-none tablet-lg:display-block text-center padding-2">.tablet-lg:col</div>
        <div class="tablet-lg:display-none text-center padding-2">.col-4</div>
      </div>
      <div class="col-4 tablet-lg:col-fill border-1px border-top-width-0 tablet-lg:border-top-width-1px border-left-width-0 border-black-cool-10">
        <div class="display-none tablet-lg:display-block text-center padding-2">.tablet-lg:col</div>
        <div class="tablet-lg:display-none text-center padding-2">.col-4</div>
      </div>
    </div><!-- row -->

    <div class="row margin-top-1">
      <div class="col tablet:col-fill border-1px border-black-cool-10">
        <div class="display-none tablet:display-block text-center padding-2">.tablet:col</div>
        <div class="tablet:display-none text-center padding-2">.col</div>
      </div>
      <div class="col tablet:col-fill border-1px border-left-width-0 tablet:border-top-width-1px tablet:border-left-0 border-black-cool-10">
        <div class="display-none tablet:display-block text-center padding-2">.tablet:col</div>
        <div class="tablet:display-none text-center padding-2">.col</div>
      </div>
      <div class="col tablet:col-fill border-1px border-left-width-0 tablet:border-top-width-1px tablet:border-left-width-0 border-black-cool-10">
        <div class="display-none tablet:display-block text-center padding-2">.tablet:col</div>
        <div class="tablet:display-none text-center padding-2">.col</div>
      </div>
    </div><!-- row -->

    <p class="docs-text"><code class="docs-inline-code">.col-auto</code> items fit the content and do not flex</p>

    <div class="row margin-top-1">
      <div class="col-auto border-1px border-black-cool-10">
        <div class="text-center padding-2">.col-auto</div>
      </div>
      <div class="col-fill border-1px border-left-0 border-black-cool-10">
        <div class="text-center padding-2">.col</div>
      </div>
      <div class="col-fill border-1px border-left-0 border-black-cool-10">
        <div class="text-center padding-2">.col</div>
      </div>
      <div class="col-auto border-1px border-left-0 border-black-cool-10">
        <div class="text-center padding-2">.col-auto</div>
      </div>
    </div><!-- l.row -->

    <p class="docs-text"><code class="docs-inline-code">.col-[1-12]</code> set a fixed width of [n] columns in a 12-column grid</p>

    <div class="row margin-top-1 size-sans-2">
      <div class="col-1 border-x-2px border-black-cool-90">
        <div class="text-center padding-x-2">1</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">2</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">3</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">4</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">5</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">6</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">7</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">8</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">9</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">10</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">11</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">12</div>
      </div>
    </div><!-- l.row -->

    <div class="row margin-top-1">
      <div class="col-1 border-1px border-black-cool-10">
        <div class="text-center padding-2">.col-1</div>
      </div>
      <div class="col-2 border-1px border-left-0 border-black-cool-10">
        <div class="text-center padding-2">.col-2</div>
      </div>
      <div class="col-3 border-1px border-left-0 border-black-cool-10">
        <div class="text-center padding-2">.col-3</div>
      </div>
      <div class="col-4 border-1px border-left-0 border-black-cool-10">
        <div class="text-center padding-2">.col-4</div>
      </div>
      <div class="col-2 border-1px border-left-0 border-black-cool-10">
        <div class="text-center padding-2">.col-2</div>
      </div>
    </div><!-- l.row -->

    <div class="row margin-top-1">
      <div class="col-8 border-1px border-black-cool-10">
        <div class="text-center padding-2">.col-8</div>
      </div>
      <div class="col-2 border-1px border-left-0 border-black-cool-10">
        <div class="text-center padding-2">.col-2</div>
      </div>
      <div class="col-2 border-1px border-left-0 border-black-cool-10">
        <div class="text-center padding-2">.col-2</div>
      </div>
    </div><!-- l.row -->

    <p class="docs-text"><code class="docs-inline-code">.offset-[1-12]</code> offsets the column by [n] columns</p>

    <div class="row margin-top-1 size-sans-2">
      <div class="col-1 border-x-2px border-black-cool-90">
        <div class="text-center padding-x-2">1</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">2</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">3</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">4</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">5</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">6</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">7</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">8</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">9</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">10</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">11</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">12</div>
      </div>
    </div><!-- l.row -->

    <div class="row margin-top-1">
      <div class="col-8 offset-4 border-1px border-black-cool-10">
        <div class="text-center padding-2">.col-8.offset-4</div>
      </div>
    </div><!-- l.row -->

    <p class="docs-text">Rows wrap when columns add up to more than 12</p>

    <div class="row margin-top-1 size-sans-2">
      <div class="col-1 border-x-2px border-black-cool-90">
        <div class="text-center padding-x-2">1</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">2</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">3</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">4</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">5</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">6</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">7</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">8</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">9</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">10</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">11</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">12</div>
      </div>
    </div><!-- l.row -->

    <div class="row margin-top-1">
      <div class="col-8 border-1px border-black-cool-10">
        <div class="text-center padding-2">.col-8</div>
      </div>
      <div class="col-3 border-1px border-left-0 border-black-cool-10">
        <div class="text-center padding-2">.col-3</div>
      </div>
      <div class="col-5 border-1px border-top-0 border-black-cool-10">
        <div class="text-center padding-2">.col-5</div>
      </div>
    </div><!-- l.row -->

    <p class="docs-text"><code class="docs-inline-code">.gap</code> adds a gap between columns in the row, to a value set as <code class="docs-inline-code">$theme-column-gap</code> in settings</p>

    <div class="row margin-top-1 size-sans-2">
      <div class="col-1 border-x-2px border-black-cool-90">
        <div class="text-center padding-x-2">1</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">2</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">3</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">4</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">5</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">6</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">7</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">8</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">9</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">10</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">11</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">12</div>
      </div>
    </div><!-- l.row -->

    <div class="row gap margin-top-1">
      <div class="col-4">
        <div class="text-center border-1px border-black-cool-10 padding-2">.col-8</div>
      </div>
      <div class="col-4">
        <div class="text-center border-1px border-black-cool-10 padding-2">.col-3</div>
      </div>
      <div class="col-4">
        <div class="text-center border-1px border-black-cool-10 padding-2">.col-5</div>
      </div>
    </div><!-- l.row -->

    <p class="docs-text"><code class="docs-inline-code">.gap-lg</code> adds a gap between columns in the row, to a value set as <code class="docs-inline-code">$theme-column-gap-large</code> in settings</p>

    <div class="row margin-top-1 size-sans-2">
      <div class="col-1 border-x-2px border-black-cool-90">
        <div class="text-center padding-x-2">1</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">2</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">3</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">4</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">5</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">6</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">7</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">8</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">9</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">10</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">11</div>
      </div>
      <div class="col-1 border-x-2px border-left-0 border-black-cool-90">
        <div class="text-center padding-x-2">12</div>
      </div>
    </div><!-- l.row -->

    <div class="row gap-lg margin-top-1">
      <div class="col-4">
        <div class="text-center border-1px border-black-cool-10 padding-2">.col-8</div>
      </div>
      <div class="col-4">
        <div class="text-center border-1px border-black-cool-10 padding-2">.col-3</div>
      </div>
      <div class="col-4">
        <div class="text-center border-1px border-black-cool-10 padding-2">.col-5</div>
      </div>
    </div><!-- l.row -->

  </div><!-- l.container -->
</div><!-- div -->
