fetch('../header/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('headerComponent').innerHTML = data;
    });

fetch('../home/home.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('homeComponent').innerHTML = data;
    });


fetch('../partners/partners.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('partnersComponent').innerHTML = data;
    });

fetch('../features/features.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('featuresComponent').innerHTML = data;
    });

fetch('../jackpots/jackpots.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('jackpotsComponent').innerHTML = data;
    });

    
    fetch('../integration/integration.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('integrationComponent').innerHTML = data;
    });

    fetch('../app/app.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('appComponent').innerHTML = data;
    });