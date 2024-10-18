<script setup lang="ts">
import VTable from '@/components/VTable.vue';
import Button from 'primevue/button';

const columns = [
    {
        field: "username",
        header: "Username",
    },
    {
        field: "email",
        header: "Email"
    }
]

const users = [
    {
        username: 'Acce117',
        email: 'e.carraler117@gmail.com'
    }
]
</script>

<template>
    <h2>{{ $t('management.users.title') }}</h2>
    <div>
        <Button>{{ $t('management.users.create') }}</Button>
    </div>
    <VTable :columns="columns" :value="users"></VTable>
</template>

<style scoped>
div {
    margin-bottom: 20px;
}
</style>