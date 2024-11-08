<script setup lang="ts">
import { ref } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import type { MenuItem } from 'primevue/menuitem';
import NavBar from '@/components/NavBar.vue';
import VAvatar from '@/components/VAvatar.vue';

const router = useRouter();

const items = ref<MenuItem[]>([
    {
        label: 'Options',
        items: [
            {
                label: 'Dashboard',
                command: ()=>{ router.push('/management') }
            },
            {
                label: 'Log out',
                command: ()=>{ router.push('/login') }
            }
        ]
    }
]);
</script>

<template>
    <NavBar>
        <template #avatar>
            <VAvatar :items="items"></VAvatar>
        </template>
    </NavBar>
    <RouterView></RouterView>
</template>