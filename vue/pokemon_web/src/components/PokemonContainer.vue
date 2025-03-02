<script setup>
import { useRouter } from 'vue-router';
// import {RouterLink, RouterView} from 'vue-router';
// import { ref, computed, onMounted } from 'vue';
import DetailVue from '@/pages/Detail.vue';
import { defineProps } from 'vue';

const props = defineProps({
  pokemonList: Array,
});

const router = useRouter();

function goToDetail(pokemon) {
  sessionStorage.setItem('pokemonData', JSON.stringify(pokemon));
  router.push(`/detail/${pokemon.name}`);
  // router.push({ name: 'Detail', params: { name: pokemon.name } });
  console.log("Complete goToDetail");
}

</script>

<template>
  <div class="pokemon-container">
    <div
      v-for="pokemon in pokemonList"
      :key="pokemon.id"
      
      :data-name="pokemon.name.toLowerCase()"
      :data-types="pokemon.types.join(' ').toLowerCase()"
    >
      <button @click="goToDetail(pokemon)" class="pokemon">
        <!-- {{ typeof pokemon }} -->
        <h4 class="pokemon-id">#{{ pokemon.id }}</h4>

        <img :src="pokemon.image" class="pokemon-skeleton" />

        <h3>{{ pokemon.name }}</h3>

        <div class="pokemon-types">
          <span
            v-for="type in pokemon.types"
            :key="type"
            :class="'type ' + type"
          >
            {{ type }}
          </span>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
.pokemon-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  /* padding: 10px 5px; */
  width: 100%;
  text-transform: capitalize;
  /* width: 1336px; */
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

.image-skeleton[data-v-2ddcc88a] {
  padding-top: 100%;
  background-size: contain;
  background-image: url(data:image/png;base64,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);
  background-repeat: no-repeat;
  background-position: center center;
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
  box-shadow: #0000000d 0 6px 24px, #00000014 0 0 0 1px;
}

.type.water {
  background-color: #6890f0;
}
.type.fire {
  background-color: #ff421c;
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
  background-color: #c22e28;
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
  background-color: #a8a77a;
}
</style>