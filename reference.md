USWDS - Bug: In-Page Navigation does not respect scroll margin
#6164

### Describe the bug

When using a sticky header that takes up 100px of the top viewport, all elements have been given a scroll-margin-top value of 100px. The in-page navigation component seems to override the native browser scroll behavior with its own, therefore ignoring this important CSS property.

### Steps to reproduce the bug

1. Add a 100px high sticky element
2. Add * {scroll-margin-top: 100px;} CSS rule
3. Add in-page nav component
4. Click any nav item and it will scroll to the top of the viewport.


### Expected Behavior

Observable should only scroll to within 100px of the viewport top.

### Related code

    * {
        scroll-margin-top: 100px;
    }

### Screenshots

_No response_

### System setup

_No response_

### Additional context

_No response_

### Code of Conduct

- [x] I agree to follow this project's [Code of Conduct](https://designsystem.digital.gov/about/community/#community-conduct).
- [x] I checked the [current issues](https://github.com/uswds/uswds/issues?q=is%3Aissue+is%3Aopen+label%3A%22Type%3A+Bug%22) for duplicate bug reports.


Other notes:
"data-scroll-offset is available for this."
