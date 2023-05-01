---
layout: demo
title: Grid
---

- This page uses grid and utility classes to modify the table

- Changing the namespace of these classes requires you to update class names in the page template
- Undefined `$theme-namespace` values will take their default value instead of switching to `false`
- Enabling utility namespace output causes the utility classes to require the defined namespace as a prefix
  - _ENABLING WILL BREAK UTILITY CLASSES THROUGHOUT DEMO REPO_
- Try setting `utility.output` to `true` & `utility.namespace` to `u-`
  - utility classes with `u-` prefix will activate
- Try changing `utility.namespace` to `util-`
  - utility classes with `util-` prefix will activate
- Try changing `grid.namespace` to `tile-`
  - Alternate tile spacing will activate

<div class="grid-row tile-row bg-red tablet:bg-primary desktop:bg-orange u-bg-green">
  <div class="tile padding-4 grid-col-1 tile-col-6">.grid-col-1</div>
  <div class="tile padding-4 grid-col-2 tile-col-1">.grid-col-2</div>
  <div class="tile padding-4 grid-col-3 tile-col-1">.grid-col-3</div>
  <div class="tile padding-4 grid-col-4 tile-col-1">.grid-col-4</div>
  <div class="tile padding-4 grid-col-2 tile-col-3">.grid-col-2</div>
</div>
<div class="grid-row tile-row bg-red util-bg-green">
  <div class="tile padding-4 grid-col-8 tile-col-2">.grid-col-8</div>
  <div class="tile padding-4 grid-col-2 tile-col-2">.grid-col-2</div>
  <div class="tile padding-4 grid-col-2 tile-col-8">.grid-col-2</div>
</div>