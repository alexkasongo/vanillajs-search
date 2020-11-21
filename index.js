const createCard = ({ title, href, img }) => `
    <div class="card">
        <img src="${img}" class="card-img-top" alt="${img}">
        <div class="body">
            <h5 class="card-title">
                ${title}
            </h5>
            <a class="btn btn-primary" href="https://www.rifftrax.com/${href}">Watch</a>
        </div>
    </div>
`;

const columns = (cards) => `
<div class="row">
    ${cards.map((card) => `<div class="col-6 col-lg-3 mt-3">${card}</div>`).join('')}
</div>
`;

fetch('movies.json')
    // convert to json  
    .then(res => res.json())
    .then(movies => {
        // sort movies
        movies.sort((a, b) => a.title.localeCompare(b.title));

        // gives us back cards html element
        const cards = document.getElementById('cards')
        cards.innerHTML = columns(movies.map((movie) => createCard(movie)));

        const search = document.querySelector('.search');
        search.addEventListener('keyup', (evt) => {
            const text = evt.target.value.toLowerCase();
            cards.innerHTML = columns(movies
                .filter(({ title }) => title.toLowerCase().includes(text))
                .map(movie => createCard(movie))
            );
        });
    });