document.addEventListener("DOMContentLoaded", function () {
  const dropdownIcon = document.querySelector(".dropdown");
  const dropdownContent = document.querySelector(".dropdown-content");
  dropdownIcon.addEventListener("click", function () {
    dropdownContent.style.display =
      dropdownContent.style.display === "none" ? "flex" : "none";
  });
});
