document.addEventListener("DOMContentLoaded", function () {
  // Select the form element
  const form = document.querySelector(".needs-validation");

  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      event.preventDefault(); // Prevent form submission
      event.stopPropagation();
    }
    form.classList.add("was-validated"); // Apply Bootstrap validation styles
  });
});