const apikey = "RcRegrIbysXDFxZTPXbug6AhBlrzrfuAuNxQnc7c";
let urlapod = "https://api.nasa.gov/planetary/apod?api_key="+apikey;
let urlmars = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="


const apod = document.getElementById("res-apod");
const mars = document.getElementById("res-mars");
const planets = document.getElementById("res-planets");

window.onload = function() {
    fetch(urlapod).then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    }).then(data => {
        apod.innerHTML = `<h3>${data.title}</h3><p>${data.explanation}</p><br><br><img src="${data.url}" alt="${data.title}">`;
    })


    let sol = Math.floor(Math.random() * 1000) + 1;
    urlmars += sol + "&api_key=" + apikey;
    fetch(urlmars).then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    }).then(data => {
        mars.innerHTML = `<h3>Photos from Mars Rover Curiosity</h3><br><br><br><br><br><br><img src="${data.photos[0].img_src}" alt="Mars Photo">`;
    })

 

// Fetch planet images
fetch('https://images-api.nasa.gov/search?q=planets')
  .then(response => response.json())
  .then(data => {
    const items = data.collection.items;
    if (items.length > 0) {
      const randomIndex = Math.floor(Math.random() * items.length);
      const planetImage = items[randomIndex].links[0].href;
      planets.innerHTML = `<br><br><br><br><br><br><br><img src="${planetImage}" alt="Planet Image">`;
    } else {
      planets.innerHTML = '<p>No planet images found.</p>';
    }
  })
  .catch(error => console.error('Error fetching planet images:', error));
}