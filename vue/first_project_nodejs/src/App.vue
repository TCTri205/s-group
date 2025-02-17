<!-- <script setup>
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
</style> -->


<script setup>
import { reactive, ref, computed } from "vue";
import Title from "./components/Title.vue";
import Mo_dau from "./components/Mo_dau.vue";
import Hoat_dong from "./components/Hoat_dong.vue";
import Nhung_loi from "./components/Nhung_loi.vue";
import Tong_quan from "./components/Tong_quan.vue";
import bar_footer from "./components/bar_footer.vue";
import Muc_luc from "./components/Muc_luc.vue";

</script>

<template>
  <div>
    <div
      style="
        width: 100vw;
        height: 168px;
        background-color: black;
        position: relative;
        left: 0px;
        right: 0px;
        margin-bottom: 80px;
        display: flex;
        justify-content: center;
      "
    >
      <img
        src="https://images.viblo.asia/full/eff0e997-bb2b-4903-a217-0bccd1dc5509.png"
        width="1140"
        height="168"
        alt=""
        class="progressive-img_full"
      />
    </div>
    <div class="content">
      <div class="container" style="">
        <Title></Title>
        <Mo_dau />
        <Hoat_dong></Hoat_dong>
        <Nhung_loi></Nhung_loi>
        <Tong_quan></Tong_quan>
      </div>
      <div>
        <Muc_luc></Muc_luc>
      </div>
    </div>
      <div>
        <bar_footer></bar_footer>
      </div>
  </div>
</template>

<style>
#app {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px;
  margin: 0 auto;
}

div {
  margin: 0px;
  padding: 0px;
}

.center {
  display: flex;
  margin-right: auto;
  margin-left: auto;
}

.content {
  display: flex;
  gap: 0px;
}

.container {
  width: 760px;
  gap: 30px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  align-items: start;
  margin-left: 100px;
  flex-direction: column;
}

h3 {
  font-size: 26.1px;
  font-weight: 700;
  margin: 20px 0;
}

p {
  font-size: 18px;
  margin-bottom: 20px;
}
</style>
