const pokemonContainer = document.getElementById("pokemonContainer");
const loadMoreButton = document.getElementById("load-more");
const searchBar = document.getElementById("search-bar");

let currentStart = 1; 
const batchSize = 60;
let maxPokemon = 1000; 
const threshold = 240;
let allPokemon = [];


function getImageUrl(ID) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ID}.png`
}

async function getPokemonData(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        // get types 
        const name = data.name;
        const types = data.types.map(typeInfo => typeInfo.type.name);
        return {name, types};
    } catch (error) {
        console.error(`Loi khi lay du lieu Pokemon ID ${id}:`, error);
        return {name: `Pokemon ${id}`, types: []};
    }
}

async function renderPokemon(id) {
    const {name, types} = await getPokemonData(id);

    allPokemon.push({ id, name, types });

    div = document.createElement('div')
    div.className = 'pokemon';

    div.dataset.name = name.toLowerCase(); 
    div.dataset.types = types.join(" ").toLowerCase(); 

    const idTag = document.createElement('h4');
    idTag.className = 'pokemon-id';
    idTag.innerText = `#${id}`;

    imageTag = document.createElement('img');
    imageTag.className = 'pokemon-skeleton';
    imageTag.src = './image/placeholder-img.png'

    const finalImageUrl = getImageUrl(id);
    const tempImg = new Image(); 
    tempImg.src = finalImageUrl;
    tempImg.onload = () => {
        imageTag.src = finalImageUrl; 
    };
    

    nameTag = document.createElement('h3')
    nameTag.innerText = name;

    const typesContainer = document.createElement('div');
    typesContainer.className = 'pokemon-types';
    types.forEach(type => {
        const typeTag = document.createElement('span');
        typeTag.className = `type ${type}`; 
        typeTag.innerText = type;
        typesContainer.appendChild(typeTag);
    });

    div.appendChild(idTag);
    div.appendChild(imageTag);
    div.appendChild(nameTag);
    div.appendChild(typesContainer);

    pokemonContainer.appendChild(div);
}

async function loadPokemon(start, count) {
    for (let i = start; i < start + count; i++) {
        if (i > 1000) break; 
        await renderPokemon(i);
    }
}

loadMoreButton.addEventListener("click", async () => {
    if (currentStart <= threshold) {
        await loadPokemon(currentStart, batchSize);
        currentStart += batchSize;

        if (currentStart > threshold && currentStart <= maxPokemon) {
            await loadPokemon(currentStart, maxPokemon - currentStart + 1);
            currentStart = maxPokemon + 1; 
        }
    }
    if (currentStart > maxPokemon) {
        loadMoreButton.style.display = "none";
    }
});

loadPokemon(currentStart, batchSize);
currentStart += batchSize;

function renderFilteredPokemon(filteredPokemon) {
    pokemonContainer.innerHTML = ""; 

    filteredPokemon.forEach(pokemon => {
        const { id, name, types } = pokemon;

        const div = document.createElement('div');
        div.className = 'pokemon';

        const idTag = document.createElement('h4');
        idTag.className = 'pokemon-id';
        idTag.innerText = `#${id}`;

        const imageTag = document.createElement('img');
        imageTag.className = 'pokemon-skeleton';
        imageTag.src = getImageUrl(id);

        const nameTag = document.createElement('h3');
        nameTag.innerText = name;

        const typesContainer = document.createElement('div');
        typesContainer.className = 'pokemon-types';
        types.forEach(type => {
            const typeTag = document.createElement('span');
            typeTag.className = `type ${type}`;
            typeTag.innerText = type;
            typesContainer.appendChild(typeTag);
        });

        div.appendChild(idTag);
        div.appendChild(imageTag);
        div.appendChild(nameTag);
        div.appendChild(typesContainer);

        pokemonContainer.appendChild(div);
    });
}

searchBar.addEventListener("input", () => {

    const searchValue = searchBar.value.toLowerCase();

    const filteredPokemon = allPokemon.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchValue)
    );

    renderFilteredPokemon(filteredPokemon);

    const loadMoreButton = document.getElementById('load-more');
    loadMoreButton.style.display = 'none';
}); 