<script setup lang="ts">
import VTable from '@/components/VTable.vue';

const columns = [
    {
        field: "username",
        header: "Username"
    },
    {
        field: "email",
        header: "Email"
    }
]
</script>

<template>
    <VTable :columns="columns"></VTable>
</template>