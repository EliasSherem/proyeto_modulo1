let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=";
document.getElementById('mars-form').addEventListener('submit', function(event) {
    document.getElementById('card-container').style.display = 'flex';
    event.preventDefault();
})

document.getElementById('submit').addEventListener('click', function() {
    const sol = document.getElementById('sol').value;
    console.log(sol);
    url += sol + "&api_key=RcRegrIbysXDFxZTPXbug6AhBlrzrfuAuNxQnc7c";
    fetch(url).then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    }).then(data => {
        const mars = document.getElementById("card-container");
        mars.innerHTML = `<div class="card"><h3>Photos from Mars Rover Curiosity</h3><br><br><img src="${data.photos[0].img_src}" alt="Mars Photo"></div>`;
        const form = document.getElementById('form');
        form.style.display = 'none';
    }).catch(error => {
        console.error('Error fetching Mars photos:', error);
    })
})