<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import type { MenuItem } from 'primevue/menuitem';

const props = defineProps({
    items: {
        type: Array<MenuItem>
    }
})

const router = useRouter();

const menu = ref();

function toggle(event: any) {
    menu.value.toggle(event);
}
</script>

<template>
    <Avatar label="P" size="large" shape="circle" @click="toggle"/>
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
</template>