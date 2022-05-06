// IMPORT MODULES under test here:
//import { example } from '../example.js';

import { renderCountry, renderPlanet, renderSign } from '../utils.js';

import { countries } from '../countries.js';
import { planets } from '../planets.js';
import { signs } from '../signs.js';

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

test('renderSign() function', (expect) => {

    const expected = `<div class="sign"><h2>sagittarius</h2><h3>(nov.21 - dec.21)</h3><img src="./assets/sagittarius.jpg"><h4 class="saying">"seeking, seeking, seeking"</h4><p>sagittarius is a sun sign in the 9th house associated with:</p><ul><li>higher education</li><li>foreign travel</li><li>spirituality</li><li>wisdom</li></ul></div>`;

    const actual = renderSign(signs[0]);

    expect.equal(actual.outerHTML, expected);
});