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

fetch("movies.json")
  // convert to json here
  .then((res) => res.json())
  .then((movies) => {
    // sort movies
    movies.sort((a, b) => a.title.localeCompare(b.title));

    const cards = document.getElementById("cards");
    const elRow = document.createElement("div");
    elRow.className = "row";
    // add a child element to another element, in this case append the row to the card element
    cards.appendChild(elRow);

    const updateMovies = (movies) => {
      elRow.innerHTML = movies
        .map((card) => `<div class="col-6 col-lg-3 mt-3">${card}</div>`)
        .join("");
    };

    // gives us back cards html element
    updateMovies(movies.map((movie) => createCard(movie)));

    const search = document.querySelector(".search");
    search.addEventListener("keyup", (evt) => {
      const text = evt.target.value.toLowerCase();
      updateMovies(
        movies
          .filter(({ title }) => title.toLowerCase().includes(text))
          .map((movie) => createCard(movie))
      );
    });
  });
