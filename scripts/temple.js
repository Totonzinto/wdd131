const currentDate = new Date();
const lastModified = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

document.write(`Last Modified: ${lastModified}`);


//hamburger button event
const hamButton = document.querySelector(".ham-button");
const menu = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("active");
    menu.classList.toggle("active");
});