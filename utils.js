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