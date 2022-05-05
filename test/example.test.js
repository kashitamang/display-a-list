// IMPORT MODULES under test here:
//import { example } from '../example.js';

import { renderCountry } from '../utils.js';
import { countries } from '../countries.js';


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

test('test country render function', (expect) => {
    
    const expected = `<div class="country"><h1>nepal</h1><img src="./assets/nepal.jpg"><p>nepal has a population of 28,095,714 and 123 languages</p></div>`;
    
    const actual = renderCountry(countries[0]);

    expect.equal(actual.outerHTML, expected);
});