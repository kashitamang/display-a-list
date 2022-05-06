export function renderCountry(country) {
    const div = document.createElement('div');
    div.classList.add('country');

    const h1 = document.createElement('h1');
    h1.textContent = country.name;

    const img = document.createElement('img');
    img.src = country.image;

    const p = document.createElement('p');
    p.textContent = `${country.name} has a population of ${country.population} and ${country.languages} languages`;

    div.append(h1, img, p);
    return div;
}

export function renderPlanet(planet) {
    const div = document.createElement('div');
    div.classList.add('planet');

    const h1 = document.createElement('h1');
    h1.textContent = planet.name;

    const img = document.createElement('img');
    img.src = planet.image;

    const p = document.createElement('p');
    p.textContent = `${planet.name} is the ${planet.distance} planet from the sun`;

    const h2 = document.createElement('h2');
    h2.textContent = 'materials:';

    const ul = document.createElement('ul');
    for (let material of planet.materials) {
        const li = document.createElement('li');
        li.textContent = material;
        ul.append(li);
    }

    div.append(h1, img, p, h2, ul);
    return div;
}

export function renderSign(sign) {
    const div = document.createElement('div');
    div.classList.add('sign');

    const h2 = document.createElement('h2');
    h2.textContent = sign.name;

    const h3 = document.createElement('h3');
    h3.textContent = sign.date;

    const img = document.createElement('img');
    img.src = sign.image;

    const h4 = document.createElement('h4');
    h4.classList.add('saying');
    h4.textContent = `"${sign.saying}"`;

    const p = document.createElement('p');
    p.textContent = `${sign.name} is a ${sign.type} sign in the ${sign.house} house associated with:`;

    const ul = document.createElement('ul');
    for (let trait of sign.traits) {
        const li = document.createElement('li');
        li.textContent = trait;
        ul.append(li);
    }
    
    div.append(h2, h3, img, h4, p, ul);
    return div;
}