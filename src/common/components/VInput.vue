<script setup lang="ts">
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';

const props = defineProps({
    label: {
        type: String
    },
});

const model = defineModel();
</script>

<template>
    <FloatLabel variant="on">
        <InputText v-model="model" v-bind="{ ...$attrs }"></InputText>
        <label for="">{{ props.label }}</label>
    </FloatLabel>
</template>

<style scoped>
input {
    width: 100%;
}
</style>