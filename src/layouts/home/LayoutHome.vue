<script setup lang="ts">
import { ref } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import type { MenuItem } from 'primevue/menuitem';
import NavBar from '@/components/nav-bar/Index.vue';
import VAvatar from '@/components/nav-bar/VAvatar.vue';
import { useI18n } from 'vue-i18n';
import { userStore } from '@/common/store/user-store';

const router = useRouter();
const i18n = useI18n();

const items = ref<MenuItem[]>([
    {
        label: () => i18n.t('nav-options.dashboard'),
        command: () => { router.push('/dashboard') }
    },
    ...userStore().options()
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