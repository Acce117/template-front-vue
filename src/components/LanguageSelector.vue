<script setup lang="ts">
import Select from 'primevue/select';
</script>

<template>
    <div class="locale-changer">
      <Select v-model="$i18n.locale" :options="$i18n.availableLocales" style="margin: 0 10px;"></Select>
    </div>
</template>