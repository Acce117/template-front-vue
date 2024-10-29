<script setup lang="ts">
import Dialog from 'primevue/dialog';
const props = defineProps({
   title: {
    type: String
   } 
});
</script>

<template>
    <Dialog modal>
        <template #header>
            <h2>{{ props.title }}</h2>
        </template>
        <slot>

        </slot>
    </Dialog>
</template>