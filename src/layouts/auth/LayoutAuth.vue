<script setup lang="ts">
import Panel from 'primevue/panel';
import { ref } from 'vue';
import { RouterView } from 'vue-router';

const authForm = ref<{header: string} | null>(null);
</script>

<template>
    <div id="auth_container">
        <RouterView v-slot="{ Component }">
            <Panel :header="authForm?.header">
                <component :is="Component" ref="authForm"></component>
            </Panel>
        </RouterView>
    </div>
</template>

<style scoped>
#auth_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
}
</style>

