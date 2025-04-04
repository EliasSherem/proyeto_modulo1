let url = "https://images-api.nasa.gov/search?q=planets";
let salida = ""
window.onload = function() {
    fetch(url).then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    }).then(data => {
        const items = data.collection.items;
        console.log(items);
        items.forEach(element => {
            salida += `<div class="card"><img src="${element.links[0].href}" alt="Planet Image"><p class="text-container">${element.data[0].description}</p></div>`;
        });
        document.getElementById("card-container").innerHTML =salida;
})}