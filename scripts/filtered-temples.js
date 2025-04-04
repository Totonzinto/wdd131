const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    {
      templeName: "Bengaluru India",
      location: "Bengaluru, Karnataka",
      dedicated: "2020, December, 2",
      area: 38670,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/bengaluru-india-temple/bengaluru-india-temple-7886-main.jpg",
    },
    {
      templeName: "Seattle Washington ",
      location: "Washington, united States",
      dedicated: "1980, November, 17-21",
      area:  110000,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/seattle-washington-temple/seattle-washington-temple-55800-main.jpg",
    },
    {
        templeName: "Accra Ghana",
        location: "Accra Ghana",
        dedicated: "2004, January, 11",
        area: 175000,
        imageUrl: "https://churchofjesuschrist.org/imgs/fac2f821c9895e1acd1325cbdb3fa447c4bb4e19/full/500%2C/0/default"
    }
  ];
  
  
  const mainElement = document.querySelector("main");
  const navLinks = document.querySelectorAll("nav a");
  
  
  document.getElementById("currentyear").textContent = new Date().getFullYear(); 

  document.getElementById(
    "lastModified"
  ).textContent = `Last Modified: ${document.lastModified}`;
   
  function displayTemples(templeList) {
    
    mainElement.innerHTML = "";
   
    const templesContainer = document.createElement("div");
    templesContainer.classList.add("temples-container");
  
    
    templeList.forEach((temple) => {
      
      const templeCard = document.createElement("div");
      templeCard.classList.add("temple-card");
      const templeName = document.createElement("h2");
      templeName.textContent = temple.templeName;
  
      const location = document.createElement("p");
      location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
  
      
      const dedicated = document.createElement("p");
      dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
  
     
      const area = document.createElement("p");
      area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;
  
     
      const image = document.createElement("img");
      image.src = temple.imageUrl;
      image.alt = `${temple.templeName} Temple`;
      image.loading = "lazy"; 
  
      
      templeCard.appendChild(templeName);
      templeCard.appendChild(location);
      templeCard.appendChild(dedicated);
      templeCard.appendChild(area);
      templeCard.appendChild(image);
  
     
      templesContainer.appendChild(templeCard);
    });
  
    
    mainElement.appendChild(templesContainer);
  }
  
  function filterTemples(criteria) {
    let filteredTemples;
  
    switch (criteria) {
      case "old":
       
        filteredTemples = temples.filter((temple) => {
          const year = parseInt(temple.dedicated.split(", ")[0]);
          return year < 1900;
        });
        break;
      case "new":
       
        filteredTemples = temples.filter((temple) => {
          const year = parseInt(temple.dedicated.split(", ")[0]);
          return year > 2000;
        });
        break;
      case "large":
        
        filteredTemples = temples.filter((temple) => temple.area > 90000);
        break;
      case "small":
       
        filteredTemples = temples.filter((temple) => temple.area < 10000);
        break;
      default:
       
        filteredTemples = temples;
    }
  
    return filteredTemples;
  }
  
  
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
  
      
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
  
     
      this.classList.add("active");
  
      const criteria = this.textContent.toLowerCase();
  
      const filteredTemples = filterTemples(criteria);
      displayTemples(filteredTemples);
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", () => {
    displayTemples(temples);
   
    navLinks[0].classList.add("active");
  });
  