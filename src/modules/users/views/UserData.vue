<script setup lang="ts">
import VTable from '@/components/VTable.vue';
import Button from 'primevue/button';
import userController from '../controller/UserController';
import { ref } from 'vue';
import CreateUser from './CreateUser.vue';
import VDialog from '@/components/VDialog.vue';

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

const visible = ref(false);
</script>

<template>
    <h2>{{ $t('management.users.title') }}</h2>
    <div>
        <Button @click="() => visible = true">{{ $t('management.users.create') }}</Button>
    </div>
    <VTable :columns="columns" :value="userController.getElements().response.value">
        <template #actions="{ data }">
            <Button @click="()=>{ userController.delete(data.id) }">delete</Button>
        </template>
    </VTable>

    <VDialog v-model:visible="visible" :title="$t('management.users.create')">
        <CreateUser 
        @submit="(data)=>{
            userController.createElement(data);
            visible=false
        }"></CreateUser>
    </VDialog>
</template>

<style scoped>
div {
    margin-bottom: 20px;
}
</style>