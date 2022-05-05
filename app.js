// import functions and grab DOM elements
import { countries } from './countries.js';
import { renderCountry } from './utils.js';

// let state
const countryListEl = document.getElementById('countries');

for (let country of countries) {
    const countryDiv = renderCountry(country);
    countryListEl.append(countryDiv);
}


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
