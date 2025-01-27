---
layout: zebra
form: "book-tour"
age_disclaimer: false
breadcrumb:
  control_group: true
  items:
    - label: Tours
    - label: Book a tour
      current: true
date_picker:
  error_message: "Enter or choose the date that you'd like to reserve a tour."
character_count:
  # Will hardcode error_message in template because there isn't support for custom error messages.
  # https://github.com/uswds/uswds/issues/6317
  # value: "We will need wheelchair access such as a ramp and enough room to maneuver"
  error_message: "Your list of accommodations must be 50 characters or less."
---
