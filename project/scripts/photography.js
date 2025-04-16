document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
  }

  
  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-theme");

    
    if (body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

    
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const date = new Date();
year.innerHTML = date.getFullYear();

let lastMod = document.lastModified;
lastModified.innerHTML = `Last Modified: ${lastMod}`;

});

  