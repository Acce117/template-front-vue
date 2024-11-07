<script setup lang="ts">
import Menubar from 'primevue/menubar';
import LanguageSelector from './LanguageSelector.vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <Menubar>
        <template #start>
            <h2>{{ title }}</h2>
        </template>
        <template #end>
            <div>
                <LanguageSelector></LanguageSelector>
                <!-- TODO change router for icon or Logged User options to nav -->
                <slot name="router"></slot>
            </div>
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

div {
    display: flex;
    align-items: center
}
</style>