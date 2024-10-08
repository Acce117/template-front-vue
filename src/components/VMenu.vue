<script setup lang="ts">
import Menu from 'primevue/menu';
import type { MenuItem } from 'primevue/menuitem';

const props = defineProps({
    model: {
        type: Array<MenuItem>,
    }
})
</script>

<template>
    <Menu :model="props.model" style="width: 100%; border-radius: 10px; padding: 5px">
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