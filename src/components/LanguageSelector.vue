<script setup lang="ts">
import Select from 'primevue/select';
</script>

<template>
    <div>
      <Select v-model="$i18n.locale" :options="$i18n.availableLocales"></Select>
    </div>
</template>