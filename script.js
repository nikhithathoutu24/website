document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript loaded!");

  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form from submitting
    alert("Form submitted successfully!");
  });
});