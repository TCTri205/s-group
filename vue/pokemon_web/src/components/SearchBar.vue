<script setup>
    console.log("SearchBar component loaded!");
</script>

<template>
    <input type="text" id="search-bar" placeholder="Search some Pokemon..." />
</template>

<style scoped>
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

</style>