<template>
    <div>
      <Select v-model="$i18n.locale" :options="$i18n.availableLocales"></Select>
    </div>
</template>