document.getElementById('deckForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const deckName = document.getElementById('deckName').value;
    const apiUrl = `https://api.example.com/mtg/cards?deck=${encodeURIComponent(deckName)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cards = data.cards;
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '<h2>Results:</h2>';
            cards.forEach(card => {
                const content = `<p>${card.name}: $${card.price}</p>`;
                resultsDiv.innerHTML += content;
            });
        })
        .catch(error => console.error('Error fetching card data:', error));
});
