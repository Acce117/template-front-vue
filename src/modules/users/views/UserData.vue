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

const submitCb = ref((...args: any[]) => { });

const scenario = ref('create');
</script>

<template>
    <div class="flex flex-justify-between flex-align-center mb-10">
        <h2>{{ $t('management.users.title') }}</h2>
        <Button @click="() => {
            element = null;
            scenario = 'create';
            submitCb = userController.createElement;
            visible = true
        }" size="small">{{ $t('management.users.create') }}</Button>
    </div>

    <DeleteConfirmation ref="deleteConfirmation" @accept="() => { if (element) userController.delete(element.id) }" />

    <VTable :model="UserModel.getColumns()" :value="userController.getElements().response.value"
        :actions_header="$t('management.actions')">
        <template #actions="{ data }">
            <Button @click="() => {
                scenario = 'update';
                element = data;
                submitCb = userController.update;
                visible = true
            }" size="small" class="mr-2">{{ $t('management.update').toLowerCase() }}</Button>
            <Button @click="() => {
                element = data;
                deleteConfirmation.showConfirm()
            }" size="small" severity="danger">{{ $t('management.delete').toLowerCase() }}</Button>
        </template>
    </VTable>

    <VDialog v-model:visible="visible" :title="$t('management.users.create')">
        <CreateUser @submit="(data) => {
            submitCb(data);
            visible = false
        }" :scenario :element></CreateUser>
    </VDialog>
</template>
