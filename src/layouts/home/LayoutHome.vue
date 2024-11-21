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
                command: () => { router.push('/management') }
            },
            {
                label: 'Log out',
                command: () => { router.push('/login') }
            }
        ]
    }
]);
</script>

<template>
    <div class="position-fixed position-top-none w-screen">
        <NavBar class="m-1">
            <template #avatar>
                <VAvatar :items="items"></VAvatar>
            </template>
        </NavBar>
    </div>
    <div class="h-screen w-screen p-2 pt-20">
        <RouterView></RouterView>
    </div>
</template>