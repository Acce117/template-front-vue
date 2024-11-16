<script setup lang="ts">
import Menubar from 'primevue/menubar';
import LanguageSelector from './LanguageSelector.vue';

const props = defineProps({})
</script>

<template>
    <Menubar>
        <template #start>
            <h2>{{ $t('nav_bar.header') }}</h2>
        </template>
        <template #end>
            <div>
                <LanguageSelector></LanguageSelector>
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