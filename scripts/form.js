const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const productNameSelect = document.querySelector("#product-name");

productNameSelect.innerHTML = null;
const option = document.createElement("option");
option.disabled = true;
option.selected = true;
option.value = "";
option.innerHTML = "Select a product... &#9662";

productNameSelect.appendChild(option);

products.forEach(product => {
    const option = document.createElement("option");
    option.id = product.id;
    option.textContent = product.name;

    productNameSelect.appendChild(option);

const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const date = new Date();
year.innerHTML = date.getFullYear();

let lastMod = document.lastModified;
lastModified.innerHTML = `Last Modified: ${lastMod}`;
});

