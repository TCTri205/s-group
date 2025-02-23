<script setup>
// đem ra thằng cha
//     const data = ref({
//     id: 1,
//     image: '	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
//     name: 'heheh',
//     types: [
//         'smile',
//         'cry'
//     ]
// })

const props = defineProps(['data'])

</script>

<template>
    <div class="card-box">
        <p>#{{ props.data.id }}</p>
        <img :src="props.data.sprites.front_default" alt="data.name" height="100" width="100">
        <p>{{ props.data.name }}</p>
        <div class="types-box">
            <p v-for="(item,index) in props.data.types" :key="index">
                {{ item.type.name }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.card-box {
    width: 180px;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


</style>