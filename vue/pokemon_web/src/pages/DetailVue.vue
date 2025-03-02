<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

const pokemonData = JSON.parse(sessionStorage.getItem("pokemonData"));
console.log(pokemonData.name);
</script>

<template>
  <div>
    <!-- {{ pokemonData.name + "-----" }} -->
    <div class="container">
      <RouterLink to="/" class="back-btn">&lt; Back</RouterLink>
      <div class="wrapper">
        <div class="col-full">
          <div
            class="image"
            :style="{ backgroundImage: `url(${pokemonData.image})` }"
          ></div>
          <div class="labels">
            <div
              v-for="type in pokemonData.types"
              :key="type"
              class="label type"
              :class="type"
            >
              {{ type }}
            </div>
          </div>
          <h2 class="name">{{ pokemonData.name }}</h2>
          <p class="entry">
            {{ pokemonData.description }}
          </p>
          <div class="detail__wrap">
            <div>
              <h3 class="label">Height</h3>
              <div class="detail-tag">{{ pokemonData.height }}</div>
            </div>
            <div>
              <h3 class="label">Weight</h3>
              <div class="detail-tag">{{ pokemonData.weight }}</div>
            </div>
          </div>
          <div class="ability">
            <h3 class="label">Abilities</h3>
            <div class="detail__wrap">
              <div v-for="ability in pokemonData.abilities" :key="ability">
                <div class="detail-tag">{{ ability }}</div>
              </div>
            </div>
          </div>
          <h3 class="label">Stats</h3>
          <div class="detail__wrap">
            <div class="tag">
              <div class="tag__label HP">HP</div>
              <div class="tag__detail">{{ pokemonData.stats[0].base_stat }}</div>
            </div>
            <div class="tag">
              <div class="tag__label ATK">ATK</div>
              <div class="tag__detail">{{ pokemonData.stats[1].base_stat }}</div>
            </div>
            <div class="tag">
              <div class="tag__label DEF">DEF</div>
              <div class="tag__detail">{{ pokemonData.stats[2].base_stat }}</div>
            </div>
            <div class="tag">
              <div class="tag__label SpA">SpA</div>
              <div class="tag__detail">{{ pokemonData.stats[3].base_stat }}</div>
            </div>
            <div class="tag">
              <div class="tag__label SpD">SpD</div>
              <div class="tag__detail">{{ pokemonData.stats[4].base_stat }}</div>
            </div>
            <div class="tag">
              <div class="tag__label SPD">SPD</div>
              <div class="tag__detail">{{ pokemonData.stats[5].base_stat }}</div>
            </div>
          </div>

          <h3 class="label">Evolution</h3>
          <div class="evolution">
            <div class="evolution__wrap">
              <div
                v-for="(evolution, index) in pokemonData.evolutionChain"
                :key="index"
                class="evolution"
              >
                <div class="form">
                  <h4 class="name">{{ evolution.name }}</h4>
                  <img :src="evolution.image" :alt="evolution.name" />
                </div>
                <div v-if="index < pokemonData.evolutionChain.length - 1" class="divider">&gt;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 50px auto;
}

.back-btn {
  display: block;
  position: fixed;
  top: 5%;
  left: 5%;
  border-radius: 30px;
  padding: 5px 10px;
  box-shadow: #63636333 0 4px 8px;
  z-index: 999;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
}

.col-full {
  max-width: 500px;
  width: 100%;
  margin: auto;
}

.image {
  width: 200px;
  height: 200px;
  margin: auto;
  background-size: cover;
}

.labels {
  display: flex;
  justify-content: center;
}

.label.type {
    padding: 3px 4px;
    border-radius: 5px;
    margin: 0 3px;
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;
    box-shadow: #0000000d 0 6px 24px,#00000014 0 0 0 1px;
}

h3.label {
  font-weight: 600;
  text-align: center;
  margin-bottom: 5px;
}

.name {
  white-space: nowrap;
  font-weight: 700;
  text-align: center;
  text-transform: capitalize;
}

.entry {
  margin-bottom: 10px;
  text-align: center;
}

.detail__wrap {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 5px;
}

.detail__wrap {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 5px;
}

.detail-tag {
  width: 100px;
  margin: 5px;
  padding: 2px;
  border-radius: 30px;
  background-color: #f6f8fc;
  text-align: center;
  text-transform: capitalize;
}

.tag {
  margin: 5px;
  padding: 5px;
  background-color: #f6f8fc;
  border-radius: 30px;
  box-shadow: #63636333 0 2px 8px;
}

.tag__label {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    font-size: 10px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
}

.tag__detail {
  text-align: center;
}

.HP {
  background-color: #df2140;
}

.ATK {
  background-color: #ff994d;
}

.DEF {
  background-color: #eecd3d;
}

.SpA {
  background-color: #85ddff;
}

.SpD {
  background-color: #96da83;
}

.SPD {
  background-color: #fb94a8;
}

.evolution__wrap {
  display: flex;
  justify-content: center;
}

.evolution,
.divider,
.form {
  display: flex;
  justify-content: space-around;
}

.form {
  align-items: center;
}

.divider {
  align-items: center;
  font-weight: 700;
  margin-right: 10px;
}

.water {
  background-color: #6890f0;
}
.fire {
  background-color: #ff421c;
}
.grass {
  background-color: #78c850;
}
.electric {
  background-color: #f8d030;
}
.ice {
  background-color: #98d8d8;
}
.fighting {
  background-color: #c22e28;
}
.psychic {
  background-color: #f85888;
}
.dark {
  background-color: #705848;
}
.fairy {
  background-color: #ee99ac;
}
.steel {
  background-color: #b8b8d0;
}
.ground {
  background-color: #e0c068;
}
.poison {
  background-color: #a040a0;
}
.rock {
  background-color: #b8a038;
}
.bug {
  background-color: #a8b820;
}
.dragon {
  background-color: #7038f8;
}
.ghost {
  background-color: #705898;
}
.flying {
  background-color: #a890f0;
}

.normal {
  background-color: #a8a77a;
}
</style>