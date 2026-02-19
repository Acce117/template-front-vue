<script setup lang="ts">
const props = defineProps({
   title: {
    type: String
   } 
});
</script>

<template>
    <Dialog modal>
        <template #header>
            <h2 class="mr-20">{{ props.title }}</h2>
        </template>
        <slot>

        </slot>
    </Dialog>
</template>