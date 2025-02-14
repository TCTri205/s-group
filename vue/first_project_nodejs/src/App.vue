<script setup>
import { reactive, ref, computed } from 'vue';

const className = true ? "isRed" : "isBlue"
const objectOfAttrs = {
  class: "isRed",
  style: "background-color: green;",
  title: "class object of attrs"
}
let isRed = true

const cnt = ref(0)
const obj = reactive({
  name: 'John',
  age: 25,
  job: 'Dev'
})
function handleClick(){
  cnt.value++
  obj.age--
  console.log("clicked", cnt.value)
  console.log("hello", obj.age)
}
</script>

<template>
  <div>

    <p v-bind="objectOfAttrs">hhhhhh</p>
    <p :class="className">color</p>
    <button v-on:click="handleClick">Click me</button>

    <p v-if="isRed">red</p>
    <p v-else>not red</p>

    <p v-show="5 > 2">show me</p>
    
    <div>{{ cnt }}</div>
    <div>hello {{ obj.age }}</div>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<style scoped>
.isRed{
  color: red;
}
</style>
