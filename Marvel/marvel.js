async function apimarvel(){
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const heroName = document.getElementById('heroName').value;
        const baseURL = 'https://gateway.marvel.com/v1/public/characters';
        const ts = '1';  // timestamp
        const apiKey = '67788e74df746a1523d8ebb504ee1008';
        const hash = 'cf5ec9bfa5a156f031a69417cd0e012c';

        const url = `${baseURL}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${heroName}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const hero = data.data.results[0];
                const imageUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imgElement.alt = hero.name;

                const container = document.getElementById('heroImageContainer');
                container.innerHTML = '';
                container.appendChild(imgElement);
            })
            .catch(error => {
                console.log('Error fetching data: ', error);
            });
    });
}