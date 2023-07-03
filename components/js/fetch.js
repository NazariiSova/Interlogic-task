fetch('./components/header/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('headerComponent').innerHTML = data;
    });

fetch('./components/home/home.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('homeComponent').innerHTML = data;
    });


fetch('./components/partners/partners.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('partnersComponent').innerHTML = data;
    });

fetch('./components/features/features.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('featuresComponent').innerHTML = data;
    });

fetch('./components/jackpots/jackpots.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('jackpotsComponent').innerHTML = data;
    });


fetch('./components/integration/integration.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('integrationComponent').innerHTML = data;
    });

fetch('./components/app/app.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('appComponent').innerHTML = data;
    });

fetch('./components/ultimate/ultimate.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('ultimateComponent').innerHTML = data;
    });

fetch('./components/cards/cards.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('cardsComponent').innerHTML = data;
    });

fetch('./components/satisfaction/satisfaction.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('satisfactionComponent').innerHTML = data;
    });

fetch('./components/faq/faq.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('faqComponent').innerHTML = data;
    });
    fetch('./components/download/download.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('downloadComponent').innerHTML = data;
    });

    fetch('./components/footer/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footerComponent').innerHTML = data;
    });