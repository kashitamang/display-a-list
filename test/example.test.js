// IMPORT MODULES under test here:
//import { example } from '../example.js';

import { renderCountry, renderPlanet } from '../utils.js';

import { countries } from '../countries.js';
import { planets } from '../planets.js';


const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test renderCounty() function', (expect) => {
    
    const expected = `<div class="country"><h1>nepal</h1><img src="./assets/nepal.jpg"><p>nepal has a population of 28,095,714 and 123 languages</p></div>`;
    
    const actual = renderCountry(countries[0]);

    expect.equal(actual.outerHTML, expected);
});

test('test renderPlanet() function', (expect) => {

    const expected = `<div class="planet"><h1>mars</h1><img src="./assets/mars.jpg"><p>mars is the 4th planet from the sun</p><h2>materials:</h2><ul><li>nickel</li><li>iron</li><li>silicon</li></ul></div>`;

    const actual = renderPlanet(planets[0]);

    expect.equal(actual.outerHTML, expected);
});

