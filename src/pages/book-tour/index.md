---
layout: zebra
age_disclaimer: false
alert_type: false
alert_before_banner: false
form: "book-tour"
breadcrumb:
  items:
    - label: Tours
    - label: Book a tour
      current: true
---

<!--
  Breadcrumb override.
  We want to test default breadcrumb on this page and a modified version on `./error.md`.
-->
<style>
  /* Default breadcrumb breakpoint. */
  @media (max-width: 29.99em) {

    .usa-breadcrumb__list-item {
      position: absolute;
      left: -999em;
      right: auto;
      display: inline;
    }

    .usa-breadcrumb__list-item:nth-last-child(2) {
      position: static;

      &::after {
        content: none;
      }
    }

    .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link{
      padding-left:calc(2ex + 0px);
      text-indent:calc((2ex + 0px) * -1);
      display:inline-block;
      padding-bottom:1rem;
      padding-top:1rem;
    }

      .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link::before {
        background-image: url(../img/usa-icons/arrow_back.svg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 2ex 2ex;
        display: inline-block;
        height: 2ex;
        width: 2ex;
        content: "";
        vertical-align: baseline;
        position: relative;
      }

      @supports ((-webkit-mask:url()) or (mask:url())) {
        .usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link::before {
          background: 0 0;
          background-color: #71767a;
          mask-image: url("/assets/img/usa-icons/arrow_back.svg"),linear-gradient(transparent,transparent);
          -webkit-mask-position: center center;
          mask-position: center center;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: 2ex 2ex;
          mask-size: 2ex 2ex;
          bottom: -.2em;
          height: 2ex;
          position: relative;
          margin-right: 0;
        }
      }
  }
</style>
