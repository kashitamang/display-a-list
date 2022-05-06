// import functions and grab DOM elements
import { countries } from './countries.js';
import { renderCountry } from './utils.js';

import { planets } from './planets.js';
import { renderPlanet } from './utils.js';

import { signs } from './signs.js';
import { renderSign } from './utils.js';

// let state
const countryListEl = document.getElementById('countries');
const planetListEl = document.getElementById('planets');
const signListEl = document.getElementById('signs');

for (let country of countries) {
    const countryDiv = renderCountry(country);
    countryListEl.append(countryDiv);
}

for (let planet of planets) {
    const planetDiv = renderPlanet(planet);
    planetListEl.append(planetDiv);
}

for (let sign of signs) {
    const signDiv = renderSign(sign);
    signListEl.append(signDiv);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
