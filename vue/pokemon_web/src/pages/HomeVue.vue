<script setup>
import { ref, computed, onMounted } from "vue";
import { RouterLink } from "vue-router";
// import HomeVue from "./pages/HomeVue.vue";
// import DetailVue from "./pages/DetailVue.vue";
import PokemonContainer from ".././components/PokemonContainer.vue";

// const router = useRouter();

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

async function getPokemonData(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    // Gọi API để lấy thông tin species (chứa mô tả và tiến hóa)
    const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const speciesData = await speciesResponse.json();

    // Lấy mô tả bằng tiếng Anh (nếu có)
    const descriptionEntry = speciesData.flavor_text_entries.find(entry => entry.language.name === "en");
    const description = descriptionEntry ? descriptionEntry.flavor_text.replace(/\f/g, " ") : "No description available.";

    // Gọi API tiến hóa
    const evolutionResponse = await fetch(speciesData.evolution_chain.url);
    const evolutionData = await evolutionResponse.json();

    // Xây dựng chuỗi tiến hóa (lấy ID từ URL)
    const evolutionChain = [];
    let current = evolutionData.chain;

    while (current) {
      const speciesUrlParts = current.species.url.split("/");
      const pokemonId = speciesUrlParts[speciesUrlParts.length - 2]; // Lấy ID từ URL

      evolutionChain.push({
        name: current.species.name,
        image: getImageUrl(pokemonId)
      });

      current = current.evolves_to.length ? current.evolves_to[0] : null;
    }

    return {
      id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      abilities: data.abilities.map(abilityInfo => abilityInfo.ability.name),
      stats: data.stats.map(statInfo => ({
        name: statInfo.stat.name,
        base_stat: statInfo.base_stat,
      })),
      types: data.types.map(typeInfo => typeInfo.type.name),
      image: getImageUrl(id),
      imageLoaded: false,
      description, // Thêm mô tả
      evolutionChain, // Chuỗi tiến hóa có ảnh
    };
  } catch (error) {
    console.error(`Lỗi khi lấy dữ liệu Pokemon ID ${id}:`, error);
    return {
      id,
      name: `Pokemon ${id}`,
      height: null,
      weight: null,
      abilities: [],
      stats: [],
      types: [],
      image: getImageUrl(id),
      imageLoaded: false,
      description: "No description available.",
      evolutionChain: [],
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

    <input type="text" class="search-bar" v-model="searchQuery"  placeholder="Search some Pokemon..." />

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
    gap: 20px;
    width: 1200px;
    margin: auto;
    flex-wrap: wrap;
}

.pokemon-api {
    font-size: 37.5px;
    display: flex;
    justify-content: center;
    font-weight: 400;
    padding: 20px;
    padding-bottom: 28px;
}

.search-bar {
    /* outline: none;
    outline: 1px solid #00000036; */
    font-size: 16px;
    display: flex;
    margin-bottom: 24px;
    width: 500px;
    height: 58.4px;
    align-self: center;
    justify-self: center;
    padding: 8.4px 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 30px;
    box-shadow: #64646f33 0 7px 29px;
    transition: all .2s ease;
}

.search-bar:focus {
    outline: 1px solid #000000;
}

.load-more {
    display: block;
    margin: 20px auto;   
    padding: 12px 24px;
    background-color: #ff6347;
    color: white;
    border: none;
    border-radius: 10px;
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
</style>

