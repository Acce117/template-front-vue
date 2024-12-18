<script setup lang="ts">
import Menubar from 'primevue/menubar';
import LanguageSelector from './LanguageSelector.vue';
import Button from 'primevue/button';

const props = defineProps({})

function toggleDarkMode() {
    document.documentElement.classList.toggle('app-dark');
}
</script>

<template>
    <Menubar>
        <template #start>
            <h2>{{ $t('nav_bar.header') }}</h2>
        </template>
        <template #end>
            <div>
                <LanguageSelector></LanguageSelector>
                <Button @click="toggleDarkMode()">Dark Mode</Button>
                <slot name="avatar"></slot>
            </div>
        </template>
    </Menubar>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h2 {
    margin: 0
}

div {
    display: flex;
    align-items: center
}
</style>