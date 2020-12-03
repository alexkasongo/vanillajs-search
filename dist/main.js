/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("const createCard = ({\n  title,\n  href,\n  img\n}) => `\n    <div class=\"card\">\n        <img src=\"${img}\" class=\"card-img-top\" alt=\"${img}\">\n        <div class=\"body\">\n            <h5 class=\"card-title\">\n                ${title}\n            </h5>\n            <a class=\"btn btn-primary\" href=\"https://www.rifftrax.com/${href}\">Watch</a>\n        </div>\n    </div>\n`;\n\nfetch('movies.json') // convert to json  \n.then(res => res.json()).then(movies => {\n  // sort movies\n  movies.sort((a, b) => a.title.localeCompare(b.title));\n  const cards = document.getElementById('cards');\n  const elRow = document.createElement('div');\n  elRow.className = 'row'; // add a child element to another element, in this case append the row to the card element\n\n  cards.appendChild(elRow);\n\n  const updateMovies = movies => {\n    elRow.innerHTML = movies.map(card => `<div class=\"col-6 col-lg-3 mt-3\">${card}</div>`).join('');\n  }; // gives us back cards html element\n\n\n  updateMovies(movies.map(movie => createCard(movie)));\n  const search = document.querySelector('.search');\n  search.addEventListener('keyup', evt => {\n    const text = evt.target.value.toLowerCase();\n    updateMovies(movies.filter(({\n      title\n    }) => title.toLowerCase().includes(text)).map(movie => createCard(movie)));\n  });\n});\n\n//# sourceURL=webpack://rifftrax/./src/index.js?");
/******/ })()
;