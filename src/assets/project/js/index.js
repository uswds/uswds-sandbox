import modal from "@uswds/uswds/js/usa-modal";

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const myProjectModal = document.querySelectorAll(".usa-modal");

    modal.on(myProjectModal);
  });
})();
