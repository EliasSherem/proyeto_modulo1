let apikey = "RcRegrIbysXDFxZTPXbug6AhBlrzrfuAuNxQnc7c";
let url = "https://api.nasa.gov/planetary/apod?api_key="+apikey;

const apod = document.getElementById("res-apod");
const mars = document.getElementById("res-mars");
const exoplanet = document.getElementById("res-exoplanets");

window.onload = function() {
    fetch(url).then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    }).then(data => {
        apod.innerHTML = `<h3>${data.title}</h3><p>${data.explanation}</p><img src="${data.url}" alt="${data.title}">`;
    })
}