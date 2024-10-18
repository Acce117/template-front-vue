<script setup lang="ts">
import Menu from 'primevue/menu';

const props = defineProps({});
</script>

<template>
    <Menu v-bind="{ ...$attrs, ...props }" style="width: 100%; border-radius: 10px; padding: 0 15px;">
        <template #start>
            <h2>Menu</h2>
        </template>
        <template #item="{ item, props }">
            <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route">
                {{ item.label }}
            </RouterLink>
        </template>
    </Menu>
</template>