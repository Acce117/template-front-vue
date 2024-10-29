<script setup lang="ts">
import Menubar from 'primevue/menubar';
import LanguageSelector from './LanguageSelector.vue';

</script>

<template>
    <Menubar>
        <template #start>
            <h2>Title</h2>
        </template>
        <template #end>
            <LanguageSelector></LanguageSelector>
        </template>
    </Menubar>
</template>

<style scoped>
nav {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h2 {
    margin: 0
}
</style>