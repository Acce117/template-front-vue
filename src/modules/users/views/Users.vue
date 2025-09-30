<script setup lang="ts">
import { inject, ref, type VNodeRef } from 'vue';
import Button from 'primevue/button';
import VTable from '@/components/VTable.vue';
import VDialog from '@/components/VDialog.vue';
import DeleteConfirmation from '@/components/confirm-messages/DeleteConfirmation.vue';
import UserForm from './components/UserForm.vue';
import { UserModel } from '../classes/user';
import type { IService } from '@/common/classes/service';

const userService: IService<UserModel> | undefined  = inject('USER_SERVICE');

const visible = ref(false);

const deleteConfirmation = ref<VNodeRef | undefined>(undefined);

const element = ref<any>(undefined);

const submitCb = ref<(...args: any[]) => any>(() => { });

const scenario = ref('create');
</script>

<template>
    <div class="flex flex-justify-between flex-align-center mb-5">
        <h2>{{ $t('management.users.title') }}</h2>
    </div>

    <DeleteConfirmation ref="deleteConfirmation" @accept="() => { if (element) userService!.delete(element.id) }" />

    <VTable :model="UserModel.getColumns()" :value="userService!.getElements().response.value"
        :actions_header="$t('management.actions')">
        <template #header_actions>
            <Button @click="() => {
                element = null;
                scenario = 'create';
                submitCb = userService!.createElement;
                visible = true
            }" size="small" class="mr-20">{{ $t('management.users.create') }}</Button>
        </template>
        <template #actions="{ data }">
            <Button @click="() => {
                scenario = 'update';
                element = data;
                submitCb = userService!.update;
                visible = true
            }" size="small" class="mr-2">{{ $t('management.update').toLowerCase() }}</Button>
            <Button @click="() => {
                element = data;
                deleteConfirmation.showConfirm()
            }" size="small" severity="danger">{{ $t('management.delete').toLowerCase() }}</Button>
        </template>
    </VTable>

    <VDialog v-model:visible="visible" :title="$t(`management.users.${scenario}`)">
        <UserForm @submit="(data: any) => {
            submitCb(data);
            visible = false
        }" :scenario :element></UserForm>
    </VDialog>
</template>
