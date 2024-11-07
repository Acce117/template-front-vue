<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <NavBar :title="$t('nav_bar.header')">
        <template #router>
            <RouterLink to="/management">Dashboard</RouterLink>
        </template>
    </NavBar>
    <RouterView></RouterView>
</template>