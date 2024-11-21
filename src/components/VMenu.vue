<script setup lang="ts">
import Menu from 'primevue/menu';

const props = defineProps({
    title: {
        type: String,
        required: true,
    }
});

</script>

<template>
    <Menu v-bind="{ ...$attrs, ...props }" class="p-3">
        <template #start>
            <h2>{{ title }}</h2>
        </template>
        <template #item="{ item, props }">
            <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route">
                {{ item.label }}
            </RouterLink>
        </template>
    </Menu>
</template>