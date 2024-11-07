<script setup lang="ts">
import { ref, type VNodeRef } from 'vue';
import Button from 'primevue/button';
import VTable from '@/components/VTable.vue';
import VDialog from '@/components/VDialog.vue';
import DeleteConfirmation from '@/components/confirm-messages/DeleteConfirmation.vue';
import userController from '../controller/UserController';
import CreateUser from './CreateUser.vue';
import { UserModel } from '../classes/user';

const visible = ref(false);

const deleteConfirmation = ref<VNodeRef | undefined>(undefined);

const element = ref<any>(undefined);
</script>

<template>
    <h2>{{ $t('management.users.title') }}</h2>
    <div>
        <Button @click="() => visible = true">{{ $t('management.users.create') }}</Button>
    </div>
    
    <DeleteConfirmation ref="deleteConfirmation" @accept="() => { if(element) userController.delete(element.id) }"/>
    
    <VTable :model="UserModel.getColumns()" :value="userController.getElements().response.value" :actions_header="$t('management.actions')">
        <template #actions="{ data }">
            <Button @click="()=>{
                element = data;
                deleteConfirmation.showConfirm()
            }">{{ $t('management.delete').toLowerCase() }}</Button>
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