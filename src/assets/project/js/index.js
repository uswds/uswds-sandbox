import modal from "@uswds/uswds/js/usa-modal";

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const myProjectModal = document.querySelectorAll(".usa-modal");
    modal.on(myProjectModal);

    // Toggle modal on
    // modal.toggle("example-modal-3");

    // Toggle modal off
    // modal.toggle("example-modal-3");

    // Trigger modal show
    // modal.show("example-modal-3");

    // Trigger modal hide
    // modal.hide("example-modal-3");
  });
})();
