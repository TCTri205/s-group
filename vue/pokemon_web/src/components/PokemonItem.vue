<script setup>
import { useRouter } from 'vue-router';
// import {RouterLink, RouterView} from 'vue-router';
// import { ref, computed, onMounted } from 'vue';
import DetailVue from '@/pages/Detail.vue';
import { defineProps } from 'vue';


export default {
  props: {
    pokemonData: Object,
  },
  setup() {
    return {
      name: "Detail",
    };
  },
};

const props = defineProps({
  pokemonData: Object,
});

const router = useRouter();

function goToDetail(pokemon) {
  console.log("goToDetail", pokemon, pokemon.name);
  router.push({ name: "Detail", query: { name: pokemon.name } });
  console.log("Complete goToDetail", pokemon);
}

</script>


<template>
  <div>
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
</template>

<style scoped>

</style>