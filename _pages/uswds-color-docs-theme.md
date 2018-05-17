---
layout: prototype-clean
title: USWDS project theme palette
permalink: /uswds-color-docs-theme/
---

<div class="font-300 padding-top-2 padding-bottom-4 tablet:padding-top-4 tablet:padding-bottom-6">

  <div class="container-desktop margin-bottom-0 padding-x-4 padding-top-2 margin-top-0">
    <div class="row">
      <div class="col-8">
        <p class="size-sans-4 color-black-50 margin-top-0 margin-bottom-2 font-400"><span class="color-black font-800 padding-2px border-2px line-height-sans-1 padding-bottom-0 margin-right-1">USWDS</span> Docs <span class="color-black">/</span> Style <span class="color-black">/</span> Colors</p>
          <h1 class="size-sans-14 font-300 margin-top-0 line-height-sans-2 margin-bottom-0">Project theme palette</h1>
      </div>
      <div class="col-4">
        <figure class="margin-0 display-block">
          <img class="maxw-full display-block margin-x-auto" src="{{ '/assets/img//geodesic-header.svg' | relative_url }}" alt="A geodesic dome with colorful nodes">
        </figure>
      </div>
    </div>

    <div class="row padding-top-3 border-top-1px">
      <div class="col-3 sidenav">
        <ul class="list-reset size-sans-6 font-700">
          <li class="padding-bottom-1"><a class="color-black-90 no-underline hover:underline" href="{{ '/uswds-color-docs-introduction' | relative_url }}">Introduction</a>
          </li>
          <li class="padding-bottom-1"><a class="color-black-90 no-underline hover:underline" href="{{ '/uswds-color-docs-theme' | relative_url }}">Project theme palette</a>
            <ul class="list-reset font-300 margin-top-1 margin-bottom-2">
              <li>Using role-based palettes</li>
              <li>Project theme palette gallery</li>
              <li>Pairing colors</li>
            </ul>
          </li>
          <li class="padding-bottom-1"><a class="color-black-90 no-underline hover:underline" href="{{ '/uswds-color-docs-system' | relative_url }}">System palette</a></li>
          <li><a class="color-black-90 no-underline hover:underline" href="{{ '/uswds-color-docs-system' | relative_url }}">Special palettes</a></li>
        </ul>
      </div>
      <div class="col-9 usa-prose padding-x-3 size-sans-8">

        <!-- ###################################################### -->

        <p class="size-sans-11 font-300 line-height-sans-4 margin-top-0">Your project theme palette defines the specific color families and grades used in your project, based on the role these colors play on your site.</p>

        <div class="row gap margin-y-4 text-center">
          <div class="col-fill">
            <a href="#0" class="display-flex flex-column flex-justify-center minh-card-lg border radius-lg padding-2 color-black-90 no-underline border-black-20 hover:border-black-90 hover:border-width-2px">
              <figure class="margin-0 display-block width-4 margin-x-auto">
                <img class="maxw-full display-block margin-x-auto" src="{{ '/assets/img//project-theme-palette-icon.svg' | relative_url }}" alt="Project theme palette icon">
              </figure>
              <p class="flex-auto width-full margin-bottom-0 size-sans-6 font-700 line-height-sans-3 margin-top-1">Theme palette gallery</p>
              <p class="alex-auto width-full margin-0 margin-top-1 size-sans-6 line-height-sans-3 padding-bottom-1">View and download project theme palettes</p>
            </a>
          </div>
          <div class="col-fill">
            <a href="#0" class="display-flex flex-column flex-justify-center minh-card-lg border radius-lg padding-2 color-black-90 no-underline border-black-20 hover:border-black-90 hover:border-width-2px">
              <figure class="margin-0 display-block width-4 margin-x-auto">
                <img class="maxw-full display-block margin-x-auto" src="{{ '/assets/img//Sketch_logo_frame.svg' | relative_url }}" alt="Sketch application icon">
              </figure>
              <p class="flex-auto width-full margin-bottom-0 size-sans-6 font-700 line-height-sans-3 margin-top-1">Get the design assets</p>
              <p class="flex-auto width-full margin-0 margin-top-1 size-sans-6 line-height-sans-3 padding-bottom-1">Use project theme palettes in your Sketch files</p>
            </a>
          </div>
        </div>

        <h2 class="size-sans-10 margin-top-4 margin-bottom-4 border-top-1px padding-top-2">Using role-based palettes</h2>

        <p class="margin-top-2">Project theme palettes are role-based — assigning colors to four high-level roles that colors can play in your project: <strong>neutral</strong>, <strong>primary</strong>, <strong>secondary</strong>, and <strong>accent</strong>.</p>
        <p>Primary, secondary, and accent colors can be thought of as falling into a proportional 60/30/10 relationship: about 60% of your site’s color would be the primary color family, about 30% would be the secondary color family, and about 10% would be the accent color families (accent warm and accent cool).</p>
        <p>Note that these proportions are for non-neutral colors. In many cases, the neutral text color will be the predominant tone on your site.</p>
        <div class="margin-top-4 margin-bottom-8">
          <div class="row gap-small">
            <div class="col-7 margin-bottom-1">
              <div class="border-bottom-1px size-mono-2 padding-bottom-05">60%</div>
            </div>
            <div class="col-4">
              <div class="border-bottom-1px size-mono-2 padding-bottom-05">30%</div>
            </div>
            <div class="col-1">
              <div class="border-bottom-1px size-mono-2 padding-bottom-05">10%</div>
            </div>
          </div>
          <div class="row gap-small">
            <div class="col-7">
              <div class="height-2 bg-blue-70v"></div>
            </div>
            <div class="col-4">
              <div class="height-2 bg-mint-50"></div>
            </div>
            <div class="col-1 row gap-small">
              <div class="col-fill">
                <div class="height-2 bg-orange-30v"></div>
              </div>
              <div class="col-fill">
                <div class="height-2 bg-cyan-20v"></div>
              </div>
            </div>
          </div>
          <div class="row gap margin-top-2">
            <div class="col-auto row flex-align-center">
              <div class="col-auto circle-2 bg-blue-70v margin-right-1"></div>
              <div class="line-height-sans-1 size-sans-4 font-700 padding-top-2px ">Primary</div>
            </div>
            <div class="col-auto row flex-align-center">
              <div class="col-auto circle-2 bg-mint-50 margin-right-1"></div>
              <div class="line-height-sans-1 size-sans-4 font-700 padding-top-2px ">Secondary</div>
            </div>
            <div class="col-auto row flex-align-center">
              <div class="col-auto circle-2 bg-orange-30v margin-right-1"></div>
              <div class="line-height-sans-1 size-sans-4 font-700 padding-top-2px ">Accent warm</div>
            </div>
            <div class="col-auto row flex-align-center">
              <div class="col-auto circle-2 bg-cyan-20v margin-right-1"></div>
              <div class="line-height-sans-1 size-sans-4 font-700 padding-top-2px ">Accent cool</div>
            </div>
          </div>
        </div>
        <ul>
          <li>A <strong>neutral color</strong> is often used for text and is typically <code>black</code>, <code>black-cool</code> or <code>black-warm</code>. Most of the readable content on your website will be neutral.</li>
          <li>A <strong>primary color</strong> is the hue family used for about 60% of your site’s color. This tends to be the color most associated with identity, and the color used for buttons and other primary actionable items.</li>
          <li>A <strong>secondary color</strong> is the hue family used for about 30% of your site’s color. This hue is meant to support the primary color and distinguish alternate actions. Use a secondary color for callouts, pullquotes, or some headers to balance or harmonize with the primary color, and to add meaningful differentiation.</li>
          <li>An <strong>accent color</strong> is meant to draw attention. Use accent colors sparingly. They tend to follow a boy-who-cried-wolf rule: the more you use it, the less attention each usage captures.</li>
        </ul>

        <p>Here’s an example of how these might work together:</p>

        <aside class="bg-black-warm-3 padding-3 margin-y-4 radius-sm">
          <div class="row gap-lg">
            <div class="col-4">
              <figure class="margin-0 display-block">
                <img class="maxw-full display-block margin-left-auto" src="{{ '/assets/img//project-theme-palette-example.svg' | relative_url }}" alt="An example of the 6-30-10 principle applied to a project theme">
              </figure>
            </div>
            <div class="col-fill">
              <p class="margin-top-0 size-sans-6 font-400">The <strong>primary</strong> color family of <code class="bg-blue-70v color-white">Blue</code> occupies the majority of the non-neutral color on the page.</p>
              <p class="border-top margin-top-1 padding-top-1 size-sans-6 font-400">The <strong>secondary</strong> color family of <code class="bg-mint-50 color-white">Mint</code> functions as a background color for an occasional content type.</p>
              <p class="border-top margin-top-1 padding-top-1 size-sans-6 font-400">The <strong>warm and cool accent color families</strong> of <code class="bg-orange-40v color-black-90">Orange</code> and <code class="bg-cyan-20v color-black-90">Cyan</code> serve as special call-to-action buttons and headings for special content.</p>
              <p class="border-top margin-top-1 padding-top-1 size-sans-6 font-400"><strong>Neutral</strong> <code class="bg-black-90 color-white">Black</code> is the color family of most text.</p>
            </div>
          </div>
        </aside>

        <h2 class="size-sans-10 margin-y-4 border-top-1px padding-top-2">Project theme palette grades</h2>
        <p>Each project theme palette include the five theme color families we’ve discussed (primary, secondary, accent warm, accent cool, and neutral) in a range of relative grades from <code>lightest</code> to <code>darker</code>, plus a <code>vivid</code> variant. No color family includes all these grades and variants. The following chart shows the available families and grades of a project theme palette in more detail.</p>
        <div class="row gap">
          <div class="col-6">
            <div class="margin-top-3 border radius-base padding-2">
              <h4 class="margin-0 size-sans-8">Primary</h4>
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Lightest</div>
                  <div class="col-fit margin-left-auto">Grade 1–5</div>
                </div>
                <div class="height-4 display-flex flex-align-center  margin-top-05">
                  <div class="margin-x-auto circle-2px bg-black-90"></div>
                </div><!-- blank -->
                <ul class="swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">—</span></li>
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">—</span></li>
                </ul>
              </div><!-- color -->
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Lighter</div>
                  <div class="col-fit margin-left-auto">Grade 10–20</div>
                </div>
                <div class="height-4 display-flex flex-align-center bg-blue-10 margin-top-05">
                  <div class="margin-x-auto circle-2px bg-black-90 display-none"></div>
                </div>
                <ul class="swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-primary-lighter</span></li>
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(primary, lighter)</span></li>
                </ul>
              </div><!-- color -->
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Light</div>
                  <div class="col-fit margin-left-auto">Grade 30–40</div>
                </div>
                <div class="height-4 display-flex flex-align-center bg-blue-30 margin-top-05">
                  <div class="margin-x-auto circle-2px bg-black-90 display-none"></div>
                </div>
                <ul class="swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-primary-light</span></li>
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(primary, light)</span></li>
                </ul>
              </div><!-- color -->
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Base</div>
                  <div class="col-fit margin-left-auto">Grade 40–60</div>
                </div>
                <div class="height-4 display-flex flex-align-center bg-blue-50 margin-top-05">
                  <div class="margin-x-auto circle-2px bg-black-90 display-none"></div>
                </div>
                <ul class="swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-primary-base</span></li>
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(primary, base)</span></li>
                </ul>
              </div><!-- color -->
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Vivid</div>
                  <div class="col-fit margin-left-auto">Grade 20v-60v</div>
                </div>
                <div class="height-4 display-flex flex-align-center bg-blue-50v margin-top-05">
                  <div class="margin-x-auto circle-2px bg-black-90 display-none"></div>
                </div>
                <ul class="swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-primary-vivid</span></li>
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(primary, vivid)</span></li>
                </ul>
              </div><!-- color -->
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Dark</div>
                  <div class="col-fit margin-left-auto">Grade 60-70</div>
                </div>
                <div class="height-4 display-flex flex-align-center bg-blue-70 margin-top-05">
                  <div class="margin-x-auto circle-2px bg-black-90 display-none"></div>
                </div>
                <ul class="swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-primary-large</span></li>
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(primary, large)</span></li>
                </ul>
              </div><!-- color -->
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Darker</div>
                  <div class="col-fit margin-left-auto">Grade 80–100</div>
                </div>
                <div class="height-4 display-flex flex-align-center bg-blue-90 margin-top-05">
                  <div class="margin-x-auto circle-2px bg-black-90 display-none"></div>
                </div>
                <ul class="swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-primary-darker</span></li>
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(primary, darker)</span></li>
                </ul>
              </div><!-- color -->
            </div><!-- card -->
          </div><!-- column -->
          <div class="col-6">
            <div class="margin-top-3 border radius-base padding-2">
              <h4 class="margin-0 size-sans-8">Secondary</h4>
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Lightest</div>
                  <div class="col-fit margin-left-auto">Grade 1–5</div>
                </div>
                <div class="height-4 display-flex flex-align-center  margin-top-05">
                  <div class="margin-x-auto circle-2px bg-black-90"></div>
                </div><!-- blank -->
                <ul class="swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">—</span></li>
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">—</span></li>
                </ul>
              </div><!-- color -->
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Lighter</div>
                  <div class="col-fit margin-left-auto">Grade 10–20</div>
                </div>
                <div class="height-4 display-flex flex-align-center margin-top-05">
                  <div class="margin-x-auto circle-2px bg-black-90"></div>
                </div>
                <ul class="swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">—</span></li>
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">—</span></li>
                </ul>
              </div><!-- color -->
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Light</div>
                  <div class="col-fit margin-left-auto">Grade 30–40</div>
                </div>
                <div class="height-4 display-flex flex-align-center bg-mint-30 margin-top-05">
                  <div class="margin-x-auto circle-2px bg-black-90 display-none"></div>
                </div>
                <ul class="swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-secondary-light</span></li>
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(secondary, light)</span></li>
                </ul>
              </div><!-- color -->
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Base</div>
                  <div class="col-fit margin-left-auto">Grade 40–60</div>
                </div>
                <div class="height-4 display-flex flex-align-center bg-mint-50 margin-top-05">
                  <div class="margin-x-auto circle-2px bg-black-90 display-none"></div>
                </div>
                <ul class="swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-secondary-base</span></li>
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(secondary, base)</span></li>
                </ul>
              </div><!-- color -->
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Vivid</div>
                  <div class="col-fit margin-left-auto">Grade 20v-60v</div>
                </div>
                <div class="height-4 display-flex flex-align-center bg-mint-cool-40v margin-top-05">
                  <div class="margin-x-auto circle-2px bg-black-90 display-none"></div>
                </div>
                <ul class="swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-secondary-vivid</span></li>
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(secondary, vivid)</span></li>
                </ul>
              </div><!-- color -->
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Dark</div>
                  <div class="col-fit margin-left-auto">Grade 60-70</div>
                </div>
                <div class="height-4 display-flex flex-align-center bg-mint-70 margin-top-05">
                  <div class="margin-x-auto circle-2px bg-black-90 display-none"></div>
                </div>
                <ul class="swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-secondary-dark</span></li>
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(secondary, dark)</span></li>
                </ul>
              </div><!-- color -->
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Darker</div>
                  <div class="col-fit margin-left-auto">Grade 80–100</div>
                </div>
                <div class="height-4 display-flex flex-align-center margin-top-05">
                  <div class="margin-x-auto circle-2px bg-black-90"></div>
                </div>
                <ul class="swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">—</span></li>
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">—</span></li>
                </ul>
              </div><!-- color -->
            </div><!-- card -->
          </div><!-- column -->

          <div class="col-6">
            <div class="margin-top-3 border radius-base padding-2">
              <h4 class="margin-0 size-sans-8">Accent warm</h4>
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Base</div>
                  <div class="col-fit margin-left-auto">Grade 20v–50v</div>
                </div>
                <div class="height-4 display-flex flex-align-center bg-orange-40v margin-top-05">
                  <div class="margin-x-auto circle-2px bg-black-90 display-none"></div>
                </div>
                <ul class="swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-accent-warm-base</span></li>
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(accent-warm, base)</span></li>
                </ul>
              </div><!-- color -->
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Dark</div>
                  <div class="col-fit margin-left-auto">Grade 40–60</div>
                </div>
                <div class="height-4 display-flex flex-align-center bg-orange-50v margin-top-05">
                  <div class="margin-x-auto circle-2px bg-black-90 display-none"></div>
                </div>
                <ul class="swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-accent-warm-dark</span></li>
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(accent-warm, dark)</span></li>
                </ul>
              </div><!-- color -->
            </div><!-- card -->
          </div><!-- column -->
          <div class="col-6">
            <div class="margin-top-3 border radius-base padding-2">
              <h4 class="margin-0 size-sans-8">Accent cool</h4>
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Base</div>
                  <div class="col-fit margin-left-auto">Grade 20v–50v</div>
                </div>
                <div class="height-4 display-flex flex-align-center bg-cyan-20v margin-top-05">
                  <div class="margin-x-auto circle-2px bg-black-90 display-none"></div>
                </div>
                <ul class="swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-accent-cool-base</span></li>
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(accent-cool, base)</span></li>
                </ul>
              </div><!-- color -->
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Dark</div>
                  <div class="col-fit margin-left-auto">Grade 40–60</div>
                </div>
                <div class="height-4 display-flex flex-align-center bg-cyan-40v margin-top-05">
                  <div class="margin-x-auto circle-2px bg-black-90 display-none"></div>
                </div>
                <ul class="swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-accent-cool-dark</span></li>
                  <li class="margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(accent-cool, dark)</span></li>
                </ul>
              </div><!-- color -->
            </div><!-- card -->
          </div><!-- column -->
          <div class="col-12">
            <div class="margin-top-3 border radius-base padding-2 bg-white">
              <h4 class="margin-0 size-sans-8">Neutral</h4>
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Lightest</div>
                  <div class="col-fit margin-left-auto">Grade 0–5</div>
                </div>
                <div class="height-4 display-flex flex-align-center margin-top-05 bg-white-1">
                  <div class="margin-x-auto circle-2px bg-black-90 display-none"></div>
                </div>
                <ul class="row swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="col-auto margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-neutral-lightest</span></li>
                  <li class="col-auto margin-left-auto margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(neutral, lightest)</span></li>
                </ul>
              </div><!-- color -->
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Lighter</div>
                  <div class="col-fit margin-left-auto">Grade 10–20</div>
                </div>
                <div class="height-4 display-flex flex-align-center margin-top-05 bg-black-10">
                </div>
                <ul class="row swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="col-auto margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-neutral-lighter</span></li>
                  <li class="col-auto margin-left-auto margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(neutral, lighter)</span></li>
                </ul>
              </div><!-- color -->
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Light</div>
                  <div class="col-fit margin-left-auto">Grade 20–30</div>
                </div>
                <div class="height-4 display-flex flex-align-center margin-top-05 bg-black-30">
                </div>
                <ul class="row swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="col-auto margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-neutral-light</span></li>
                  <li class="col-auto margin-left-auto margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(neutral, light)</span></li>
                </ul>
              </div><!-- color -->
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Base</div>
                  <div class="col-fit margin-left-auto">Grade 40–60</div>
                </div>
                <div class="height-4 display-flex flex-align-center margin-top-05 bg-black-50">
                </div>
                <ul class="row swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="col-auto margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-neutral-base</span></li>
                  <li class="col-auto margin-left-auto margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(neutral, base)</span></li>
                </ul>
              </div><!-- color -->
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Dark</div>
                  <div class="col-fit margin-left-auto">Grade 60–70</div>
                </div>
                <div class="height-4 display-flex flex-align-center margin-top-05 bg-black-70">
                </div>
                <ul class="row swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="col-auto margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-neutral-dark</span></li>
                  <li class="col-auto margin-left-auto margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(neutral, dark)</span></li>
                </ul>
              </div><!-- color -->
              <div>
                <div class="row size-sans-1 border-top border-black-10 margin-top-2 padding-top-105">
                  <div class="col-fit font-700">Darker</div>
                  <div class="col-fit margin-left-auto">Grade 80–100</div>
                </div>
                <div class="height-4 display-flex flex-align-center margin-top-05 bg-black-90">
                </div>
                <ul class="row swatch-info list-reset size-mono-1 margin-top-1">
                  <li class="col-auto margin-y-2px border-0 padding-0"><span class="size-sans-2">Utility suffix:</span> <span class="token">-neutral-darker</span></li>
                  <li class="col-auto margin-left-auto margin-y-2px border-0 padding-0"><span class="size-sans-2">SASS:</span> <span class="token">color(neutral, darker)</span></li>
                </ul>
              </div><!-- color -->
            </div><!-- card -->
          </div><!-- column -->
        </div><!-- row -->

        <h2 class="size-sans-10 margin-y-4 border-top-1px padding-top-2">Palette gallery</h2>
        <p>While it can be simple to create and customize USWDS project theme palettes when your team has dedicated visual design skills, we’re also working to provide strong, practical prebuilt themes designed by visual designers and appropriate for a wide range of needs. Each of the following palettes is available for immediate download, using <a href="#0">the instructions below</a>.</p>
        <p>If you’ve designed a useful project theme palette for your project, consider <a href="#0">contributing it back to USWDS</a> through Github — we’re interested in collecting and presenting new proven project work.</p>

        <div class="row gap margin-top-4">
          <div class="col-6">
            <div class="palette-card border radius-sm padding-1 margin-top-3">
              <div class="row gap-2px">
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-blue-10 height-1 margin-top-2px"></div>
                  <div class="bg-blue-30 height-1 margin-top-2px"></div>
                  <div class="bg-blue-50 height-1 margin-top-2px"></div>
                  <div class="bg-blue-40v height-1 margin-top-2px"></div>
                  <div class="bg-blue-70 height-1 margin-top-2px"></div>
                  <div class="bg-blue-90 height-1 margin-top-2px"></div>
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-mint-30 height-1 margin-top-2px"></div>
                  <div class="bg-mint-50 height-1 margin-top-2px"></div>
                  <div class="bg-mint-cool-40v height-1 margin-top-2px"></div>
                  <div class="bg-mint-60 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-orange-40v height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-orange-50v height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-cyan-20v height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-cyan-40v height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="bg-white-1 height-1"></div>
                  <div class="bg-black-5 height-1 margin-top-2px"></div>
                  <div class="bg-black-30 height-1 margin-top-2px"></div>
                  <div class="bg-black-50 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-black-80 height-1 margin-top-2px"></div>
                  <div class="bg-black-80 height-1 margin-top-2px"></div>
                </div><!-- family-column -->
              </div> <!-- this-palette -->
              <h4 class="size-sans-5 margin-bottom-1 line-height-sans-2">Onondaga</h4>
              <ul class="list-reset row gap size-sans-1 font-400 margin-bottom-0 margin-x-0 minh-6 flex-align-flex-start margin-top-05">
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05">professional</li>
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05">young</li>
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05">natural</li>
              </ul><!-- tags -->
              <div class="row margin-top-2 flex-align-center">
                <a href="#0" class="col-auto line-height-sans-1 size-sans-1 font-400 padding-y-1 padding-x-2 bg-black-90 color-white radius-sm no-underline">
                  Download palette ⇣
                </a><!-- palette-button -->
                <a href="#0" class="col-auto margin-left-auto color-black-90 size-sans-1 underline line-height-sans-1">See more examples</a>
              </div><!-- palette-actions -->
            </div><!-- palette-card -->
          </div>

          <!-- * * * * * * =================================== -->
          <div class="col-6">
            <div class="palette-card border radius-sm padding-1 margin-top-3">
              <div class="row gap-2px">
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-blue-10 height-1 margin-top-2px"></div>
                  <div class="bg-blue-40 height-1 margin-top-2px"></div>
                  <div class="bg-blue-50 height-1 margin-top-2px"></div>
                  <div class="bg-blue-60v height-1 margin-top-2px"></div>
                  <div class="bg-blue-70v height-1 margin-top-2px"></div>
                  <div class="bg-blue-90 height-1 margin-top-2px"></div>
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-red-20v height-1 margin-top-2px"></div>
                  <div class="bg-red-50 height-1 margin-top-2px"></div>
                  <div class="bg-red-50v height-1 margin-top-2px"></div>
                  <div class="bg-red-60 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-gold-10v height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-gold-40 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-cyan-30v height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-cyan-50 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="bg-white height-1"></div>
                  <div class="bg-black-10 height-1 margin-top-2px"></div>
                  <div class="bg-black-30 height-1 margin-top-2px"></div>
                  <div class="bg-black-50 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-black-70 height-1 margin-top-2px"></div>
                  <div class="bg-blacksolid-90 height-1 margin-top-2px"></div>
                </div><!-- family-column -->
              </div> <!-- this-palette -->
              <h4 class="size-sans-5 margin-bottom-1 line-height-sans-2">Federal <span class="font-300">(Original USWDS)</span></h4>
              <ul class="list-reset row gap size-sans-1 font-400 margin-bottom-0 margin-x-0 minh-6 flex-align-flex-start margin-top-05">
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05">traditional</li>
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05">straightforward</li>
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05">trustworthy</li>
              </ul><!-- tags -->
              <div class="row margin-top-2 flex-align-center">
                <a href="#0" class="col-auto line-height-sans-1 size-sans-1 font-400 padding-y-1 padding-x-2 bg-black-90 color-white radius-sm no-underline">
                  Download palette ⇣
                </a><!-- palette-button -->
                <a href="#0" class="col-auto margin-left-auto color-black-90 size-sans-1 underline line-height-sans-1">See more examples</a>
              </div><!-- palette-actions -->
            </div><!-- palette-card -->
          </div><!-- card column -->

          <!-- * * * * * * =================================== -->
          <div class="col-6">
            <div class="palette-card border radius-sm padding-1 margin-top-3">
              <div class="row gap-2px">
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-indigo-cool-10 height-1 margin-top-2px"></div>
                  <div class="bg-indigo-cool-30 height-1 margin-top-2px"></div>
                  <div class="bg-indigo-cool-60 height-1 margin-top-2px"></div>
                  <div class="bg-indigo-cool-40v height-1 margin-top-2px"></div>
                  <div class="bg-indigo-cool-70 height-1 margin-top-2px"></div>
                  <div class="bg-indigo-cool-90 height-1 margin-top-2px"></div>
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-red-warm-20v height-1 margin-top-2px"></div>
                  <div class="bg-red-warm-40v height-1 margin-top-2px"></div>
                  <div class="bg-red-warm-50v height-1 margin-top-2px"></div>
                  <div class="bg-red-warm-60 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-yellow-10v height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-yellow-20v height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-blue-30v height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-blue-50v height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="bg-black-cool-1 height-1"></div>
                  <div class="bg-black-cool-10 height-1 margin-top-2px"></div>
                  <div class="bg-black-cool-30 height-1 margin-top-2px"></div>
                  <div class="bg-black-cool-50 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-black-cool-70 height-1 margin-top-2px"></div>
                  <div class="bg-black-cool-90 height-1 margin-top-2px"></div>
                </div><!-- family-column -->
              </div> <!-- this-palette -->
              <h4 class="size-sans-5 margin-bottom-1 line-height-sans-2 margin-bottom-0">Pennant</h4>
              <ul class="list-reset row gap size-sans-1 font-400 margin-bottom-0 margin-x-0 minh-6 flex-align-flex-start margin-top-05">
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05 margin-top-05">solid</li>
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05 margin-top-05">friendly</li>
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05 margin-top-05">energetic</li>
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05 margin-top-05">outgoing</li>
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05 margin-top-05">all-American</li>
              </ul><!-- tags -->
              <div class="row margin-top-2 flex-align-center">
                <a href="#0" class="col-auto line-height-sans-1 size-sans-1 font-400 padding-y-1 padding-x-2 bg-black-90 color-white radius-sm no-underline">
                  Download palette ⇣
                </a><!-- palette-button -->
                <a href="#0" class="col-auto margin-left-auto color-black-90 size-sans-1 underline line-height-sans-1">See more examples</a>
              </div><!-- palette-actions -->
            </div><!-- palette-card -->
          </div><!-- card-column -->

          <!-- * * * * * * =================================== -->
          <div class="col-6">
            <div class="palette-card border radius-sm padding-1 margin-top-3">
              <div class="row gap-2px">
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-indigo-20 height-1 margin-top-2px"></div>
                  <div class="bg-indigo-30 height-1 margin-top-2px"></div>
                  <div class="bg-indigo-50 height-1 margin-top-2px"></div>
                  <div class="bg-indigo-50v height-1 margin-top-2px"></div>
                  <div class="bg-indigo-70 height-1 margin-top-2px"></div>
                  <div class="bg-indigo-90 height-1 margin-top-2px"></div>
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-black-cool-30 height-1 margin-top-2px"></div>
                  <div class="bg-black-cool-50 height-1 margin-top-2px"></div>
                  <div class="bg-blue-warm-40 height-1 margin-top-2px"></div>
                  <div class="bg-black-cool-70 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-indigo-cool-20 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-indigo-cool-40 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-blue-warm-40 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-blue-warm-50 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="bg-black-warm-3 height-1"></div>
                  <div class="bg-black-warm-10 height-1 margin-top-2px"></div>
                  <div class="bg-black-warm-30 height-1 margin-top-2px"></div>
                  <div class="bg-black-warm-50 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-black-warm-70 height-1 margin-top-2px"></div>
                  <div class="bg-black-warm-90 height-1 margin-top-2px"></div>
                </div><!-- family-column -->
              </div> <!-- this-palette -->
              <h4 class="size-sans-5 margin-bottom-1 line-height-sans-2">Marine</h4>
              <ul class="list-reset row gap size-sans-1 font-400 margin-bottom-0 margin-x-0 minh-6 flex-align-flex-start margin-top-05">
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05">no nonsense</li>
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05">professional</li>
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05">conservative</li>
              </ul><!-- tags -->
              <div class="row margin-top-2 flex-align-center">
                <a href="#0" class="col-auto line-height-sans-1 size-sans-1 font-400 padding-y-1 padding-x-2 bg-black-90 color-white radius-sm no-underline">
                  Download palette ⇣
                </a><!-- palette-button -->
                <a href="#0" class="col-auto margin-left-auto color-black-90 size-sans-1 underline line-height-sans-1">See more examples</a>
              </div><!-- palette-actions -->
            </div><!-- palette-card -->
          </div><!-- card-column -->

          <!-- * * * * * * =================================== -->
          <div class="col-6">
            <div class="palette-card border radius-sm padding-1 margin-top-3 display-flex flex-column">
              <h4 class="size-sans-5 margin-bottom-05 line-height-sans-2 order-2">Cascade</h4>
              <div class="row gap-2px order-first">
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-mint-cool-10 height-1 margin-top-2px"></div>
                  <div class="bg-mint-cool-40 height-1 margin-top-2px"></div>
                  <div class="bg-mint-cool-50 height-1 margin-top-2px"></div>
                  <div class="bg-mint-cool-40v height-1 margin-top-2px"></div>
                  <div class="bg-mint-cool-70 height-1 margin-top-2px"></div>
                  <div class="bg-mint-cool-90 height-1 margin-top-2px"></div>
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-mint-30 height-1 margin-top-2px"></div>
                  <div class="bg-mint-40 height-1 margin-top-2px"></div>
                  <div class="bg-mint-30v height-1 margin-top-2px"></div>
                  <div class="bg-mint-50 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-gold-20 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-gold-40 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-cyan-20 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-cyan-40v height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="bg-black-cool-2 height-1"></div>
                  <div class="bg-black-cool-10 height-1 margin-top-2px"></div>
                  <div class="bg-black-cool-30 height-1 margin-top-2px"></div>
                  <div class="bg-black-cool-50 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-black-cool-70 height-1 margin-top-2px"></div>
                  <div class="bg-black-cool-90 height-1 margin-top-2px"></div>
                </div><!-- family-column -->
              </div> <!-- this-palette -->
              <ul class="order-3 list-reset row gap size-sans-1 font-400 margin-bottom-0 margin-x-0 minh-6 flex-align-flex-start margin-top-05">
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05 margin-top-05">fresh</li>
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05 margin-top-05">compassionate</li>
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05 margin-top-05">energetic</li>
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05 margin-top-05">healthy</li>
              </ul><!-- tags -->
              <div class="order-4 row margin-top-2 flex-align-center">
                <a href="#0" class="col-auto line-height-sans-1 size-sans-1 font-400 padding-y-1 padding-x-2 bg-black-90 color-white radius-sm no-underline">
                  Download palette ⇣
                </a><!-- palette-button -->
                <a href="#0" class="col-auto margin-left-auto color-black-90 size-sans-1 underline line-height-sans-1">See more examples</a>
              </div><!-- palette-actions -->
            </div><!-- palette-card -->
          </div><!-- card-column -->

          <!-- * * * * * * =================================== -->
          <div class="col-6">
            <div class="palette-card border radius-sm padding-1 margin-top-3 display-flex flex-column">
              <h4 class="size-sans-5 margin-bottom-05 line-height-sans-2 order-2">Columbia</h4>
              <div class="row gap-2px order-first">
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-blue-10 height-1 margin-top-2px"></div>
                  <div class="bg-blue-30 height-1 margin-top-2px"></div>
                  <div class="bg-blue-40 height-1 margin-top-2px"></div>
                  <div class="bg-blue-40v height-1 margin-top-2px"></div>
                  <div class="bg-blue-70 height-1 margin-top-2px"></div>
                  <div class="bg-blue-90 height-1 margin-top-2px"></div>
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-gold-40 height-1 margin-top-2px"></div>
                  <div class="bg-gold-60 height-1 margin-top-2px"></div>
                  <div class="bg-gold-40v height-1 margin-top-2px"></div>
                  <div class="bg-gold-80 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-gold-20 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-gold-40 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="height-1 display-flex flex-align-center">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-blue-warm-40 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-blue-warm-50 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                </div><!-- family-column -->
                <!-- ========================================= -->
                <div class="col-fill">
                  <div class="bg-black-cool-1 height-1"></div>
                  <div class="bg-black-cool-5 height-1 margin-top-2px"></div>
                  <div class="bg-black-cool-30 height-1 margin-top-2px"></div>
                  <div class="bg-black-cool-50 height-1 margin-top-2px"></div>
                  <div class="height-1 display-flex flex-align-center margin-top-2px">
                    <div class="margin-x-auto circle-2px bg-black-90"></div>
                  </div><!-- blank -->
                  <div class="bg-black-cool-70 height-1 margin-top-2px"></div>
                  <div class="bg-black-cool-90 height-1 margin-top-2px"></div>
                </div><!-- family-column -->
              </div> <!-- this-palette -->
              <ul class="order-3 list-reset row gap size-sans-1 font-400 margin-bottom-0 margin-x-0 minh-6 flex-align-flex-start margin-top-05">
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05">clean</li>
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05">fresh</li>
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05">earthy</li>
                <li class="col-auto border-0 bg-black-warm-4 radius-sm padding-y-05 padding-x-1 line-height-sans-1 margin-right-05 margin-top-05">earnest</li>
              </ul><!-- tags -->
              <div class="order-4 row margin-top-2 flex-align-center">
                <a href="#0" class="col-auto line-height-sans-1 size-sans-1 font-400 padding-y-1 padding-x-2 bg-black-90 color-white radius-sm no-underline">
                  Download palette ⇣
                </a><!-- palette-button -->
                <a href="#0" class="col-auto margin-left-auto color-black-90 size-sans-1 underline line-height-sans-1">See more examples</a>
              </div><!-- palette-actions -->
            </div><!-- palette-card -->
          </div><!-- card-column -->

        </div><!-- palettes -->

        <h2 class="size-sans-10 margin-y-4 border-top-1px padding-top-2">Downloading and using palettes</h2>
        <p>Selecting <strong>Download palette</strong> will download a small SCSS file named <code>_theme-palette-[palette-name].scss</code>. Its contents set the USWDS variables necessary to use these colors in your project. (Developers, this is the same as manually setting these values in <code>_uswds-project-settings.scss</code>.)</p>
        <pre class="maxw-full bg-black-warm-4  padding-2 white-space-pre-wrap margin-y-4">
<code class="size-mono-1 padding-0">&lt;!-- * * * * * * =================================== -->
// USWDS Project theme palette
// _theme-palette-onondaga.scss

$neutral:                         black;
$theme-color-neutral-lightest:    $neutral, 2;
$theme-color-neutral-lighter:     $neutral, 10;
$theme-color-neutral-light:       $neutral, 30;
$theme-color-neutral-base:        $neutral, 50;
$theme-color-neutral-dark:        $neutral, 70;
$theme-color-neutral-darker:      $neutral, 70;

$primary:                         blue;
$theme-color-primary-lighter:     $primary, 10;
$theme-color-primary-light:       $primary, 30;
$theme-color-primary-base:        $primary, 50;
$theme-color-primary-vivid:       $primary, 50, vivid;
$theme-color-primary-dark:        $primary, 70;
$theme-color-primary-darker:      false;

$secondary:                       mint;
$theme-color-secondary-light:     $secondary, 50;
$theme-color-secondary-base:      $secondary, 60;
$theme-color-secondary-vivid:     $secondary, 50, vivid;
$theme-color-secondary-dark:      $secondary, 80;

$accent-warm:                     orange;
$theme-color-accent-warm-base:    $accent-warm, 50, vivid;
$theme-color-accent-warm-dark:    $accent-warm, 50, vivid;

$accent-cool:                     cyan;
$theme-color-accent-cool-base:    $accent-cool, 50, vivid;
$theme-color-accent-cool-dark:    $accent-cool, 50, vivid;</code></pre>

        <p>Move this file to your project’s SASS directory and <code>@import</code> it after your existing project settings and before <code>@import 'uswds'</code>.</p>

<pre class="maxw-full bg-black-warm-4 padding-2 white-space-pre-wrap margin-y-4"><code class="size-mono-1 padding-0">@import 'uswds-project-settings';
@import 'uswds-project-utilities-settings';
@import 'theme-palette-onondaga'; // &lt;-- Add the palette import here.
@import 'uswds';
@import 'uswds-project-custom';
</code></pre>

        <p><strong>Visual designers</strong> we don’t have a solution for providing these palettes in Sketch or Illustator just yet, but we’re working on it!</p>

      </div>
    </div>

  </div><!-- l.container -->
</div><!-- div -->
