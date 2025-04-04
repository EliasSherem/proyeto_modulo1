let url = "https://api.nasa.gov/planetary/apod?api_key=RcRegrIbysXDFxZTPXbug6AhBlrzrfuAuNxQnc7c&date="
document.getElementById('apod-form').addEventListener('submit', function(event) {
    document.getElementById('card-container').style.display = 'flex';;
    event.preventDefault()});

    document.getElementById('submit').addEventListener('click', function() {
    const date = document.getElementById('date').value;
    console.log(date);
    url += date;
    fetch(url).then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    }).then(data => {
        const apod = document.getElementById("card-container");
        apod.innerHTML = `<div class="card"><h3>${data.title}</h3><p>${data.explanation}</p><br><br><img src="${data.hdurl}" alt="${data.title}"></div>`;
        const form = document.getElementById('form');
        form.style.display = 'none';
    }).catch(error => {
        console.error('Error fetching APOD:', error);})
    })