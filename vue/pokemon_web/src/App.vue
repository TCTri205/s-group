<script setup>
import { ref, computed, onMounted } from "vue";
import PokemonContainer from "./components/PokemonContainer.vue";

const pokemonList = ref([]);
const searchQuery = ref("");
const currentStart = ref(1);
const batchSize = ref(36);
const maxPokemon = 898;
const threshold = 577;

// lấy ảnh pokemon
function getImageUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

// lấy dự liệu pokemon
async function getPokemonData(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return {
      id,
      name: data.name,
      types: data.types.map((typeInfo) => typeInfo.type.name),
      image: getImageUrl(id),
      imageLoaded: false,
    };
  } catch (error) {
    console.error(`Lỗi khi lấy dữ liệu Pokemon ID ${id}:`, error);
    return {
      id,
      name: `Pokemon ${id}`,
      types: [],
      image: getImageUrl(id),
      imageLoaded: false,
    };
  }
}

async function loadPokemon(start, count) {
  const newPokemon = [];
  for (let i = start; i < start + count && i <= maxPokemon; i++) {
    const pokemon = await getPokemonData(i);
    newPokemon.push(pokemon);
  }
  pokemonList.value.push(...newPokemon);
}

async function loadMore() {
  if (currentStart.value <= threshold) {
    await loadPokemon(currentStart.value, batchSize.value);
    currentStart.value += batchSize.value;
    batchSize.value *= 2;

    if (currentStart.value > threshold && currentStart.value <= maxPokemon) {
      await loadPokemon(
        currentStart.value,
        maxPokemon - currentStart.value + 1
      );
      currentStart.value = maxPokemon + 1;
    }
  }
}

onMounted(() => {
  loadPokemon(currentStart.value, batchSize.value);
  currentStart.value += batchSize.value;
});

const filteredPokemon = computed(() => {
  return pokemonList.value.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <div class="container">
    <h2 class="pokemon-api">Pokemon API</h2>

    <input type="text" id="search-bar" v-model="searchQuery"  placeholder="Search some Pokemon..." />

    <div>
      <PokemonContainer :pokemonList="filteredPokemon"></PokemonContainer>
    </div>

    <button id="load-more" class="load-more" @click="loadMore">Load More</button>
  </div>
</template>

<style scoped>
body {
    /* font-family: Arial, sans-serif; */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
    display: flex;
    justify-content: center; 
    align-items: center; 
    min-height: 100vh; 
    margin: 0; 
    color: #2C3E50;
}
  
.container {
    display: flex;
    flex-direction: column;
    /* gap: 20px; */
    width: 1334px;
    margin: auto;
    flex-wrap: wrap;
}

.pokemon-api {
    font-size: 37.5px;
    display: flex;
    justify-content: center;
    font-weight: 400;
    padding: 24px;
    padding-bottom: 24px;
}

#search-bar {
    /* outline: none; */
    /* outline: 1px solid #00000036; */
    font-size: 16px;
    display: flex;
    margin-bottom: 39px;
    width: 458.4px;
    height: 40px;
    align-self: center;
    padding: 8.4px 20px;
    /* padding: 20px; */
    border: 1px solid #ccc;
    border-radius: 30px;
    box-shadow: #64646f33 0 7px 29px;
    transition: all .2s ease;
}

#search-bar:focus {
    outline: 1px solid #000000;
}

.pokemon-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 12px;
    padding: 10px 5px;
    width: 90%;
    text-transform: capitalize;
    max-width: 1200px;
    color: black;
}

.pokemon {
    text-align: center;
    border: 1px solid #ddd;
    border: none;
    width: 178.32px;
    border-radius: 10px;
    /* padding: 10px; */
    padding: 10px 5px;
    background-color: #f9f9f9;
    box-shadow: 9px 9px rgba(0, 0, 0, 0.05);
    cursor: pointer;
}

.pokemon img {
    width: 179.91px;
    height: 179.91px;
}

.pokemon-id {
    font-weight: 400;  
    font-size: 15px;
    margin: 0px;
}

h3 {
    font-size: 17.55px;
    font-weight: 700;
    line-height: 28px;
    text-transform: capitalize;
    text-align: center;
    margin: 0px;
}

.pokemon:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transform: translateY(-1px);
}

.load-more {
    display: block;
    margin: 20px auto;   
    padding: 10px 20px;
    background-color: #ff6347;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    line-height: 35px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.load-more:hover {
    background-color: #e5533e;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
}

.load-more:active {
    transform: scale(0.95);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.pokemon-types {
    color: black;
    display: flex;
    gap: 5.5px;
    /* margin-top: 3px; */
    justify-content: center;
}

.type {
    padding: 6px 4px 4px;
    border-radius: 5px;
    /* margin: 0 3px; */
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;
    box-shadow: #0000000d 0 6px 24px,#00000014 0 0 0 1px;
}

.type.water {
    background-color: #6890f0;
}
.type.fire {
    background-color: #FF421C;
}
.type.grass {
    background-color: #78c850;
}
.type.electric {
    background-color: #f8d030;
}
.type.ice {
    background-color: #98d8d8;
}
.type.fighting {
    background-color: #C22E28;
}
.type.psychic {
    background-color: #f85888;
}
.type.dark {
    background-color: #705848;
}
.type.fairy {
    background-color: #ee99ac;
}
.type.steel {
    background-color: #b8b8d0;
}
.type.ground {
    background-color: #e0c068;
}
.type.poison {
    background-color: #a040a0;
}
.type.rock {
    background-color: #b8a038;
}
.type.bug {
    background-color: #a8b820;
}
.type.dragon {
    background-color: #7038f8;
}
.type.ghost {
    background-color: #705898;
}
.type.flying {
    background-color: #a890f0;
}

.type.normal {
    background-color: #A8A77A;
}

</style>

