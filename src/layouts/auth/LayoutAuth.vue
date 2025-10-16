<script setup lang="ts">
import LanguageSelector from '@/common/components/LanguageSelector.vue';
import { ref } from 'vue';
import { RouterView } from 'vue-router';

const authForm = ref<{ header: Function } | null>(null);
</script>

<template>
    <div class="p-3 position-fixed flex flex-justify-end w-screen">
        <LanguageSelector></LanguageSelector>
    </div>
    <RouterView v-slot="{ Component }">
        <div class="flex flex-col flex-justify-center w-screen h-screen">
            <div class="m-a w-76">
                <!-- <h1 class="mb-10">{{ $t(authForm?.header() + '') }}</h1> -->
                <component :is="Component"></component>
            </div>
        </div>
    </RouterView>
</template>
