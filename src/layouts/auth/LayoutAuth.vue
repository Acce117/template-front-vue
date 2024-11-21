<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import Panel from 'primevue/panel';
import { ref } from 'vue';
import { RouterView } from 'vue-router';

const authForm = ref<{ header: string } | null>(null);
</script>

<template>
    <div class="position-fixed position-top-none w-screen">
        <NavBar class="m-1"></NavBar>
    </div>
    <div class="flex flex-col flex-justify-center w-screen h-screen">
        <div class="flex flex-justify-center flex-align-center">
            <RouterView v-slot="{ Component }">
                <Panel :header="authForm?.header ? $t(authForm?.header + '') : ''" class="m-1">
                    <component :is="Component" ref="authForm"></component>
                </Panel>
            </RouterView>
        </div>
    </div>
</template>
