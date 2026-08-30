<script setup lang="ts">
import { useToast } from 'primevue/usetoast';
import GlobalEventManager from './common/utils/GlobalEventManager';

const toast = useToast();

GlobalEventManager.addListener('show-toast', (event) => 
	toast.add((event as CustomEvent).detail)
)
</script>

<template>
	<Toast />	
	<router-view />
</template>

<style src="./styles/index.css"></style>
