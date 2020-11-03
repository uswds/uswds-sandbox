---
layout: microsite
---

<main id="main-content">
  {% include hero.html %}

  {% include card-bg-primary.html %}

  <div class="grid-container">
    <article id="intro" class="microsite-article grid-row grid-gap">
      <!-- Article main content -->
      <div class="microsite-article__main tablet:grid-col-8">
        <h1>Welcome to microsite</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sed vero iure ad tempore placeat maxime commodi, neque delectus expedita. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, veritatis eaque! Aspernatur assumenda dolore, adipisci quaerat eius cum repellat doloremque.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos maiores autem aspernatur fugit beatae quo laboriosam vitae quibusdam quas. Voluptates minus corporis a esse quisquam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur a nam velit fuga saepe? Culpa unde quaerat veritatis, minima deserunt quasi doloremque modi laboriosam quibusdam sed ducimus. Nulla, voluptas ullam!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate placeat quia odit, repellat rerum aliquid?
        </p>
        <figure>
          <img src="assets/img/microsite-article-screenshot.png" alt="">
          <figcaption>
            This is a caption. It spans multiple lines. Caption caption caption caption. Caption caption caption. Aliquam eget arcu non metus iaculis blandit volutpat at dolor. Donec ipsum nunc, lobortis id feugiat sit amet, facilisis ut arcu. Sed a aliquet sapien, at eleifend nisi.
          </figcaption>
        </figure>
        <p>
          Integer id sagittis purus. Curabitur semper tincidunt dui eget tempus. Suspendisse vel tortor aliquet, commodo erat vel, commodo eros. Pellentesque commodo, arcu nec egestas tristique, risus sem rutrum nunc, ac molestie nibh leo vel ipsum. Nullam lacinia sem eros, vel imperdiet massa ultrices quis. Sed porta bibendum nisi, eu maximus metus dapibus sit amet. Proin in efficitur nibh, nec malesuada est. Nunc iaculis felis ut sollicitudin aliquet. Curabitur eu convallis est. Suspendisse malesuada, dui a congue efficitur, urna ex imperdiet ante, ut sollicitudin felis mauris eget eros. Morbi sit amet turpis sodales, pretium orci sed, tincidunt nisl. Praesent imperdiet neque ut diam porttitor, sed consectetur augue pellentesque. Praesent ac mattis est. Aliquam elit ante, suscipit eu urna at, malesuada imperdiet ex. Nam aliquam nulla ante, ac molestie eros laoreet nec. Proin ornare dolor id tellus consectetur, eu pretium orci pellentesque. Cras sed magna sed ipsum faucibus accumsan. Nulla viverra pellentesque felis, non hendrerit nunc vehicula at. Phasellus neque tellus, efficitur quis vulputate id, pretium sit amet dui. Donec ultricies finibus congue. Suspendisse posuere lacus et justo tempor, nec tincidunt quam elementum. Maecenas auctor et tellus vitae bibendum. Integer tincidunt elit dui, sed volutpat tellus tincidunt at. Donec nec ligula nec urna laoreet feugiat. Integer vel eleifend risus, finibus sodales mi. Nunc ac bibendum dolor.
        </p>
      </div>
      <!-- Article aside -->
      <aside class="microsite-article__aside tablet:grid-col-4">
        {% include news-and-updates.html %}
      </aside>
    </article>
  </div>
</main>
