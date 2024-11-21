<script setup lang="ts">
import Select from 'primevue/select';
</script>

<template>
    <div class="locale-changer ml-2 mr-2">
      <Select v-model="$i18n.locale" :options="$i18n.availableLocales"></Select>
    </div>
</template>